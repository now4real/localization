/****************************************************************************************
 * FRENCH (Standard)
 ****************************************************************************************/
export default {
    'genericError': 'Oups! Quelque chose a mal fonctionné',
    'mutedError': 'Oups! Il semble que vous ayez été mis en sourdine',

    'connection-status.offline': 'Vous êtes hors ligne',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minute': 'minute',
    'timeUnit.minutes': 'minutes',
    'timeUnit.hour': 'heure',
    'timeUnit.hours': 'heures',
    'timeUnit.day': 'jour',
    'timeUnit.days': 'jours',
    'timeUnit.week': 'semaine',
    'timeUnit.weeks': 'semaines',
    'timeUnit.month': 'mois',
    'timeUnit.months': 'mois',
    'timeUnit.year': 'année',
    'timeUnit.years': 'années',
    'timeUnit.forever': 'pour toujours',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Connecté avec Google',
    'commons.signedWith.facebook': 'Connecté avec Facebook',
    'commons.signedWith.twitter': 'Connecté avech Twitter',
    'commons.signedWith.linkedin': 'Connecté avec LinkedIn',
    'commons.signedWith.email': 'Connecté avec email',
    'commons.signedWith.jwt': 'Connecté sur ce site',
    'commons.signedWith.noRegistration': 'Connecté sur ce chat',

    'commons.close': 'Fermer', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Personnes consultant cette page',
    'monitor.siteViewersTitle': 'Personnes consultant ce site',
    'monitor.chatBalloon': 'DISCUTER', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Personnes présentes actuellement',

    /**
     * Menu
     */
    'status-header.options': 'Options',
    'status-header.flushChat': 'Annuler cette discussion',
    'status-header.disableChat': 'Désactiver cette discussion',
    'status-header.enableChat': 'Activer cette discussion',
    'status-header.help': 'Aide',
    'status-header.issue': 'Signaler un Problème',
    'status-header.terms': 'Conditions d\'Utilisation',
    'status-header.privacy': 'Politique de Confidentialité',
    'status-header.signout': 'Déconnexion',
    'status-header.signin': 'Connexion',
    'status-header.editUserProfile': 'Modifier le profil',

    'status-header.notRememberedLogin': 'Non mémorisé',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'Pour changer votre nom d\'affichage et votre image, <a>modifiez votre profil</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'DISCUTER', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Discuter avec d\'autres visiteurs de cette page en temps réel',
    'tab.chatTitleSite': 'Discuter avec d\'autres visiteurs de ce site en temps réel',

    'tab.rankingTabLabel': 'PAGES', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Pages consultées actuellement',

    'tab.heatmapTabLabel': 'MAP', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'D\'où viennent les gens',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'PAGE', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Aucune donnée',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Les personnes sur ce site',
    'ranking.activeTitle': 'Les personnes discutant sur ce site',
    'ranking.foregroundSwitchLabel': 'VISITEURS', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'DISCUTEURS', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Aucune donnée',
    'ranking.currentPage': 'Page en cours',

    'ranking.note': 'Afficher le top dix des pages',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ Discuter avec les autres $N visiteurs maintenant',
    'chat.attentionGrabber2': '⚡ Discuter avec les autres visiteurs maintenant',
    // $N is a number
    // example: "⚡ Chat with the other 2 visitors now"

    'chat.welcomeMessage': 'Discuter avec d\'autres visiteurs en temps réel. Les messages sont publics et disparaissent après $N $A.',
    'chat.welcomeMessageJWT': 'Discuter avec d\'autres visiteurs en temps réel. Les messages peuvent être publics et disparaître après $N $A.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'Vous avez supprimé ce message',
    'chat.messageDeleted.byAuthor': 'Message supprimé par l\'auteur',
    'chat.messageDeleted.byModerator': 'Message supprimé par un modérateur',
    'chat.messageDeleted.byAdmin': 'Message supprimé par l\'administrateur',
    'chat.messageDeleted.byNow4real': 'Message supprimé par l\'administrateur',
    'chat.messageDeleted.unknown': 'Message supprimé',

    'chat.messageHidden.byYou': 'Caché par toi',

    'chat.placeholder': 'Saisir un message',
    'chat.postBtn': 'Publier', // means "publish this message"

    'chat.tooFrequentError': 'Vous êtes un peu trop rapide...\nVeuillez ne pas inonder la discussion',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Désolé... Ce message semble inapproprié',
    'chat.abortedError': 'Connexion annulée ou cookies désactivés sur ce navigateur',
    'chat.notPersistentError': 'L\'authentification ne sera pas mémorisée en raison de vos paramètres de confidentialité restreints. Veuillez activer les cookies pour Now4real dans votre navigateur pour éviter que cela ne se produise.',
    'chat.disabledError': 'Cette discussion a été désactivée',

    'chat.disabledByAdmin': 'Cette discussion a été désactivée par l\'administrateur',
    'chat.disabledByModerator': 'Cette discussion a été désactivée par un modérateur',
    'chat.signinRequired': '<a>Connexion</a> à la discussion',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Mode affichage uniquement',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Répondre', // means "reply to this message"
    'chat.deleteBtn': 'Supprimer', // means "delete this message"
    'chat.muteBtn': 'Sourdine', // means "mute this user"
    'chat.reportBtn': 'Signaler', // means "report this message"
    'chat.hideBtn': 'Cacher', // means "hide this message"
    'chat.showBtn': 'Afficher', // means "show this message"

    'chat.userIdenticon': 'Empreinte utilisateur',

    /**
     * Presence
     */
    'presence.all.a': '1 personne sur cette page (de $N sur ce site)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N personnes sur cette page (de $M sur ce site)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 personne sur cette page',
    'presence.page.b': '$N personnes sur cette page',

    'presence.site.a': '1 personne sur ce site',
    'presence.site.b': '$N personnes sur ce site',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.recents': 'Récents',
    'emoji-picker.recents.none': 'Vous n\'avez pas encore sélectionné d\'emojis.',
    'emoji-picker.search': 'Rechercher des emojis',
    'emoji-picker.search.error': 'Échec de la recherche d\'emojis',
    'emoji-picker.search.notFound': 'Aucun résultat trouvé',
    'emoji-picker.search.clear': 'Effacer la recherche',
    'emoji-picker.error.load': 'Impossible de charger les emojis',
    'emoji-picker.error.retry': 'Réessayer',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Recherche GIF',

    /**
     * Typing
     */
    'typing.a': '1 personne est en train d\'écrire...',

    'typing.b': '$N personnes sont en train d\'écrire...',
    // example: "5 people are typing..."

    'typing.c': '$A est en train d\'écrire...',
    // example: "Alex is typing..."

    'typing.d': '$A et $B sont en train d\'écrire...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B, et $C sont en train d\'écrire...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A et 1 autre sont en train d\'écrire...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A et $N autres sont en train d\'écrire...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B, et 1 autre sont en train d\'écrire...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B, et $N autres sont en train d\'écrire...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C, et 1 autre sont en train d\'écrire...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C, et $N autres sont en train d\'écrire...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Consentir',

    'jwt-modal.header': 'Pour commencer à discuter, vous devez acceptez les <a1>Conditions d\'Utilisation</a1> et la <a2>Politique de Confidentialité</a2> de Now4real (le service de discussion)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Accepter',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Refuser',
    'jwt-modal.agreeRadio': 'Accepter',
    'jwt-modal.continueBtn': 'Continuez',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Mettre en Sourdine',

    'mute-modal.header': 'L\'utilisateur $U a été mis en sourdine jusqu\'à $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'L\'utilisateur $U a été mis en sourdine',

    'mute-modal.body.set': 'Mettre l\'utilisateur $U en sourdine pendant:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Modifier la période de sourdine:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Vous pouvez désactiver le mode sourdine de l\'utilisateur quand vous le souhaitez.',
    'mute-modal.body.deleteInfo': 'S\'il est désactivé, l\'utilisateur ne pourra pas publier d\'autres messages. Vous pouvez réactiver l\'utilisateur quand vous le souhaitez.',

    'mute-modal.body.deleteAlert': 'Vous désactivez le mode sourdine pour l\'utilisateur',

    'mute-modal.button': 'Confirmer',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Cacher les messages',
    'hide-modal.showTitle': 'Afficher les messages',

    'hide-modal.hideHeader': 'Cacher tous les messages postés par $U (il ne saura pas que vous les avez mis en sourdine).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Afficher à nouveau les messages postés par $U.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Vous pouvez les afficher à nouveau quand vous le souhaitez.',

    'hide-modal.button': 'Confirmer',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Confirmer',
    'confirmation-modal.ok': 'Oui',
    'confirmation-modal.cancel': 'Non',

    /**
     * Report dialog
     */
    'report-modal.title': 'Signaler le message',

    'report-modal.header': 'Pourquoi signalez-vous ce message?',
    'report-modal.note': 'Si quelqu\'un est en danger immédiat, appelez les services d\'urgence locaux - n\'attendez pas',

    'report-modal.hateSpeech': 'Discours haineux ou intimidation',
    'report-modal.violence': 'Terrorisme ou violence',
    'report-modal.pornography': 'Sexuellement inapproprié',
    'report-modal.spam': 'Spam, escroquerie ou fraude',
    'report-modal.selfInjury': 'Suicide ou automutilation',
    'report-modal.copyright': 'Intellectual property infringement',
    'report-modal.other': 'Autre',

    'report-modal.commentPlaceholder': 'Commentaire',
    'report-modal.button': 'Signaler',

    'report-modal.reportOk': 'Merci pour le signalement!',
    'report-modal.alreadyReportedError': 'Vous avez déjà signalé le message',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Êtes-vous sûr de vouloir effacer cette discussion?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Êtes-vous sûr de vouloir désactiver cette discussion?'
}