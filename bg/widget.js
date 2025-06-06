/****************************************************************************************
 * BULGARIAN (Standard)
 ****************************************************************************************/
export default {
    'genericError': 'Възникна грешка.',
    'mutedError': 'Упс! Изглежда сте заглушени',

    'connection-status.offline': 'Няма връзка с интернет',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minute': 'минута',
    'timeUnit.minutes': 'минути',
    'timeUnit.hour': 'час',
    'timeUnit.hours': 'часове',
    'timeUnit.day': 'ден',
    'timeUnit.days': 'дни',
    'timeUnit.week': 'седмица',
    'timeUnit.weeks': 'седмици',
    'timeUnit.month': 'месец',
    'timeUnit.months': 'месеца',
    'timeUnit.year': 'година',
    'timeUnit.years': 'години',
    'timeUnit.forever': 'завинаги',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Вписахте се чрез Google',
    'commons.signedWith.facebook': 'Вписахте се чрез Facebook',
    'commons.signedWith.twitter': 'Вписахте се чрез X',
    'commons.signedWith.linkedin': 'Вписахте се чрез LinkedIn',
    'commons.signedWith.email': 'Вписахте се чрез email',
    'commons.signedWith.jwt': 'Вписахте се в сайта',
    'commons.signedWith.noRegistration': 'Вие сте влезли в чата',

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
    'status-header.createPoll': 'Създайте анкета',
    'status-header.terminatePoll': 'Прекратяване на анкетата',
    'status-header.removePoll': 'Премахване на анкетата',
    'status-header.help': 'Помощ',
    'status-header.issue': 'Докладвайте проблем',
    'status-header.terms': 'Условия за ползване',
    'status-header.privacy': 'Защита лични данни',
    'status-header.signout': 'Отписване',
    'status-header.signin': 'Вписване',
    'status-header.editUserProfile': 'Редактиране на профила',

    'status-header.notRememberedLogin': 'Не се запаметява',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'За да промените потребителското си име и снимка, <a>редактирайте вашия профил</a>',
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
    'chat.attentionGrabber1': '⚡ Чатете с $N други посетители онлайн сега!',
    'chat.attentionGrabber2': '⚡ Чатете с други посетители онлайн сега!',
    // $N is a number
    // example: "⚡ Chat with the 2 other visitors online now!"

    'chat.welcomeMessage': 'Чатете с други посетители в реално време. Съобщенията са публични и изчезват след $N $A. Бъдете мили и се забавлявайте!',
    'chat.welcomeMessageJWT': 'Чатете с други посетители в реално време. Съобщенията може да са публични и да изчезват след $N $A. Бъдете мили и се забавлявайте!',    
    // $N is a number and $A in a time unit taken from timeUnit
    // example: "Chat with other visitors in real time. Messages are public and vanish after 20 minutes. Be kind and have fun!"

    'chat.messageDeleted.byYou': 'Изтрихте това съобщение',
    'chat.messageDeleted.byAuthor': 'Съобщението е изтрито от автора',
    'chat.messageDeleted.byModerator': 'Съобщението е изтрито от модератор',
    'chat.messageDeleted.byAdmin': 'Съобщението е изтрито от администратор',
    'chat.messageDeleted.byNow4real': 'Съобщението е изтрито от администратора на Now4real',
    'chat.messageDeleted.byAI': 'Съобщението е изтрито от AI след докладване',
    'chat.messageDeleted.unknown': 'Съобщението е изтрито',

    'chat.messageHidden.byYou': 'Скрити от вас',

    'chat.placeholder': 'Напишете съобщение',
    'chat.postBtn': 'Post', // means "publish this message"

    'chat.tooFrequentError': 'Пишете прекалено бързо...\nНедейте да препълвате чата!',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Съжаляваме... Това съобщение изглежда неподходящо. <a>Научете повече</a>',
    'chat.abortedError': 'Вписването е отказано или бисквитките на браузера са изключени',
    'chat.notPersistentError': 'Автентикацията няма да се запомни заради ограничените настройки за поверителност. Разрешете бисквитките за Now4real във вашия браузер, за да решите този проблем.',
    'chat.disabledError': 'Чатът е деактивиран',
    'chat.chatbotError': 'Възникна грешка с чатбота на сайта. Моля, опитайте отново.',

    'chat.disabledByAdmin': 'Чатът е деактивиран от администратор',
    'chat.disabledByModerator': 'Чатът е деактивиран от модератор',
    'chat.signinRequired': '<a>Впишете се</a>, за да участвате в разговора',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Режим само за четене',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Отговор', // means "reply to this message"
    'chat.deleteBtn': 'Изтриване', // means "delete this message"
    'chat.muteBtn': 'Заглушаване', // means "mute this user"
    'chat.reportBtn': 'Докладване', // means "report this message"
    'chat.hideBtn': 'Крия', // means "hide this message"
    'chat.showBtn': 'Покажи', // means "show this message"

    'chat.userIdenticon': 'Пръстов отпечатък на потребителя',

    'chat.showMoreBtn': 'Покажи повече',
    'chat.showLessBtn': 'Покажи по-малко',

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
    'emoji-picker.recents': 'Последни',
    'emoji-picker.recents.none': 'Все още не сте избрали емотикони.',
    'emoji-picker.search': 'Търсене на емотикони',
    'emoji-picker.search.error': 'Неуспешно търсене на емотикони',
    'emoji-picker.search.notFound': 'Няма намерени резултати',
    'emoji-picker.search.clear': 'Изчистване на търсенето',
    'emoji-picker.error.load': 'Неуспешно зареждане на емотикони',
    'emoji-picker.error.retry': 'Опитайте отново',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Търсене на GIF',
    'gif-picker.retry': 'Грешка при зареждането на GIF файлове. <a>Опитайте отново</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Try again"

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
     * JWT login dialog
     */
    'jwt-modal.title': 'Съгласие',

    'jwt-modal.header': 'За да започнете да си пишете с другите, е необходимо да приемете <a1>Условията за ползване</a1> и <a2>Политиката за поверителност</a2> на Now4real (чат услугата)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Приемам',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Не съм съгласен',
    'jwt-modal.agreeRadio': 'Съгласен',
    'jwt-modal.continueBtn': 'Продължавам',

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

    'mute-modal.body.deleteInfo': 'Ако е изключен, потребителят няма да може да публикува други съобщения. Можете да включите звука на потребителя, когато пожелаете.',

    'mute-modal.body.deleteAlert': 'Ще премахнете заглушаването на посетителя',

    'mute-modal.button': 'Потвърждение',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Скриване на съобщения',
    'hide-modal.showTitle': 'Показване на съобщения',

    'hide-modal.hideHeader': 'Скрийте всички съобщения, публикувани от $U (те няма да знаят, че сте ги заглушили).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Показване отново на съобщенията, публикувани от $U.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Можете да ги покажете отново, когато пожелаете.',

    'hide-modal.button': 'Потвърждение',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Потвърждение',
    'confirmation-modal.ok': 'Да',
    'confirmation-modal.cancel': 'Не',

    /**
     * Report dialog
     */
    'report-modal.title': 'Докладване на съобщение',

    'report-modal.header': 'Защо докладвате това съобщение?',
    'report-modal.note': 'Ако някой е в непосредствена опасност, обадете се на местните служби за спешна помощ - не чакайте',

    'report-modal.hateSpeech': 'Реч на омраза или тормоз',
    'report-modal.violence': 'Тероризъм или насилие',
    'report-modal.pornography': 'Сексуално неподходящо',
    'report-modal.spam': 'Спам, измами или измама',
    'report-modal.selfInjury': 'Самоубийство или самонараняване',
    'report-modal.copyright': 'Нарушение на интелектуалната собственост',
    'report-modal.other': 'друго',

    'report-modal.commentPlaceholder': 'Коментирайте',
    'report-modal.button': 'Докладвайте',

    'report-modal.reportOk': 'Благодаря за репортажа!',
    'report-modal.alreadyReportedError': 'Вече докладвахте за съобщението',

    /**
     * Create poll dialog
     */
    'create-poll-modal.title': 'Създай анкета',

    'create-poll-modal.questionPlaceholder': 'Въпрос',
    'create-poll-modal.optionPlaceholder': 'Опция',

    'create-poll-modal.multipleChoice': 'Множествен избор',

    'create-poll-modal.addOptionButton': 'Добави опция...',
    'create-poll-modal.deleteOptionButton': 'Изтрий',
    'create-poll-modal.createButton': 'Създай',

    /**
     * Poll dialog
     */
    'poll-modal.title': 'Анкета',
    'poll-modal.titleClosed': 'Анкетата е затворена',

    'poll-modal.vote': 'глас',
    'poll-modal.votes': 'гласове',
    'poll-modal.finalResults': 'Крайни резултати',
    'poll-modal.signinToVote': '<a>Влезте</a> за гласуване',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Гласувай',
    'poll-modal.revokeVoteButton': 'Отмени гласа',
    'poll-modal.viewVotesButton': 'Резултати',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Сигурни ли сте, че искате да изтриете съдържанието на този чат?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Сигурни ли сте, че искате да деактивирате този чат?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': 'Сигурни ли сте, че искате да прекратите текущата анкета?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': 'Сигурни ли сте, че искате да премахнете текущата анкета?'
}