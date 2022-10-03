/****************************************************************************************
 * PORTUGUESE (Brazilian)
 ****************************************************************************************/
export default {
    'genericError': 'Ups! Algo deu errado',
    'mutedError': 'Ups! Parece que você foi silenciado',

    'connection-status.offline': 'Você está desconectado/a',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minutes': 'minutos',
    'timeUnit.hours': 'horas',
    'timeUnit.days': 'dias',
    'timeUnit.weeks': 'semanas',
    'timeUnit.months': 'meses',
    'timeUnit.years': 'anos',
    'timeUnit.forever': 'forever', // TODO

    /**
     * Commons
     */
    'commons.signedWith.google': 'Conectado via Google',
    'commons.signedWith.facebook': 'Conectado via Facebook',
    'commons.signedWith.twitter': 'Conectado via Twitter',
    'commons.signedWith.linkedin': 'Conectado via LinkedIn',
    'commons.signedWith.email': 'Conectado via email',
    'commons.signedWith.jwt': 'Conectado a este site',

    'commons.close': 'Fechar', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Pessoas visualizando esta página',
    'monitor.siteViewersTitle': 'Pessoas visualizando este site',
    'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'People presentes agora',

    /**
     * Menu
     */
    'status-header.options': 'Opções',
    'status-header.flushChat': 'Flush this chat', // TODO
    'status-header.disableChat': 'Disable this chat', // TODO
    'status-header.enableChat': 'Enable this chat', // TODO
    'status-header.help': 'Ajuda',
    'status-header.issue': 'Reportar um problema',
    'status-header.terms': 'Termos de Serviço',
    'status-header.privacy': 'Política de Privacidade',
    'status-header.signout': 'Sair',
    'status-header.signin': 'Sign in', // TODO
    'status-header.editUserProfile': 'Edit profile', // TODO

    'status-header.notRememberedLogin': 'Não será lembrado',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'To change your display name and picture, <a>edit your profile</a>', // TODO
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Converse aqui com outras pessoas que estão nesta página agora',
    'tab.chatTitleSite': 'Converse aqui com outras pessoas que estão neste site agora',

    'tab.rankingTabLabel': 'PÁGINAS', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Onde as pessoas estão neste site agora',

    'tab.heatmapTabLabel': 'MAPA', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Onde as pessoas estão no mundo real',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'PÁGINA', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Sem dados',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Pessoas neste site',
    'ranking.activeTitle': 'Pessoas conversando neste site',
    'ranking.foregroundSwitchLabel': 'VISITANTES', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'CONVERSANDO', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Sem dados',
    'ranking.currentPage': 'Página atual',

    'ranking.note': 'Mostrando as dez páginas principais',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ Converse com os outros $N visitantes agora',
    'chat.attentionGrabber2': '⚡ Converse com os outros visitantes agora',
    // $N is a number
    // example: "⚡ Chat with the other 2 visitors now"

    'chat.welcomeMessage': 'Converse aqui com outras visitantes em tempo real. As mensagens são públicas e desaparecem após $N $A.',
    'chat.welcomeMessageJWT': 'Converse aqui com outras visitantes em tempo real. As mensagens podem ser públicas e desaparecer após $N $A.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'You deleted this message', // TODO
    'chat.messageDeleted.byAuthor': 'Message deleted by the author', // TODO
    'chat.messageDeleted.byModerator': 'Message deleted by a moderator', // TODO
    'chat.messageDeleted.byAdmin': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.byNow4real': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.unknown': 'Message deleted', // TODO

    'chat.placeholder': 'Escrever mensagem',
    'chat.postBtn': 'Postar', // means "publish this message"

    'chat.tooFrequentError': 'Você está sendo\' rápido demais... \nPor favor não congestione o bate-papo',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Desculpe ... Esta mensagem parece inadequada',
    'chat.abortedError': 'Login cancelado ou cookies desativados neste navegador',
    'chat.notPersistentError': 'A autenticação não será lembrada devido às suas configurações de privacidade restritas. Ative os cookies para Now4real no seu navegador para evitar que isso aconteça.',
    'chat.disabledError': 'This chat has been disabled', // TODO

    'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
    'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
    'chat.signinRequired': '<a>Entrar</a> para conversar',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Somente leitura',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Responder', // means "reply to this message"
    'chat.deleteBtn': 'Excluir', // means "delete this message"
    'chat.muteBtn': 'Mute', // means "mute this user" // TODO
    'chat.reportBtn': 'Denunciar', // means "report this message"

    'chat.userIdenticon': 'User fingerprint', // TODO

    /**
     * Presence
     */
    'presence.all.a': '1 pessoa nesta página (de $N neste site)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N pessoas nesta página (de $M neste site)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 pessoa nesta página',
    'presence.page.b': '$N pessoas nesta página',

    'presence.site.a': '1 pessoa neste site',
    'presence.site.b': '$N pessoas neste site',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.people': 'Pessoas',
    'emoji-picker.nature': 'Natureza',
    'emoji-picker.food': 'Comida',
    'emoji-picker.activity': 'Atividades',
    'emoji-picker.travel': 'Lugares',
    'emoji-picker.objects': 'Objetos',
    'emoji-picker.symbols': 'Símbolos',
    'emoji-picker.flags': 'Bandeiras',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Search GIF', // TODO

    /**
     * Typing
     */
    'typing.a': 'Uma pessoa está escrevendo...',

    'typing.b': '$N pessoas estão escrevendo...',
    // example: "5 people are typing..."

    'typing.c': '$A está escrevendo...',
    // example: "Alex is typing..."

    'typing.d': '$A e $B estão escrevendo...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B e $C estão escrevendo...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A e outra pessoa estão escrevendo...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A e $N outras pessoas estão escrevendo...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B e outra pessoa estão escrevendo...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B e $N outras pessoas estão escrevendo...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C e outra pessoa estão escrevendo...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C e $N outras pessoas estão escrevendo...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * Social login dialog
     */
    'social-modal.title': 'Entrar',
    'social-modal.header': 'Começar a conversar em qualquer website que utiliza Now4real',

    // buttons:
    'social-modal.google': 'Entrar com Google',
    'social-modal.facebook': 'Entrar com Facebook',
    'social-modal.twitter': 'Entrar com Twitter',
    'social-modal.linkedin': 'Entrar com LinkedIn',
    'social-modal.email': 'Entrar com email',

    'social-modal.footer': 'Click em “Entrar” acima para aceitar os <a1>Termos de Serviço</a1> e a <a2>Política de Privacidade</a2> de Now4real',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Consentimento',

    'jwt-modal.header': 'Para começar a conversar você deve aceitar os <a1>Termos de Serviço</a1> e a <a2>Política de Privacidade</a2> de Now4real (o serviço de chat)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Acetair',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Discordar',
    'jwt-modal.agreeRadio': 'Concordar',
    'jwt-modal.continueBtn': 'Continuar',

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

    'mute-modal.body.deleteInfo': 'You can unmute the user whenever you want.', // TODO

    'mute-modal.body.deleteAlert': 'You are unmuting the user', // TODO

    'mute-modal.button': 'Confirm', // TODO

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Confirm', // TODO
    'confirmation-modal.ok': 'Yes', // TODO
    'confirmation-modal.cancel': 'No', // TODO

    /**
     * Report dialog
     */
    'report-modal.title': 'Denunciar Mensagem',

    'report-modal.header': 'Por que você está denunciando esta mensagem?',
    'report-modal.note': 'Se alguém estiver em perigo imediato, ligue para os serviços de emergência locais - não espere',

    'report-modal.hateSpeech': 'Discurso de ódio ou bullying',
    'report-modal.violence': 'Terrorismo ou violência',
    'report-modal.pornography': 'Sexualmente inapropriado',
    'report-modal.spam': 'Spam, golpes ou fraude',
    'report-modal.selfInjury': 'Suicídio ou autolesão',
    'report-modal.copyright': 'Violação da propriedade intelectual',
    'report-modal.other': 'Outro',

    'report-modal.commentPlaceholder': 'Comentário',
    'report-modal.button': 'Denunciar',

    'report-modal.reportOk': 'Obrigado pelo relatório!',
    'report-modal.alreadyReportedError': 'Você já denunciou a mensagem',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?', // TODO

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?' // TODO
}