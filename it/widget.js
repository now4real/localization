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

    'timeUnit.minute': 'minuto',
    'timeUnit.minutes': 'minuti',
    'timeUnit.hour': 'ora',
    'timeUnit.hours': 'ore',
    'timeUnit.day': 'giorno',
    'timeUnit.days': 'giorni',
    'timeUnit.week': 'settimana',
    'timeUnit.weeks': 'settimane',
    'timeUnit.month': 'mese',
    'timeUnit.months': 'mesi',
    'timeUnit.year': 'anno',
    'timeUnit.years': 'anni',
    'timeUnit.forever': 'per sempre',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Connesso via Google',
    'commons.signedWith.facebook': 'Connesso via Facebook',
    'commons.signedWith.twitter': 'Connesso via X',
    'commons.signedWith.linkedin': 'Connesso via LinkedIn',
    'commons.signedWith.email': 'Connesso via email',
    'commons.signedWith.jwt': 'Connesso su questo sito',
    'commons.signedWith.noRegistration': 'Connesso su questa chat',

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
    'status-header.createPoll': 'Crea sondaggio',
    'status-header.terminatePoll': 'Termina sondaggio',
    'status-header.removePoll': 'Rimuovi sondaggio',
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
    'chat.attentionGrabber1': '⚡ Chatta con gli altri $N visitatori online adesso!',
    'chat.attentionGrabber2': '⚡ Chatta con gli altri visitatori online adesso!',
    // $N is a number
    // example: "⚡ Chat with the 2 other visitors online now!"

    'chat.welcomeMessage': 'Chatta con gli altri visitatori in tempo reale. I messaggi sono pubblici e scompaiono dopo $N $A. Sii rispettoso e divertiti!',
    'chat.welcomeMessageJWT': 'Chatta con gli altri visitatori in tempo reale. I messaggi potrebbero essere pubblici e scompaiono dopo $N $A. Sii rispettoso e divertiti!',
    // $N is a number and $A in a time unit taken from timeUnit
    // example: "Chat with other visitors in real time. Messages are public and vanish after 20 minutes. Be kind and have fun!"

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
    'chat.chatbotError': 'Si è verificato un errore con il chatbot del sito. Riprova per favore.',

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
    'emoji-picker.recents': 'Recenti',
    'emoji-picker.recents.none': 'Non hai ancora selezionato alcuna emoji.',
    'emoji-picker.search': 'Cerca emoji',
    'emoji-picker.search.error': 'Impossibile cercare emoji',
    'emoji-picker.search.notFound': 'Nessun risultato trovato',
    'emoji-picker.search.clear': 'Cancella la ricerca',
    'emoji-picker.error.load': 'Impossibile caricare le emoji',
    'emoji-picker.error.retry': 'Riprova',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Cerca GIF',
    'gif-picker.retry': 'Errore nel caricamento delle GIF. <a>Riprova</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Try again"

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
     * Create poll dialog
     */
    'create-poll-modal.title': 'Crea sondaggio',

    'create-poll-modal.questionPlaceholder': 'Domanda',
    'create-poll-modal.optionPlaceholder': 'Opzione',

    'create-poll-modal.multipleChoice': 'Risposta multipla',

    'create-poll-modal.addOptionButton': 'Aggiungi un\'opzione...',
    'create-poll-modal.deleteOptionButton': 'Elimina',
    'create-poll-modal.createButton': 'Crea',

    /**
     * Poll dialog
     */
    'poll-modal.title': 'Sondaggio',
    'poll-modal.titleClosed': 'Sondaggio terminato',

    'poll-modal.vote': 'voto',
    'poll-modal.votes': 'voti',
    'poll-modal.finalResults': 'Risultati finali',
    'poll-modal.signinToVote': '<a>Accedi</a> per votare',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Vota',
    'poll-modal.revokeVoteButton': 'Revoca voto',
    'poll-modal.viewVotesButton': 'Risultati',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Sei sicuro di voler svuotare questa chat?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Sei sicuro di voler disabilitare questa chat?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': 'Sei sicuro di voler terminare il sondaggio corrente?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': 'Sei sicuro di voler rimuovere il sondaggio corrente?'
}