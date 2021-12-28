/****************************************************************************************
 * BULGARIAN (Standard)
 ****************************************************************************************/
export default {
    'genericError': 'Възникна грешка.',

    'connection-status.offline': 'Няма връзка с интернет',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minutes': 'минути',
    'timeUnit.hours': 'часа',
    'timeUnit.days': 'дни',
    'timeUnit.weeks': 'седмици',
    'timeUnit.months': 'месеца',
    'timeUnit.years': 'години',
    'timeUnit.forever': 'завинаги',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Вписахте се чрез Google',
    'commons.signedWith.facebook': 'Вписахте се чрез Facebook',
    'commons.signedWith.twitter': 'Вписахте се чрез Twitter',
    'commons.signedWith.linkedin': 'Вписахте се чрез LinkedIn',
    'commons.signedWith.email': 'Вписахте се чрез email',
    'commons.signedWith.jwt': 'Вписахте се в сайта',

    'commons.close': 'Затваряне', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Посетители, които разглеждат тази страница',
    'monitor.siteViewersTitle': 'Посетители, които разглеждат този сайт',
    'monitor.chatBalloon': 'ЧАТ', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Посетители на линия в момента',

    /**
     * Menu
     */
    'status-header.options': 'Опции',
    'status-header.flushChat': 'Нулиране на чата',
    'status-header.disableChat': 'Деактивиране на чата',
    'status-header.enableChat': 'Активиране на чата',
    'status-header.help': 'Помощ',
    'status-header.issue': 'Докладвайте проблем',
    'status-header.terms': 'Условия за ползване',
    'status-header.privacy': 'Защита лични данни',
    'status-header.signout': 'Отписване',
    'status-header.signin': 'Вписване',
    'status-header.editUserProfile': 'Edit profile', // TODO

    'status-header.notRememberedLogin': 'Не се запаметява',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'To change your display name and picture, <a>edit your profile</a>', // TODO
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'ЧАТ', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Пишете си с други посетители на тази страница в реално време',
    'tab.chatTitleSite': 'Пишете си с други посетители на този сайт в реално време',

    'tab.rankingTabLabel': 'СТРАНИЦИ', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Страници, които другите посетители разглеждат в момента',

    'tab.heatmapTabLabel': 'КАРТА', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Откъде са другите посетители',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'СТРАНИЦА', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'САЙТ', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Няма данни',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Посетители в този сайт',
    'ranking.activeTitle': 'Посетители на сайта, които си кореспондират',
    'ranking.foregroundSwitchLabel': 'ЧЕТЯЩИ', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'ПИШЕЩИ', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Няма информация',
    'ranking.currentPage': 'Настояща страница',

    'ranking.note': '10-те най-популярни страници',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.welcomeFirstMessagePage': 'Общувайте с други посетители на тази страница в реално време',
    'chat.welcomeFirstMessageSite': 'Общувайте с други посетители на този сайт в реално време',

    'chat.welcomeSecondMessage': 'Помнете, че вашите съобщения се виждат от всички и изчезват след $N $A',
    'chat.welcomeSecondMessageJWT': 'Помнете, че вашите съобщения се виждат от всички и изчезват след $N $A',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Please remember that your messages are public and disappear after 2 hours"

    'chat.messageDeleted.byYou': 'Изтрихте това съобщение',
    'chat.messageDeleted.byAuthor': 'Съобщението е изтрито от автора',
    'chat.messageDeleted.byModerator': 'Съобщението е изтрито от модератор',
    'chat.messageDeleted.byAdmin': 'Съобщението е изтрито от администратор',
    'chat.messageDeleted.byNow4real': 'Съобщението е изтрито от администратора на Now4real',
    'chat.messageDeleted.unknown': 'Съобщението е изтрито',

    'chat.placeholder': 'Напишете съобщение',
    'chat.postBtn': 'Post', // means "publish this message"

    'chat.tooFrequentError': 'Пишете прекалено бързо...\nНедейте да препълвате чата!',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Съжаляваме... Това съобщение изглежда неподходящо',
    'chat.abortedError': 'Вписването е отказано или бисквитките на браузера са изключени',
    'chat.mutedError': 'Упс! Изглежда сте заглушени',
    'chat.notPersistentError': 'Автентикацията няма да се запомни заради ограничените настройки за поверителност. Разрешете бисквитките за Now4real във вашия браузер, за да решите този проблем.',
    'chat.disabledError': 'Чатът е деактивиран',

    'chat.disabledByAdmin': 'Чатът е деактивиран от администратор',
    'chat.disabledByModerator': 'Чатът е деактивиран от модератор',
    'chat.signinRequired': '<a>Впишете се</a>, за да участвате в разговора',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Режим само за четене',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Отговор', // means "reply to this message"
    'chat.deleteBtn': 'Изтриване', // means "delete this message"
    'chat.muteBtn': 'Заглушаване', // means "mute this user"

    'chat.userIdenticon': 'User fingerprint', // TODO

    /**
     * Presence
     */
    'presence.all.a': '1 посетител е на тази страница (от общо $N за целия сайт)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N посетителя са на тази страница (от общо $M за целия сайт)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': 'На тази страница има 1 посетител',
    'presence.page.b': 'На тази страница има $N посетителя',

    'presence.site.a': 'В сайта има 1 посетител',
    'presence.site.b': 'В сайта има $N посетителя',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.people': 'Хора',
    'emoji-picker.nature': 'Природа',
    'emoji-picker.food': 'Храна',
    'emoji-picker.activity': 'Дейности',
    'emoji-picker.travel': 'Места',
    'emoji-picker.objects': 'Предмети',
    'emoji-picker.symbols': 'Символи',
    'emoji-picker.flags': 'Знамена',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Търсене на GIF',

    /**
     * Typing
     */
    'typing.a': '1 участник пише...',

    'typing.b': '$N участника пишат...',
    // example: "5 people are typing..."

    'typing.c': '$A пише...',
    // example: "Alex is typing..."

    'typing.d': '$A и $B пишат...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B и $C пишат...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A и още един участник пишат...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A и още $N участника пишат...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B и още един участник пишат...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B и още $N участника пишат...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C и още един участника пишат...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C и още $N участника пишат...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * Social login dialog
     */
    'social-modal.title': 'Вписване',
    'social-modal.header': 'Комуникирайте във всеки сайт, който използва Now4real',

    // buttons:
    'social-modal.google': 'Вписване чрез Google',
    'social-modal.facebook': 'Вписване чрез Facebook',
    'social-modal.twitter': 'Вписване чрез Twitter',
    'social-modal.linkedin': 'Вписване чрез LinkedIn',
    'social-modal.email': 'Вписване чрез email',

    'social-modal.footer': 'Кликнете върху "Вписване" по-горе, за да приемете <a1>Условията за ползване</a1> и <a2>Политиката за поверителност</a2> на Now4real',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Съгласие',

    'jwt-modal.header': 'За да започнете да си пишете с другите, е необходимо да приемете <a1>Условията за ползване</a1> и <a2>Политиката за поверителност</a2> на Now4real (чат услугата)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.button': 'Приемам',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Заглушаване на посетители',

    'mute-modal.header': 'Посетителят $U е заглушен до $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'Посетителят $U е трайно заглушен',

    'mute-modal.body.set': 'Заглушете посетителя $U за:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Променете периода на заглушаване:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Можете да премахнете заглушаването на посетителя когато пожелаете.',

    'mute-modal.body.deleteAlert': 'Ще премахнете заглушаването на посетителя',

    'mute-modal.button': 'Потвърждение',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Потвърждение',
    'confirmation-modal.ok': 'Да',
    'confirmation-modal.cancel': 'Не',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Сигурни ли сте, че искате да изтриете съдържанието на този чат?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Сигурни ли сте, че искате да деактивирате този чат?'
}