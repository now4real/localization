// to run the table generator, go to the root of the project and launch the script:
// node util/generate-table-summary.js

const path = require('path')
const fs = require('fs')

// they need to be declared
const colors = require('colors')
const languages = require('@cospired/i18n-iso-languages')

// configure your preferred value
// see https://gist.github.com/rxaviers/7360908
const COMPLETE_SYMBOL = '✅' // ✔️
const PARTIAL_SYMBOL = '⚠️' // ⚠️
const MISSING_SYMBOL = '❌' // ✖️

const LOCALIZATION_PATH = path.join(__dirname, '../')

const COMPLETE = 2
const PARTIAL = 1
const MISSING = 0

function escapeRegExp (string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function getJSObject (fileContent) {
    return eval(fileContent.replace('export default', 'obj = '))
}

function validate (lang, langFilePath) {
    const file = langFilePath.substring(langFilePath.lastIndexOf('/') + 1)

    try {
        const fileContent = fs.readFileSync(langFilePath, 'utf8')

        // validate js file
        if (lang !== 'en' && file.endsWith('.js')) {
            const enFileContent = fs.readFileSync(`${LOCALIZATION_PATH}en/${file}`, 'utf8')

            const obj = getJSObject(fileContent)
            const enObj = getJSObject(enFileContent)

            const objKeys = Object.keys(obj)
            const enObjKeys = Object.keys(enObj)

            // the 2 files should contains the same number of keys
            console.assert(objKeys.length === enObjKeys.length, `${lang} - inconsistent size for the ${file.underline} file\n`.red)

            // all the keys of the en version should be present in the new file
            const notFounded = enObjKeys.filter(el => !objKeys.includes(el))

            console.assert(!notFounded.length, `${lang} - inconsistent content for the ${file.underline} file. Missing: ${notFounded.join(', ')}\n`.red)

            // all the values cannot be empty
            const empty = enObjKeys.filter(el => obj[el] === '')

            console.assert(!empty.length, `${lang} - inconsistent content for the ${file.underline} file. Empty: ${empty.join(', ')}\n`.red)

            // all the corresponding values should have the same type
            const wrongType = enObjKeys.filter(el => obj[el] && typeof(obj[el]) !== typeof(enObj[el]))

            console.assert(!wrongType.length, `${lang} - inconsistent content for the ${file.underline} file. Wrong type: ${wrongType.join(', ')}\n`.red)

            // every placeholder on the english version should be present
            const missingPlaceholder = enObjKeys.filter(el => {
                if (typeof(enObj[el]) !== 'string' || typeof(obj[el]) !== 'string') return false

                // get all the placeholders on the en version
                const enPlaceholders = enObj[el].match(/\$[A-Z]/g)

                if (enPlaceholders)
                    return enPlaceholders.filter(placeholder => obj[el].indexOf(placeholder) === -1).length > 0

                return false
            })

            console.assert(!missingPlaceholder.length, `${lang} - inconsistent content for the ${file.underline} file. Missing placeholder: ${missingPlaceholder.join(', ')}\n`.red)

            // in general all the values must differ
            // consider that there are cases in which the same translation would like to be used
            // enable the check with:
            // node generate-table-summary.js all
            // node generate-table-summary.js mn
            const args = process.argv.slice(2)
            const firstArg = args && args[0]

            if (firstArg && (firstArg === lang || firstArg === 'all')) {
                const untranslated = enObjKeys.filter(el => {
                    const isTODO = fileContent.match(new RegExp(`^.*${escapeRegExp(el)}.*TODO.*$`, 'gm'))

                    return obj[el] === enObj[el] && !isTODO
                })

                console.assert(!untranslated.length, `${lang} - inconsistent content for the ${file.underline} file. Untranslated: ${untranslated.join(', ')}\n`.red)
            }
        }

        // search for TODO
        if (fileContent.indexOf('TODO') > -1) {
            return PARTIAL
        } else {
            return COMPLETE
        }
    } catch (e) {
        //console.log(e.message)

        // the file does not exist
        if (e.code == 'ENOENT') {
            return MISSING
        }

        process.exit(1)
    }
}

function normalize (sum, filesNumber) {
    if (!sum) {
        return MISSING
    } else if (sum == filesNumber * 2) {
        return COMPLETE
    } else {
        return PARTIAL
    }
}

function toSymbol (status) {
    switch (status) {
        case 0:
            return MISSING_SYMBOL
        case 1:
            return PARTIAL_SYMBOL
        default:
            return COMPLETE_SYMBOL
    }
}

function getRegionalIndicatorSymbol (letter) {
    return String.fromCodePoint(0x1F1E6 - 65 + letter.toUpperCase().charCodeAt(0))
}

function toFlag (country) {
    if (country == 'en') return '🇺🇸'

    return getRegionalIndicatorSymbol(country[0]) + getRegionalIndicatorSymbol(country[1])
}

// based on the longest symbol
const CELL_LENGTH = 25

function createHeader () {
    const language = 'Language'
    const widget = '\`Widget\`'
    const userApp = '\`User App\`'
    const email = '\`Email\`'

    const dash = '-'

    const firstLine = `| ${language.padEnd(CELL_LENGTH, ' ')}| ${widget.padEnd(CELL_LENGTH, ' ')}| ${userApp.padEnd(CELL_LENGTH, ' ')}| ${email.padEnd(CELL_LENGTH, ' ')}|\n`
    const secondLine = `| ${dash.repeat(CELL_LENGTH)}| ${dash.repeat(CELL_LENGTH)}| ${dash.repeat(CELL_LENGTH)}| ${dash.repeat(CELL_LENGTH)}|\n`

    return firstLine + secondLine
}

function createRow (lang, widgetStatus, userAppStatus, emailStatus) {
    lang = `${toFlag(lang)} ${languages.getName(lang, 'en')} \`${lang}\``

    widgetStatus = toSymbol(widgetStatus)
    userAppStatus = toSymbol(userAppStatus)
    emailStatus = toSymbol(emailStatus)

    return `| ${lang.padEnd(CELL_LENGTH + 3, ' ')}| ${widgetStatus.padEnd(CELL_LENGTH, ' ')}| ${userAppStatus.padEnd(CELL_LENGTH, ' ')}| ${emailStatus.padEnd(CELL_LENGTH, ' ')}|\n`
}

function createBody (availableLangs) {
    return availableLangs
    .map(lang => {
        const langFolder = `${lang}/`
        const langCommonFolder = `common/${lang}/`

        return createRow(lang,
            validate(lang, `${langFolder}widget.js`),
            validate(lang, `${langFolder}user-app.js`),
            normalize( validate(lang, `${langFolder}email/user-welcome.html`) + validate(lang, `${langFolder}email/user-email-login.html`) + validate(lang, `${langCommonFolder}email/header.html`) + validate(lang, `${langCommonFolder}email/footer.html`), 4 )
        )
    })
    .join('')
}

function createLegend () {
    return `${COMPLETE_SYMBOL} translation completed  \n${PARTIAL_SYMBOL} partial translation (look for comments "**// TODO**")  \n${MISSING_SYMBOL} translation missing`
}

function createTable (availableLangs) {
    return createHeader() + createBody(availableLangs) + '\n' + createLegend()
}

console.log('Start...')

const ALPHA_2_CODES = languages.getAlpha2Codes()

const availableLangs = fs.readdirSync(LOCALIZATION_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(file => file !== 'util' && file !== 'common')
    .filter(lang => {
        const check = ALPHA_2_CODES[lang]

        !check && console.log(` Wrong language found: ${lang}\n`.red)

        return check
    })
    .sort()
//console.log(availableLangs)

console.log('Generating table...\n')

const table = createTable(availableLangs)

console.log(table.green)

//fs.writeFileSync(`${LOCALIZATION_PATH}/table-export.md`, table)