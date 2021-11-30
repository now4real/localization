const path = require('path')
const fs = require('fs')

// they need to be declared
const colors = require('colors')
const languages = require('@cospired/i18n-iso-languages')

// configure your preferred value
// see https://gist.github.com/rxaviers/7360908
const COMPLETE_SYMBOL = ':heavy_check_mark:' // ✔️
const PARTIAL_SYMBOL = ':warning:' // ⚠️
const MISSING_SYMBOL = ':heavy_multiplication_x:' // ✖️

const LOCALIZATION_PATH = path.join(__dirname, '../')

const COMPLETE = 2
const PARTIAL = 1
const MISSING = 0

function longestOfList (list) {
    return Math.max(...(list.map(el => el.length)))
}

function getJSObject (fileContent) {
    return eval(fileContent.replace('export default', 'obj = '))
}

function validate (lang, file) {
    try {
        const fileContent = fs.readFileSync(`${LOCALIZATION_PATH}${lang}/${file}`, 'utf8')

        // validate js file
        if (file.endsWith('.js')) {
            const enFileContent = fs.readFileSync(`${LOCALIZATION_PATH}en/${file}`, 'utf8')

            const objKeys = Object.keys(getJSObject(fileContent))
            const enObjKeys = Object.keys(getJSObject(enFileContent))

            // the 2 files should contains the same number of keys
            console.assert(objKeys.length === enObjKeys.length, `${lang} - inconsistent size for the ${file} file`.red)

            // all the keys of the en version should be present in the new file
            const notFounded = enObjKeys.filter(el => !objKeys.includes(el))

            console.assert(!notFounded.length, `${lang} - inconsistent content for the ${file} file. Missing: ${notFounded.join(', ')}\n`.red)
        }

        // search for TODO
        if (fileContent.indexOf('TODO') > -1) {
            return PARTIAL
        } else {
            return COMPLETE
        }
    } catch (e) {
        //console.log(e)

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
const CELL_LENGTH = longestOfList([ COMPLETE_SYMBOL, PARTIAL_SYMBOL, MISSING_SYMBOL ]) + 1

function createHeader () {
    const language = 'Language'
    const api = '\`api\`'
    const widget = '\`widget\`'
    const userApp = '\`user-app\`'
    const email = '\`email\`'

    const dash = '-'

    const firstLine = `| ${language.padEnd(CELL_LENGTH, ' ')}| ${api.padEnd(CELL_LENGTH, ' ')}| ${widget.padEnd(CELL_LENGTH, ' ')}| ${userApp.padEnd(CELL_LENGTH, ' ')}| ${email.padEnd(CELL_LENGTH, ' ')}|\n`
    const secondLine = `| ${dash.repeat(CELL_LENGTH)}| ${dash.repeat(CELL_LENGTH)}| ${dash.repeat(CELL_LENGTH)}| ${dash.repeat(CELL_LENGTH)}| ${dash.repeat(CELL_LENGTH)}|\n`

    return firstLine + secondLine
}

function createRow (lang, apiStatus, widgetStatus, userAppStatus, emailStatus) {
    lang = `${toFlag(lang)} \`${lang}\``

    apiStatus = toSymbol(apiStatus)
    widgetStatus = toSymbol(widgetStatus)
    userAppStatus = toSymbol(userAppStatus)
    emailStatus = toSymbol(emailStatus)

    return `| ${lang.padEnd(CELL_LENGTH + 3, ' ')}| ${apiStatus.padEnd(CELL_LENGTH, ' ')}| ${widgetStatus.padEnd(CELL_LENGTH, ' ')}| ${userAppStatus.padEnd(CELL_LENGTH, ' ')}| ${emailStatus.padEnd(CELL_LENGTH, ' ')}|\n`
}

function createBody (availableLangs) {
    return availableLangs
    .map(lang =>
        createRow(lang,
            validate(lang, 'api.js'),
            validate(lang, 'widget.js'),
            validate(lang, 'user-app.js'),
            normalize( validate(lang, 'email/user-welcome.html') + validate(lang, 'email/user-email-login.html'), 2 )
        )
    )
    .join('')
}

function createLegend () {
    return `${COMPLETE_SYMBOL} translation completed — ${PARTIAL_SYMBOL} partial translation — ${MISSING_SYMBOL} translation missing`
}

function createTable (availableLangs) {
    return createHeader() + createBody(availableLangs) + '\n' + createLegend()
}

console.log('Start...')

const ALPHA_2_CODES = languages.getAlpha2Codes()

const availableLangs = fs.readdirSync(LOCALIZATION_PATH, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(file => file !== 'util')
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