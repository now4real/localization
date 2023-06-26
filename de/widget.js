/****************************************************************************************
 * GERMAN (Standard)
 ****************************************************************************************/
export default {
    'genericError': 'Hoppla! Etwas ist schief gelaufen',
    'mutedError': 'Hoppla! Es sieht so aus, als wären Sie stummgeschaltet worden',

    'connection-status.offline': 'Sie sind offline',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minute': 'Minute',
    'timeUnit.minutes': 'Minuten',
    'timeUnit.hour': 'Stunde',
    'timeUnit.hours': 'Stunden',
    'timeUnit.day': 'Tag',
    'timeUnit.days': 'Tage',
    'timeUnit.week': 'Woche',
    'timeUnit.weeks': 'Wochen',
    'timeUnit.month': 'Monat',
    'timeUnit.months': 'Monate',
    'timeUnit.year': 'Jahr',
    'timeUnit.years': 'Jahre',
    'timeUnit.forever': 'für immer',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Angemeldet über Google',
    'commons.signedWith.facebook': 'Angemeldet über Facebook',
    'commons.signedWith.twitter': 'Angemeldet über Twitter',
    'commons.signedWith.linkedin': 'Angemeldet über LinkedIn',
    'commons.signedWith.email': 'Angemeldet über email',
    'commons.signedWith.jwt': 'Angemeldet in diesem Webseite',
    'commons.signedWith.noRegistration': 'Angemeldet in diesem Webseite',

    'commons.close': 'Schließen', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Seitenbesucher jetzt',
    'monitor.siteViewersTitle': 'Webseitenbesucher jetzt',
    'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Menschen präsentieren jetzt',

    /**
     * Menu
     */
    'status-header.options': 'Optionen',
    'status-header.flushChat': 'Flush this chat', // TODO
    'status-header.disableChat': 'Disable this chat', // TODO
    'status-header.enableChat': 'Enable this chat', // TODO
    'status-header.help': 'Hilfe',
    'status-header.issue': 'Ein Problem melden',
    'status-header.terms': 'Nutzungsbedingungen',
    'status-header.privacy': 'Datenschutz-Bestimmungen',
    'status-header.signout': 'Ausloggen',
    'status-header.signin': 'Sign in', // TODO
    'status-header.editUserProfile': 'Edit profile', // TODO

    'status-header.notRememberedLogin': 'Nicht gespeichert',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'To change your display name and picture, <a>edit your profile</a>', // TODO
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Seite sind',
    'tab.chatTitleSite': 'Chatten Sie hier mit anderen Besucher, die jetzt auf dieser Webseite sind',

    'tab.rankingTabLabel': 'SEITEN', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Auf welcher Seite sind die Besucher',

    'tab.heatmapTabLabel': 'KARTE', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Woher kommen die Besucher',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'SEITE', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'WEBSEITE', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Keine Daten',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Besucher auf dieser Webseite',
    'ranking.activeTitle': 'Besucher auf dieser Webseite chatten',
    'ranking.foregroundSwitchLabel': 'ZUSCHAUER', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'CHATTEN', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Keine Daten',
    'ranking.currentPage': 'Aktuelle Seite',

    'ranking.note': 'Die besten 10 Seiten werden angezeigt',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ Chatten Sie jetzt mit den anderen $N Besuchern',
    'chat.attentionGrabber2': '⚡ Chatten Sie jetzt mit den anderen Besuchern',
    // $N is a number
    // example: "⚡ Chat with the other 2 visitors now"

    'chat.welcomeMessage': 'Chatten Sie mit den anderen Besuchern in Echtzeit. Nachrichten sind öffentlich und verschwinden nach $N $A.',
    'chat.welcomeMessageJWT': 'Chatten Sie mit den anderen Besuchern in Echtzeit. Nachrichten können öffentlich sein und verschwinden nach $N $A.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'You deleted this message', // TODO
    'chat.messageDeleted.byAuthor': 'Message deleted by the author', // TODO
    'chat.messageDeleted.byModerator': 'Message deleted by a moderator', // TODO
    'chat.messageDeleted.byAdmin': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.byNow4real': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.unknown': 'Message deleted', // TODO

    'chat.messageHidden.byYou': 'Hidden by you', // TODO

    'chat.placeholder': 'Schreiben',
    'chat.postBtn': 'Post', // means "publish this message"

    'chat.tooFrequentError': 'Sie sind ein wenig zu schnell...\nbitte nicht zu viel schreiben',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Sorry... diese Nachricht scheint unangemessen',
    'chat.abortedError': 'Anmelden abgebrochen oder Cookies in diesem Browser deaktiviert',
    'chat.notPersistentError': 'Die Authentifizierung wird aufgrund Ihrer eingeschränkten Datenschutzeinstellungen nicht gespeichert. Um dies zu verhindern, aktivieren Sie bitte die Cookies für Now4real in Ihrem Browser.',
    'chat.disabledError': 'This chat has been disabled', // TODO

    'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
    'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
    'chat.signinRequired': '<a>Melden Sie sich an</a>, um zu chatten',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Nur Betrachter -Modus',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Antworten', // means "reply to this message"
    'chat.deleteBtn': 'Löschen', // means "delete this message"
    'chat.muteBtn': 'Mute', // means "mute this user" // TODO
    'chat.reportBtn': 'Melden', // means "report this message"
    'chat.hideBtn': 'Hide', // means "hide this message" // TODO
    'chat.showBtn': 'Show', // means "show this message" // TODO

    'chat.userIdenticon': 'User fingerprint', // TODO

    /**
     * Presence
     */
    'presence.all.a': '1 Besucher auf dieser Seite (von $N auf dieser Webseite)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N Besucher auf dieser Seite (von $M auf dieser Webseite)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 Besucher auf dieser Seite',
    'presence.page.b': '$N Besucher auf dieser Seite',

    'presence.site.a': '1 Besucher auf dieser Webseite',
    'presence.site.b': '$N Besucher auf dieser Webseite',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.recents': 'Kürzlich',
    'emoji-picker.recents.none': 'Sie haben bisher keine Emojis ausgewählt.',
    'emoji-picker.search': 'Emojis suchen',
    'emoji-picker.search.error': 'Emojis suchen fehlgeschlagen',
    'emoji-picker.search.notFound': 'Keine Ergebnisse gefunden',
    'emoji-picker.search.clear': 'Suche löschen',
    'emoji-picker.error.load': 'Laden der Emojis fehlgeschlagen',
    'emoji-picker.error.retry': 'Erneut versuchen',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Search GIF', // TODO

    /**
     * Typing
     */
    'typing.a': 'Eine Person schreibt...',

    'typing.b': '$N Leute schreiben...',
    // example: "5 people are typing..."

    'typing.c': '$A schreibt...',
    // example: "Alex is typing..."

    'typing.d': '$A und $B schreiben...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B und $C schreiben...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A und eine andere Person schreiben...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A und $N andere Leute schreiben...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B und eine andere Person schreiben...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B und $N andere Leute schreiben...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C und eine andere Person schreiben...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C und $N andere Leute schreiben...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Zustimmung',

    'jwt-modal.header': 'Um mit dem Chatten zu beginnen, sollen Sie die <a1>Nutzungsbedingungen</a1> und die <a2>Datenschutzbestimmungen</a2> von Now4real (der chat service)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Akzeptieren',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Nicht zustimmen',
    'jwt-modal.agreeRadio': 'Zustimmen',
    'jwt-modal.continueBtn': 'Fortsetzen',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Mute User', // TODO

    'mute-modal.header': 'User $U has been muted until $E', // TODO
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'User $U has been muted', // TODO

    'mute-modal.body.set': 'Mute user $U for:', // TODO
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Update mute period:', // TODO
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'If muted, the user will not be able to publish other messages. You can unmute the user whenever you want.', // TODO

    'mute-modal.body.deleteAlert': 'You are unmuting the user', // TODO

    'mute-modal.button': 'Confirm', // TODO

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Hide Messages', // TODO
    'hide-modal.showTitle': 'Show Messages', // TODO

    'hide-modal.hideHeader': 'Hide all messages posted by $U (they won\'t know you have muted them).', // TODO
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Show again messages posted by $U.', // TODO
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'You can show them again whenever you want.', // TODO

    'hide-modal.button': 'Confirm', // TODO

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Confirm', // TODO
    'confirmation-modal.ok': 'Yes', // TODO
    'confirmation-modal.cancel': 'No', // TODO

    /**
     * Report dialog
     */
    'report-modal.title': 'Nachricht Melden',

    'report-modal.header': 'Warum melden Sie diese Nachricht?',
    'report-modal.note': 'Wenn jemand in unmittelbarer Gefahr ist, rufen Sie den örtlichen Notdienst an – warten Sie nicht',

    'report-modal.hateSpeech': 'Hassreden oder Mobbing',
    'report-modal.violence': 'Terrorismus oder Gewalt',
    'report-modal.pornography': 'Sexuell unangemessen',
    'report-modal.spam': 'Spam, Betrug oder Schwindel',
    'report-modal.selfInjury': 'Selbstmord oder Selbstverletzung',
    'report-modal.copyright': 'Verletzung des geistigen Eigentums',
    'report-modal.other': 'Andere',

    'report-modal.commentPlaceholder': 'Kommentar',
    'report-modal.button': 'Melden',

    'report-modal.reportOk': 'Danke für die Berichterstattung!',
    'report-modal.alreadyReportedError': 'Sie haben die Nachricht bereits gemeldet',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?', // TODO

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?' // TODO
}