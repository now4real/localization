/****************************************************************************************
 * ROMANIAN
 ****************************************************************************************/
export default {
    'genericError': 'Ups! Ceva este in neregula',
    'mutedError': 'Ups! Se pare ca nu poti publica inca',

    'connection-status.offline': 'Esti offline',

    /**
     * Time representation
     */
    'hourFormat': 12,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minutes': 'minute',
    'timeUnit.hours': 'ore',
    'timeUnit.days': 'zile',
    'timeUnit.weeks': 'saptamani',
    'timeUnit.months': 'luni',
    'timeUnit.years': 'ani',
    'timeUnit.forever': 'forever', // TODO

    /**
     * Commons
     */
    'commons.signedWith.google': 'Intra cu Google',
    'commons.signedWith.facebook': 'Intra cu Facebook',
    'commons.signedWith.twitter': 'Intra cu Twitter',
    'commons.signedWith.linkedin': 'Intra cu LinkedIn',
    'commons.signedWith.email': 'Intra cu adresa de email',
    'commons.signedWith.jwt': 'Intra pe acest site',

    'commons.close': 'Inchide', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Persoane care sunt pe pagina',
    'monitor.siteViewersTitle': 'Persoane care sunt pe site',
    'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Persoane active acum',

    /**
     * Menu
     */
    'status-header.options': 'Optiuni',
    'status-header.flushChat': 'Flush this chat', // TODO
    'status-header.disableChat': 'Disable this chat', // TODO
    'status-header.enableChat': 'Enable this chat', // TODO
    'status-header.help': 'Ajutor',
    'status-header.issue': 'Raporteaza problema',
    'status-header.terms': 'Termene si conditii',
    'status-header.privacy': 'Politica de confidențialitate',
    'status-header.signout': 'Ieșire',
    'status-header.signin': 'Sign in', // TODO
    'status-header.editUserProfile': 'Edit profile', // TODO

    'status-header.notRememberedLogin': 'Nu-mi amintesc',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'To change your display name and picture, <a>edit your profile</a>', // TODO
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Chat in timp real cu ceilalti vizitatori de pe pagina',
    'tab.chatTitleSite': 'Chat in timp real cu ceilalti vizitatori de pe site',

    'tab.rankingTabLabel': 'PAGINI', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Pagini vizualizate acum',

    'tab.heatmapTabLabel': 'HARTA', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'De unde sunt persoanele',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'PAGINA', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Fara date',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Persoane pe site',
    'ranking.activeTitle': 'Persoane care discuta pe site',
    'ranking.foregroundSwitchLabel': 'VIZITATORI', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'Cei care discuta', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Fara date',
    'ranking.currentPage': 'Pagina curenta',

    'ranking.note': 'Primele 10 pagini',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ Chat cu ceilalți $N vizitatori acum',
    'chat.attentionGrabber2': '⚡ Chat cu ceilalți vizitatori acum',
    // $N is a number
    // example: "⚡ Chat with the other 2 visitors now"

    'chat.welcomeMessage': 'Chat cu ceilalți vizitatori în timp real. Mesajele sunt publice și dispar după $N $A.',
    'chat.welcomeMessageJWT': 'Chat cu ceilalți vizitatori în timp real. Mesajele pot fi publice și dispar după $N $A.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'You deleted this message', // TODO
    'chat.messageDeleted.byAuthor': 'Message deleted by the author', // TODO
    'chat.messageDeleted.byModerator': 'Message deleted by a moderator', // TODO
    'chat.messageDeleted.byAdmin': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.byNow4real': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.unknown': 'Message deleted', // TODO

    'chat.messageHidden.byYou': 'Hidden by you', // TODO

    'chat.placeholder': 'Scrie mesajul',
    'chat.postBtn': 'Publica', // means "publica mesajul tau"

    'chat.tooFrequentError': 'Prea repede ...\nTe rog nu inunda chat-ul cu prea multe mesaje',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Imi pare rau... Acest mesaj este considerat nepotrivit',
    'chat.abortedError': 'Intrare esuata sau cookie nu sunt permise in acest browser',
    'chat.notPersistentError': 'Autetificarea nu este posibila deoarece ai setari ridicate de mentinere a intimitatii. Permite acum browser-ului cookie de la Now4real.',
    'chat.disabledError': 'This chat has been disabled', // TODO

    'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
    'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
    'chat.signinRequired': '<a>Intra in</a> to chat',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Doar vizualizare',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Raspunde', // means "reply to this message"
    'chat.deleteBtn': 'Stergere', // means "delete this message"
    'chat.muteBtn': 'Mute', // means "mute this user" // TODO
    'chat.reportBtn': 'Raportează', // means "report this message"
    'chat.hideBtn': 'Hide', // means "hide this message" // TODO
    'chat.showBtn': 'Show', // means "show this message" // TODO

    'chat.userIdenticon': 'User fingerprint', // TODO

    /**
     * Presence
     */
    'presence.all.a': '1 persoana pe pagina (din $N pe site)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N persoane pe pagina (din $M pe site)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 persoana pe pagina',
    'presence.page.b': '$N persoane pe pagina',

    'presence.site.a': '1 persoana pe site',
    'presence.site.b': '$N persoane pe site',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.recents': 'Recent',
    'emoji-picker.recents.none': 'Nu ați selectat niciun emoji încă.',
    'emoji-picker.search': 'Caută emojis',
    'emoji-picker.search.error': 'Nu am putut căuta emojis',
    'emoji-picker.search.notFound': 'Nu am găsit rezultate',
    'emoji-picker.search.clear': 'Ștergeți căutarea',
    'emoji-picker.error.load': 'Nu am putut încărca emojis',
    'emoji-picker.error.retry': 'Încercați din nou',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Search GIF', // TODO

    /**
     * Typing
     */
    'typing.a': '1 persoana scrie...',

    'typing.b': '$N persoane scriu...',
    // example: "5 people are typing..."

    'typing.c': '$A scrie...',
    // example: "Alex is typing..."

    'typing.d': '$A si $B scriu...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B si $C scriu...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A si o alta peroana scriu...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A si altele $N scriu...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B, si inca cineva scriu...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B, si alti $N scriu...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C, si inca cineva scriu...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C, si alti $N scriu...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * Social login dialog
     */
    'social-modal.title': 'Intra',
    'social-modal.header': 'Incepe discutia cu toti cei care folosesc Now4real',

    // buttons:
    'social-modal.google': 'Intra cu Google',
    'social-modal.facebook': 'Intra cu Facebook',
    'social-modal.twitter': 'Intra cu Twitter',
    'social-modal.linkedin': 'Intra cu LinkedIn',
    'social-modal.email': 'Intra cu email',

    'social-modal.footer': 'Apasa pe “Intra” ca sa accepti <a1>Termene si Servicii</a1> si <a2>Politica de Confidentialitate</a2> de pe acest site si Now4real',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Termene si Servicii"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Politica de Confidentialitate"

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Consimtamant',

    'jwt-modal.header': 'Pentru a discuta trebuie sa accepti <a1>Termene si Servicii</a1> and the <a2>Politica de Confidentialitate</a2> de la acest site si Now4real',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Termene si Servicii"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Politica de Confidentialitate"

    'jwt-modal.acceptBtn': 'Accept',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Dezacord',
    'jwt-modal.agreeRadio': 'De acord',
    'jwt-modal.continueBtn': 'Continua',

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
    'report-modal.title': 'Raportează mesajul',

    'report-modal.header': 'De ce raportați acest mesaj?',
    'report-modal.note': 'Dacă cineva se află în pericol imediat, sunați la serviciile locale de urgență - nu așteptați',

    'report-modal.hateSpeech': 'Discurs de ură sau hărțuire',
    'report-modal.violence': 'Terorism sau violență',
    'report-modal.pornography': 'Inadecvat din punct de vedere sexual',
    'report-modal.spam': 'Spam, escrocherii sau fraudă',
    'report-modal.selfInjury': 'Sinucidere sau autovătămare',
    'report-modal.copyright': 'Încălcarea proprietății intelectuale',
    'report-modal.other': 'Alte',

    'report-modal.commentPlaceholder': 'Comentariu',
    'report-modal.button': 'Raportați',

    'report-modal.reportOk': 'Mulțumesc pentru raportare!',
    'report-modal.alreadyReportedError': 'Ai raportat deja mesajul',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?', // TODO

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?' // TODO
}