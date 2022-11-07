/****************************************************************************************
 * ITALIAN (Standard)
 ****************************************************************************************/
export default {
    'genericError': 'Ops! Qualcosa è andato storto',
    'mutedError': 'Ops! Sembra tu sia stato silenziato',

    'connection-status.offline': 'Sei offline',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minutes': 'minuti',
    'timeUnit.hours': 'ore',
    'timeUnit.days': 'giorni',
    'timeUnit.weeks': 'settimane',
    'timeUnit.months': 'mesi',
    'timeUnit.years': 'anni',
    'timeUnit.forever': 'per sempre',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Connesso via Google',
    'commons.signedWith.facebook': 'Connesso via Facebook',
    'commons.signedWith.twitter': 'Connesso via Twitter',
    'commons.signedWith.linkedin': 'Connesso via LinkedIn',
    'commons.signedWith.email': 'Connesso via email',
    'commons.signedWith.jwt': 'Connesso su questo sito',

    'commons.close': 'Chiudi', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Persone che stanno vedendo questa pagina',
    'monitor.siteViewersTitle': 'Persone che stanno vedendo questo sito',
    'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Persone presenti ora',

    /**
     * Menu
     */
    'status-header.options': 'Opzioni',
    'status-header.flushChat': 'Svuota questa chat',
    'status-header.disableChat': 'Disattiva questa chat',
    'status-header.enableChat': 'Attiva questa chat',
    'status-header.help': 'Aiuto',
    'status-header.issue': 'Segnala un problema',
    'status-header.terms': 'Condizioni di servizio',
    'status-header.privacy': 'Privacy policy',
    'status-header.signout': 'Disconnetti',
    'status-header.signin': 'Accedi',
    'status-header.editUserProfile': 'Modifica profilo',

    'status-header.notRememberedLogin': 'Provvisoriamente',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'Per cambiare il tuo nome e la tua immagine, <a>modifica il tuo profilo</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Chatta con le altre persone presenti su questa pagina',
    'tab.chatTitleSite': 'Chatta con le altre persone presenti su questo sito',

    'tab.rankingTabLabel': 'PAGINE', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Dove si trovano le persone su questo sito',

    'tab.heatmapTabLabel': 'MAPPA', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Dove si trovano le persone nel mondo reale',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'PAGINA', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'SITO', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Nessun dato',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Persone sul sito',
    'ranking.activeTitle': 'Persone in chat sul sito',
    'ranking.foregroundSwitchLabel': 'VISITATORI', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'IN CHAT', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Nessun dato',
    'ranking.currentPage': 'Pagina corrente',

    'ranking.note': 'È mostrata la top ten',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ Chatta con gli altri $N visitatori ora',
    'chat.attentionGrabber2': '⚡ Chatta con gli altri visitatori ora',
    // $N is a number
    // example: "⚡ Chat with the other 2 visitors now"

    'chat.welcomeMessage': 'Chatta con gli altri visitatori in tempo reale. I messaggi sono pubblici e scompaiono dopo $N $A.',
    'chat.welcomeMessageJWT': 'Chatta con gli altri visitatori in tempo reale. I messaggi potrebbero essere pubblici e scompaiono dopo $N $A.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'Hai cancellato questo messaggio',
    'chat.messageDeleted.byAuthor': 'Messaggio cancellato dall\'autore',
    'chat.messageDeleted.byModerator': 'Messaggio cancellato da un moderatore',
    'chat.messageDeleted.byAdmin': 'Messaggio cancellato dall\'amministratore',
    'chat.messageDeleted.byNow4real': 'Messaggio cancellato dall\'amministratore',
    'chat.messageDeleted.unknown': 'Messaggio cancellato',

    'chat.messageHidden.byYou': 'Nascosto da te',

    'chat.placeholder': 'Scrivi un messaggio',
    'chat.postBtn': 'Invia', // means "publish this message"

    'chat.tooFrequentError': 'Sei un po\' troppo veloce...\nPer favore non inondare la chat',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Ci dispiace... Questo messaggio sembra inappropriato',
    'chat.abortedError': 'Accesso annullato o cookie disabilitati su questo browser',
    'chat.notPersistentError': 'L\'autenticazione non sarà ricordata a causa di impostazioni di privacy restrittive. Abilita i cookie per Now4real nel tuo browser per evitare che ciò accada.',
    'chat.disabledError': 'Questa chat è stata disabilitata',

    'chat.signinRequired': '<a>Accedi</a> per chattare',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.disabledByAdmin': 'Questa chat è stata disabilitata dall\'amministratore',
    'chat.disabledByModerator': 'Questa chat è stata disabilitata da un moderatore',
    'chat.viewOnly': 'Sola lettura',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Rispondi', // means "reply to this message"
    'chat.deleteBtn': 'Elimina', // means "delete this message"
    'chat.muteBtn': 'Silenzia', // means "mute this user"
    'chat.reportBtn': 'Segnala', // means "report this message"
    'chat.hideBtn': 'Nascondi', // means "hide this message"
    'chat.showBtn': 'Mostra', // means "show this message"

    'chat.userIdenticon': 'Fingerprint dell\'utente',

    /**
     * Presence
     */
    'presence.all.a': '1 persona su questa pagina (di $N sul sito)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N persone su questa pagina (di $M sul sito)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 persona su questa pagina',
    'presence.page.b': '$N persone su questa pagina',

    'presence.site.a': '1 persona su questo sito',
    'presence.site.b': '$N persone su questo sito',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.people': 'Persone',
    'emoji-picker.nature': 'Natura',
    'emoji-picker.food': 'Cibo',
    'emoji-picker.activity': 'Attività',
    'emoji-picker.travel': 'Posti',
    'emoji-picker.objects': 'Oggetti',
    'emoji-picker.symbols': 'Simboli',
    'emoji-picker.flags': 'Bandiere',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Cerca GIF',

    /**
     * Typing
     */
    'typing.a': 'Una persona sta scrivendo...',

    'typing.b': '$N persone stanno scrivendo...',
    // example: "5 people are typing..."

    'typing.c': '$A sta scrivendo...',
    // example: "Alex is typing..."

    'typing.d': '$A e $B stanno scrivendo...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B e $C stanno scrivendo...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A ed un\'altra persona stanno scrivendo...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A e $N altre persone stanno scrivendo...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B ed un\'altra persona stanno scrivendo...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B e $N altre persone stanno scrivendo...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C ed un\'altra persona stanno scrivendo...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C e $N altre persone stanno scrivendo...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * Social login dialog
     */
    'social-modal.title': 'Accedi',
    'social-modal.header': 'Chatta su tutti i siti che usano Now4real',

    // buttons:
    'social-modal.google': 'Accedi con Google',
    'social-modal.facebook': 'Accedi con Facebook',
    'social-modal.twitter': 'Accedi con Twitter',
    'social-modal.linkedin': 'Accedi con LinkedIn',
    'social-modal.email': 'Accedi con email',

    'social-modal.footer': 'Cliccando su “Accedi” qui sopra accetti le <a1>Condizioni di servizio</a1> e la <a2>Privacy policy</a2> di Now4real',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Consenso',

    'jwt-modal.header': 'Per iniziare a chattare devi accettare le <a1>Condizioni di servizio</a1> e la <a2>Privacy policy</a2> di Now4real (il servizio di chat)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Accetto',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Non accetto',
    'jwt-modal.agreeRadio': 'Accetto',
    'jwt-modal.continueBtn': 'Continua',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Silenzia Utente',

    'mute-modal.header': 'L\'utente $U è stato silenziato fino a $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'L\'utente $U è stato silenziato',

    'mute-modal.body.set': 'Silenzia l\'utente $U per:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Aggiorna il periodo di silenziamento:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Se silenziato, l\'utente non sarà in grado di pubblicare altri messaggi. Potrai riattivare l\'utente quando vorrai.',

    'mute-modal.body.deleteAlert': 'Stai rimuovendo il silenziamento per l\'utente',

    'mute-modal.button': 'Conferma',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Nascondi Messaggi',
    'hide-modal.showTitle': 'Mostra Messaggi',

    'hide-modal.hideHeader': 'Nascondi tutti i messaggi inviati da $U (non saprà che l\'hai silenziato).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Mostra nuovamente i messaggi inviati da $U.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Potrai mostrarli nuovamente quando vorrai.',

    'hide-modal.button': 'Conferma',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Conferma',
    'confirmation-modal.ok': 'Si',
    'confirmation-modal.cancel': 'No',

    /**
     * Report dialog
     */
    'report-modal.title': 'Segnala Messaggio',

    'report-modal.header': 'Perché stai segnalando questo messaggio?',
    'report-modal.note': 'Se qualcuno è in pericolo immediato, chiama i servizi di emergenza locali - non aspettare',

    'report-modal.hateSpeech': 'Incitamento all\'odio o bullismo',
    'report-modal.violence': 'Terrorismo o violenza',
    'report-modal.pornography': 'Sessualmente inappropriato',
    'report-modal.spam': 'Spam, truffe o frodi',
    'report-modal.selfInjury': 'Suicidio o autolesionismo',
    'report-modal.copyright': 'Violazione della proprietà intellettuale',
    'report-modal.other': 'Altro',

    'report-modal.commentPlaceholder': 'Commento',
    'report-modal.button': 'Segnala',

    'report-modal.reportOk': 'Grazie per la segnalazione!',
    'report-modal.alreadyReportedError': 'Hai già segnalato il messaggio',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Sei sicuro di voler svuotare questa chat?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Sei sicuro di voler disabilitare questa chat?'
}