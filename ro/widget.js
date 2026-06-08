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

    'timeUnit.minute': 'minut',
    'timeUnit.minutes': 'minute',
    'timeUnit.hour': 'ora',
    'timeUnit.hours': 'ore',
    'timeUnit.day': 'zi',
    'timeUnit.days': 'zile',
    'timeUnit.week': 'saptamana',
    'timeUnit.weeks': 'saptamani',
    'timeUnit.month': 'luna',
    'timeUnit.months': 'luni',
    'timeUnit.year': 'an',
    'timeUnit.years': 'ani',
    'timeUnit.forever': 'pentru totdeauna',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Intra cu Google',
    'commons.signedWith.facebook': 'Intra cu Facebook',
    'commons.signedWith.twitter': 'Intra cu X',
    'commons.signedWith.linkedin': 'Intra cu LinkedIn',
    'commons.signedWith.email': 'Intra cu adresa de email',
    'commons.signedWith.jwt': 'Intra pe acest site',
    'commons.signedWith.noRegistration': 'Conectat în această chat',

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
    'status-header.flushChat': 'Golește acest chat',
    'status-header.disableChat': 'Dezactivează acest chat',
    'status-header.enableChat': 'Activează acest chat',
    'status-header.createPoll': 'Creează sondaj',
    'status-header.terminatePoll': 'Încheie sondaj',
    'status-header.removePoll': 'Șterge sondaj',
    'status-header.help': 'Ajutor',
    'status-header.issue': 'Raporteaza problema',
    'status-header.terms': 'Termene si conditii',
    'status-header.privacy': 'Politica de confidențialitate',
    'status-header.signout': 'Ieșire',
    'status-header.signin': 'Autentificare',
    'status-header.editUserProfile': 'Editează profilul',
    'status-header.sounds': 'Sunete',
    'status-header.soundsNote': 'Notificările sonore rămân active câteva minute după ce fila trece în fundal',

    'status-header.notRememberedLogin': 'Nu-mi amintesc',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'Pentru a-ți schimba numele afișat și poza, <a>editează profilul</a>',
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
    'chat.attentionGrabber1': '⚡ Discută cu cei $N alți vizitatori online acum!',
    'chat.attentionGrabber2': '⚡ Discută cu ceilalți vizitatori online acum!',
    // $N is a number
    // example: "⚡ Chat with the 2 other visitors online now!"

    'chat.welcomeMessage': 'Chat cu alți vizitatori în timp real. Mesajele sunt publice și dispar după $N $A. Fii amabil și distrează-te!',
    'chat.welcomeMessageJWT': 'Chat cu alți vizitatori în timp real. Mesajele ar putea fi publice și dispar după $N $A. Fii amabil și distrează-te!',
    // $N is a number and $A in a time unit taken from timeUnit
    // example: "Chat with other visitors in real time. Messages are public and vanish after 20 minutes. Be kind and have fun!"

    'chat.welcomeMessageNoExpiration': 'Chat cu alți vizitatori în timp real. Mesajele sunt publice. Fii amabil și distrează-te!',
    'chat.welcomeMessageNoExpirationJWT': 'Chat cu alți vizitatori în timp real. Mesajele ar putea fi publice. Fii amabil și distrează-te!',

    'chat.messageDeleted.byYou': 'Ai șters acest mesaj',
    'chat.messageDeleted.byAuthor': 'Mesaj șters de autor',
    'chat.messageDeleted.byModerator': 'Mesaj șters de un moderator',
    'chat.messageDeleted.byAdmin': 'Mesaj șters de administrator',
    'chat.messageDeleted.byNow4real': 'Mesaj șters de administrator',
    'chat.messageDeleted.byAI': 'Mesaj șters de AI după raportare',
    'chat.messageDeleted.unknown': 'Mesaj șters',

    'chat.messageEdited': 'Editat',

    'chat.messageHidden.byYou': 'Ascuns de tine',

    'chat.placeholder': 'Scrie mesajul',
    'chat.postBtn': 'Publica', // means "publica mesajul tau"

    'chat.tooFrequentError': 'Prea repede ...\nTe rog nu inunda chat-ul cu prea multe mesaje',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Ne pare rău, mesajul dvs. pare inadecvat. <a>Află mai multe</a>',
    'chat.abortedError': 'Intrare esuata sau cookie nu sunt permise in acest browser',
    'chat.notPersistentError': 'Autetificarea nu este posibila deoarece ai setari ridicate de mentinere a intimitatii. Permite acum browser-ului cookie de la Now4real.',
    'chat.disabledError': 'Acest chat a fost dezactivat',
    'chat.chatbotError': 'A apărut o eroare cu chatbot-ul site-ului. Vă rugăm să încercați din nou.',
    'chat.loadMoreError': 'Nu se pot încărca mesaje mai vechi',
    'chat.editNotAuthorizedError': 'Acest mesaj nu poate fi editat',
    'chat.deleteNotAuthorizedError': 'Acest mesaj nu poate fi șters',

    'chat.copiedInfo': 'Mesaj copiat',

    'chat.disabledByAdmin': 'Acest chat a fost dezactivat de administrator',
    'chat.disabledByModerator': 'Acest chat a fost dezactivat de un moderator',
    'chat.signinRequired': '<a>Intra in</a> pentru a discuta',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Doar vizualizare',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Raspunde', // means "reply to this message"
    'chat.copyBtn': 'Copiază', // means "copy this message"
    'chat.deleteBtn': 'Stergere', // means "delete this message"
    'chat.muteBtn': 'Mutează', // means "mute this user"
    'chat.reportBtn': 'Raportează', // means "report this message"
    'chat.hideBtn': 'Ascunde', // means "hide this message"
    'chat.showBtn': 'Arată', // means "show this message"
    'chat.editBtn': 'Editează', // means "edit this message"

    'chat.userIdenticon': 'Amprentă utilizator',
    
    'chat.showMoreBtn': 'Arată mai mult',
    'chat.showLessBtn': 'Arată mai puțin',

    'chat.reactionPickerBtn': 'Alege o reacție',
    'chat.reactionsTitle': 'Reacții',
    'chat.reactionsAll': 'Toate',
    'chat.reactionsRemoveHint': 'Elimină-ți reacția',
    'chat.youLabel': 'Tu',

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
    'gif-picker.search': 'Caută KLIPY',
    'gif-picker.retry': 'Eroare la încărcarea GIF-urilor. <a>Încearcă din nou</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Try again"

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
     * JWT login dialog
     */
    'jwt-modal.title': 'Consimtamant',

    'jwt-modal.header': 'Pentru a discuta trebuie sa accepti <a1>Termene si Servicii</a1> și <a2>Politica de Confidentialitate</a2> de la acest site și Now4real',
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
    'mute-modal.title': 'Mutează utilizatorul',

    'mute-modal.header': 'Utilizatorul $U a fost redus la tăcere până la $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'Utilizatorul $U a fost redus la tăcere',

    'mute-modal.body.set': 'Redu la tăcere utilizatorul $U pentru:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Actualizează perioada de reducere la tăcere:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Dacă este redus la tăcere, utilizatorul nu va putea publica alte mesaje. Îi poți elimina restricția oricând.',

    'mute-modal.body.deleteAlert': 'Înlături reducerea la tăcere a utilizatorului',

    'mute-modal.button': 'Confirmă',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Ascunde mesaje',
    'hide-modal.showTitle': 'Arată mesaje',

    'hide-modal.hideHeader': 'Ascunde toate mesajele publicate de $U (nu va ști că le-ai ascuns).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Arată din nou mesajele publicate de $U.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Le poți afișa din nou oricând.',

    'hide-modal.button': 'Confirmă',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Confirmare',
    'confirmation-modal.ok': 'Da',
    'confirmation-modal.cancel': 'Nu',

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
     * Create poll dialog
     */
    'create-poll-modal.title': 'Creează sondaj',

    'create-poll-modal.questionPlaceholder': 'Întrebare',
    'create-poll-modal.optionPlaceholder': 'Opțiune',

    'create-poll-modal.multipleChoice': 'Opțiuni multiple',

    'create-poll-modal.addOptionButton': 'Adaugă opțiune...',
    'create-poll-modal.deleteOptionButton': 'Șterge',
    'create-poll-modal.createButton': 'Creează',

    /**
     * Poll dialog
     */
    'poll-modal.title': 'Sondaj',
    'poll-modal.titleClosed': 'Sondaj închis',

    'poll-modal.vote': 'vot',
    'poll-modal.votes': 'voturi',
    'poll-modal.finalResults': 'Rezultate finale',
    'poll-modal.signinToVote': '<a>Conectează-te</a> pentru a vota',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Votează',
    'poll-modal.revokeVoteButton': 'Revocă votul',
    'poll-modal.viewVotesButton': 'Rezultate',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Sigur vrei să golești acest chat?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Sigur vrei să dezactivezi acest chat?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': 'Sigur doriți să încheiați sondajul curent?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': 'Sigur doriți să ștergeți sondajul curent?',

    /**
     * Delete message confirm dialog
     */
    'delete-message-confirmation-modal.message': 'Sigur vrei să ștergi acest mesaj?'
}