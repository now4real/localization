/****************************************************************************************
 * SWEDISH (Standard)
 ****************************************************************************************/
export default {
    'genericError': 'Hoppsan! Nu blev något fel',
    'mutedError': 'Hoppsan! Det verkar som om din chattfunktion har tystats ner',

    'connection-status.offline': 'Du är offline',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minute': 'minut',
    'timeUnit.minutes': 'minuter',
    'timeUnit.hour': 'timme',
    'timeUnit.hours': 'timmar',
    'timeUnit.day': 'dag',
    'timeUnit.days': 'dagar',
    'timeUnit.week': 'vecka',
    'timeUnit.weeks': 'veckor',
    'timeUnit.month': 'månad',
    'timeUnit.months': 'månader',
    'timeUnit.year': 'år',
    'timeUnit.years': 'år',
    'timeUnit.forever': 'för evigt',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Inloggad med Google',
    'commons.signedWith.facebook': 'Inloggad med Facebook',
    'commons.signedWith.twitter': 'Inloggad med X',
    'commons.signedWith.linkedin': 'Inloggad med LinkedIn',
    'commons.signedWith.email': 'Inloggad med e-post',
    'commons.signedWith.jwt': 'Inloggad på denna webbplats',
    'commons.signedWith.noRegistration': 'Inloggad i chatten',

    'commons.close': 'Stäng', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Personer som tittar på den här sidan',
    'monitor.siteViewersTitle': 'Personer som tittar på denna webbplats',
    'monitor.chatBalloon': 'CHATT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Personer närvarande nu',

    /**
     * Menu
     */
    'status-header.options': 'Alternativ',
    'status-header.flushChat': 'Rensa alla meddelanden i den här chatten',
    'status-header.disableChat': 'Inaktivera den här chatten',
    'status-header.enableChat': 'Aktivera den här chatten',
    'status-header.createPoll': 'Skapa en omröstning',
    'status-header.terminatePoll': 'Avsluta omröstningen',
    'status-header.removePoll': 'Ta bort omröstningen',
    'status-header.help': 'Hjälp',
    'status-header.issue': 'Rapportera ett problem',
    'status-header.terms': 'Användarvillkor',
    'status-header.privacy': 'Integritetspolicy',
    'status-header.signout': 'Logga ut',
    'status-header.signin': 'Logga in',
    'status-header.editUserProfile': 'Redigera profil',

    'status-header.notRememberedLogin': 'Sparas inte',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'För att ändra ditt visningsnamn och bild, <a>redigera din profil</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CHATT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Chatta med andra besökare på denna sida i realtid',
    'tab.chatTitleSite': 'Chatta med andra besökare på denna webbplats i realtid',

    'tab.rankingTabLabel': 'SIDOR', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Sidor som besökare tittar på nu',

    'tab.heatmapTabLabel': 'KARTA', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Varifrån besökarna kommer',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'SIDA', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'WEBBPLATS', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Inga data',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Besökare på denna webbplats',
    'ranking.activeTitle': 'Personer som chattar på denna webbplats',
    'ranking.foregroundSwitchLabel': 'BESÖKARE', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'CHATTARE', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Inga data',
    'ranking.currentPage': 'Nuvarande sida',

    'ranking.note': 'Visar de tio högst rankade sidorna',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ Chatta med de $N andra besökarna online nu!',
    'chat.attentionGrabber2': '⚡ Chatta med de andra besökarna online nu!',
    // $N is a number
    // example: "⚡ Chat with the 2 other visitors online now!"

    'chat.welcomeMessage': 'Chatta med andra besökare i realtid. Meddelanden är offentliga och försvinner efter $N $A. Var snäll och ha kul!',
    'chat.welcomeMessageJWT': 'Chatta med andra besökare i realtid. Meddelanden kan vara offentliga och försvinna efter $N $A. Var snäll och ha kul!',
    // $N is a number and $A in a time unit taken from timeUnit
    // example: "Chat with other visitors in real time. Messages are public and vanish after 20 minutes. Be kind and have fun!"

    'chat.messageDeleted.byYou': 'Du raderade det här meddelandet',
    'chat.messageDeleted.byAuthor': 'Meddelande raderat av författaren',
    'chat.messageDeleted.byModerator': 'Meddelande raderat av en moderator',
    'chat.messageDeleted.byAdmin': 'Meddelande raderat av administratören',
    'chat.messageDeleted.byNow4real': 'Meddelande raderat av administratören',
    'chat.messageDeleted.byAI': 'Meddelande raderat av AI efter anmälan',
    'chat.messageDeleted.unknown': 'Meddelande raderat',

    'chat.messageHidden.byYou': 'Gömd av dig',

    'chat.placeholder': 'Skriv ett meddelande',
    'chat.postBtn': 'Skicka', // means "publish this message"

    'chat.tooFrequentError': 'Du är lite för snabb...\nSnälla översvämma inte chatten',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Ledsen, ditt meddelande verkar olämpligt. <a>Läs mer</a>',
    'chat.abortedError': 'Inloggning avbruten eller cookies inaktiverade i den här webbläsaren',
    'chat.notPersistentError': 'Autentiseringen sparas inte på grund av dina begränsade dataskyddsinställningar. För att förhindra detta, vänligen aktivera kakorna (cookies) för Now4real i din webbläsare.',
    'chat.disabledError': 'Den här chatten har inaktiverats',
    'chat.chatbotError': 'Ett fel inträffade med webbplatsens chatbot. Försök igen.',

    'chat.disabledByAdmin': 'Den här chatten har inaktiverats av administratören',
    'chat.disabledByModerator': 'Den här chatten har inaktiverats av en moderator',
    'chat.signinRequired': '<a>Logga in</a> för att chatta',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Endast visningsläge',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Svara',
    'chat.deleteBtn': 'Radera',
    'chat.muteBtn': 'Tysta', // means "mute this user"
    'chat.reportBtn': 'Anmäl', // means "report this message"
    'chat.hideBtn': 'Dölj', // means "hide this message"
    'chat.showBtn': 'Visa', // means "show this message"

    'chat.userIdenticon': 'Användarens fingeravtryck',
    
    'chat.showMoreBtn': 'Visa mer',
    'chat.showLessBtn': 'Visa mindre',

    /**
     * Presence
     */
    'presence.all.a': '1 besökare på denna sida (av $N på denna webbplats)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N besökare på denna sida (av $M på denna webbplats)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 besökare på denna sida',
    'presence.page.b': '$N besökare på den här sidan',

    'presence.site.a': '1 besökare på denna webbplats',
    'presence.site.b': '$N besökare på den här webbplatsen',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.recents': 'Senaste',
    'emoji-picker.recents.none': 'Du har inte valt några emojis än.',
    'emoji-picker.search': 'Sök emojis',
    'emoji-picker.search.error': 'Misslyckades med att söka efter emojis',
    'emoji-picker.search.notFound': 'Inga resultat hittades',
    'emoji-picker.search.clear': 'Rensa sökning',
    'emoji-picker.error.load': 'Misslyckades med att läsa in emojis',
    'emoji-picker.error.retry': 'Försök igen',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Sök GIF',
    'gif-picker.retry': 'Fel vid inläsning av GIFs. <a>Försök igen</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Try again"

    /**
     * Typing
     */
    'typing.a': '1 person skriver...',

    'typing.b': '$N personer skriver...',
    // example: "5 people are typing..."

    'typing.c': '$A skriver...',
    // example: "Alex is typing..."

    'typing.d': '$A och $B skriver...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B och $C skriver...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A och 1 till skriver...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A och $N andra skriver...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B och 1 till skriver...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B, och $N andra skriver...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C och 1 till skriver...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C och $N andra skriver...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Samtycke',

    'jwt-modal.header': 'För att börja chatta behöver du acceptera <a1>användarvillkoren</a1> och <a2>integritetspolicyn</a2> från Now4real (chattjänsten)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Acceptera',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Säga emot',
    'jwt-modal.agreeRadio': 'Hålla med',
    'jwt-modal.continueBtn': 'Fortsätta',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Tysta Användaren',

    'mute-modal.header': 'Användaren $U har tystats tills $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'Användaren $U har tystats',

    'mute-modal.body.set': 'Tysta användaren $U i:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Uppdatera tystnings period:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Om ljudet är avstängt kommer användaren inte att kunna publicera andra meddelanden. Du kan ta bort ljudet från användaren när du vill.',

    'mute-modal.body.deleteAlert': 'Du avtystar användaren',

    'mute-modal.button': 'Bekräfta',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Dölj meddelanden',
    'hide-modal.showTitle': 'Visa meddelanden',

    'hide-modal.hideHeader': 'Dölj alla meddelanden som postats av $U (de vet inte att du har stängt av dem).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Visa igen meddelanden postade av $U.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Du kan visa dem igen när du vill.',

    'hide-modal.button': 'Bekräfta',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Bekräfta',
    'confirmation-modal.ok': 'Ja',
    'confirmation-modal.cancel': 'Nej',

    /**
     * Report dialog
     */
    'report-modal.title': 'Anmäl Meddelande',

    'report-modal.header': 'Varför rapporterar du det här meddelandet?',
    'report-modal.note': 'Om någon är i omedelbar fara, ring den lokala räddningstjänsten - vänta inte',

    'report-modal.hateSpeech': 'Hatprat eller mobbning',
    'report-modal.violence': 'Terrorism eller våld',
    'report-modal.pornography': 'Sexuellt olämpligt',
    'report-modal.spam': 'Spam, bedrägerier eller bedrägeri',
    'report-modal.selfInjury': 'Självmord eller självskada',
    'report-modal.copyright': 'Immaterialrättsintrång',
    'report-modal.other': 'Övrig',

    'report-modal.commentPlaceholder': 'Kommentar',
    'report-modal.button': 'Anmäl',

    'report-modal.reportOk': 'Tack för rapporteringen!',
    'report-modal.alreadyReportedError': 'Du har redan anmält meddelandet',

    /**
     * Create poll dialog
     */
    'create-poll-modal.title': 'Skapa en omröstning',

    'create-poll-modal.questionPlaceholder': 'Fråga',
    'create-poll-modal.optionPlaceholder': 'Alternativ',

    'create-poll-modal.multipleChoice': 'Flera val',

    'create-poll-modal.addOptionButton': 'Lägg till ett alternativ...',
    'create-poll-modal.deleteOptionButton': 'Ta bort',
    'create-poll-modal.createButton': 'Skapa',

    /**
     * Poll dialog
     */
    'poll-modal.title': 'Omröstning',
    'poll-modal.titleClosed': 'Omröstning stängd',

    'poll-modal.vote': 'röst',
    'poll-modal.votes': 'röster',
    'poll-modal.finalResults': 'Slutresultat',
    'poll-modal.signinToVote': '<a>Logga in</a> för att rösta',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Rösta',
    'poll-modal.revokeVoteButton': 'Återkalla röst',
    'poll-modal.viewVotesButton': 'Resultat',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Är du säker på att du vill rensa alla meddelanden i den här chatten?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Är du säker på att du vill inaktivera den här chatten?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': 'Är du säker på att du vill avsluta den aktuella omröstningen?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': 'Är du säker på att du vill ta bort den aktuella omröstningen?'
}