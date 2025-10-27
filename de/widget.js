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
    'commons.signedWith.twitter': 'Angemeldet über X',
    'commons.signedWith.linkedin': 'Angemeldet über LinkedIn',
    'commons.signedWith.email': 'Angemeldet über email',
    'commons.signedWith.jwt': 'Angemeldet in diesem Webseite',
    'commons.signedWith.noRegistration': 'Angemeldet in diesem Chat',

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
    'status-header.flushChat': 'Diesen Chat leeren',
    'status-header.disableChat': 'Diesen Chat deaktivieren',
    'status-header.enableChat': 'Diesen Chat aktivieren',
    'status-header.createPoll': 'Umfrage erstellen',
    'status-header.terminatePoll': 'Umfrage beenden',
    'status-header.removePoll': 'Umfrage entfernen',
    'status-header.help': 'Hilfe',
    'status-header.issue': 'Ein Problem melden',
    'status-header.terms': 'Nutzungsbedingungen',
    'status-header.privacy': 'Datenschutz-Bestimmungen',
    'status-header.signout': 'Ausloggen',
    'status-header.signin': 'Anmelden',
    'status-header.editUserProfile': 'Profil bearbeiten',
    'status-header.sounds': 'Töne',
    'status-header.soundsNote': 'Tonbenachrichtigungen bleiben einige Minuten aktiv nachdem der Tab in den Hintergrund gewechselt ist',

    'status-header.notRememberedLogin': 'Nicht gespeichert',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'Um Ihren Anzeigenamen und Ihr Bild zu ändern, <a>bearbeiten Sie Ihr Profil</a>',
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
    'chat.attentionGrabber1': '⚡ Chatte mit den $N anderen Besuchern, die jetzt online sind!',
    'chat.attentionGrabber2': '⚡ Chatte mit den anderen Besuchern, die jetzt online sind!',
    // $N is a number
    // example: "⚡ Chat with the 2 other visitors online now!"

    'chat.welcomeMessage': 'Chatte in Echtzeit mit anderen Besuchern. Nachrichten sind öffentlich und verschwinden nach $N $A. Sei freundlich und hab Spaß!',
    'chat.welcomeMessageJWT': 'Chatte in Echtzeit mit anderen Besuchern. Nachrichten könnten öffentlich sein und nach $N $A verschwinden. Sei freundlich und hab Spaß!',
    // $N is a number and $A in a time unit taken from timeUnit
    // example: "Chat with other visitors in real time. Messages are public and vanish after 20 minutes. Be kind and have fun!"

    'chat.welcomeMessageNoExpiration': 'Chatte in Echtzeit mit anderen Besuchern. Nachrichten sind öffentlich. Sei freundlich und hab Spaß!',
    'chat.welcomeMessageNoExpirationJWT': 'Chatte in Echtzeit mit anderen Besuchern. Nachrichten könnten öffentlich sein. Sei freundlich und hab Spaß!',

    'chat.messageDeleted.byYou': 'Sie haben diese Nachricht gelöscht',
    'chat.messageDeleted.byAuthor': 'Nachricht vom Autor gelöscht',
    'chat.messageDeleted.byModerator': 'Nachricht von einem Moderator gelöscht',
    'chat.messageDeleted.byAdmin': 'Nachricht vom Admin gelöscht',
    'chat.messageDeleted.byNow4real': 'Nachricht vom Admin gelöscht',
    'chat.messageDeleted.byAI': 'Nachricht wurde von KI nach Meldung gelöscht',
    'chat.messageDeleted.unknown': 'Nachricht gelöscht',

    'chat.messageEdited': 'Bearbeitet',

    'chat.messageHidden.byYou': 'Von Ihnen ausgeblendet',

    'chat.placeholder': 'Schreiben',
    'chat.postBtn': 'Post', // means "publish this message"

    'chat.tooFrequentError': 'Sie sind ein wenig zu schnell...\nbitte nicht zu viel schreiben',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Entschuldigung... diese Nachricht scheint unangemessen zu sein. <a>Mehr erfahren</a>',
    'chat.abortedError': 'Anmelden abgebrochen oder Cookies in diesem Browser deaktiviert',
    'chat.notPersistentError': 'Die Authentifizierung wird aufgrund Ihrer eingeschränkten Datenschutzeinstellungen nicht gespeichert. Um dies zu verhindern, aktivieren Sie bitte die Cookies für Now4real in Ihrem Browser.',
    'chat.disabledError': 'Dieser Chat wurde deaktiviert',
    'chat.chatbotError': 'Ein Fehler ist beim Chatbot der Seite aufgetreten. Bitte versuchen Sie es erneut.',
    'chat.loadMoreError': 'Ältere Nachrichten konnten nicht geladen werden',
    'chat.editNotAuthorizedError': 'Diese Nachricht kann nicht bearbeitet werden',
    'chat.deleteNotAuthorizedError': 'Diese Nachricht kann nicht gelöscht werden',

    'chat.copiedInfo': 'Nachricht kopiert',

    'chat.disabledByAdmin': 'Dieser Chat wurde vom Admin deaktiviert',
    'chat.disabledByModerator': 'Dieser Chat wurde von einem Moderator deaktiviert',
    'chat.signinRequired': '<a>Melden Sie sich an</a>, um zu chatten',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Nur Betrachter -Modus',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Antworten', // means "reply to this message"
    'chat.copyBtn': 'Kopieren', // means "copy this message"
    'chat.deleteBtn': 'Löschen', // means "delete this message"
    'chat.muteBtn': 'Stummschalten',
    'chat.reportBtn': 'Melden', // means "report this message"
    'chat.hideBtn': 'Ausblenden', // means "hide this message"
    'chat.showBtn': 'Einblenden', // means "show this message"
    'chat.editBtn': 'Bearbeiten', // means "edit this message"

    'chat.userIdenticon': 'Benutzer-Fingerabdruck',

    'chat.showMoreBtn': 'Mehr anzeigen',
    'chat.showLessBtn': 'Weniger anzeigen',

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
    'gif-picker.search': 'GIF suchen',
    'gif-picker.retry': 'Fehler beim Laden der GIFs. <a>Erneut versuchen</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Try again"

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
    'mute-modal.title': 'Benutzer stummschalten',

    'mute-modal.header': 'Benutzer $U wurde bis $E stummschaltet',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'Benutzer $U wurde stummschaltet',

    'mute-modal.body.set': 'Benutzer $U stummschalten für:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Stummschaltungsdauer aktualisieren:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Wenn stummgeschaltet, kann der Benutzer keine weiteren Nachrichten veröffentlichen. Sie können die Stummschaltung jederzeit aufheben.',

    'mute-modal.body.deleteAlert': 'Sie heben die Stummschaltung des Benutzers auf',

    'mute-modal.button': 'Bestätigen',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Nachrichten ausblenden',
    'hide-modal.showTitle': 'Nachrichten einblenden',

    'hide-modal.hideHeader': 'Alle Nachrichten von $U ausblenden (der Benutzer erfährt nicht, dass Sie ihn stummgeschaltet haben).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Nachrichten von $U wieder einblenden.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Sie können sie jederzeit wieder einblenden.',

    'hide-modal.button': 'Bestätigen',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Bestätigen',
    'confirmation-modal.ok': 'Ja',
    'confirmation-modal.cancel': 'Nein',

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
     * Create poll dialog
     */
    'create-poll-modal.title': 'Umfrage erstellen',

    'create-poll-modal.questionPlaceholder': 'Frage',
    'create-poll-modal.optionPlaceholder': 'Option',

    'create-poll-modal.multipleChoice': 'Mehrfachauswahl',

    'create-poll-modal.addOptionButton': 'Option hinzufügen...',
    'create-poll-modal.deleteOptionButton': 'Löschen',
    'create-poll-modal.createButton': 'Erstellen',

    /**
     * Poll dialog
     */
    'poll-modal.title': 'Umfrage',
    'poll-modal.titleClosed': 'Umfrage geschlossen',

    'poll-modal.vote': 'Stimme',
    'poll-modal.votes': 'Stimmen',
    'poll-modal.finalResults': 'Endresultate',
    'poll-modal.signinToVote': '<a>Anmelden</a>, um abzustimmen',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Abstimmen',
    'poll-modal.revokeVoteButton': 'Stimme widerrufen',
    'poll-modal.viewVotesButton': 'Ergebnisse',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Sind Sie sicher, dass Sie diesen Chat leeren möchten?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Sind Sie sicher, dass Sie diesen Chat deaktivieren möchten?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': 'Sind Sie sicher, dass Sie die aktuelle Umfrage beenden möchten?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': 'Sind Sie sicher, dass Sie die aktuelle Umfrage entfernen möchten?'
}