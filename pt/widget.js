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

    'timeUnit.minute': 'minuto',
    'timeUnit.minutes': 'minutos',
    'timeUnit.hour': 'hora',
    'timeUnit.hours': 'horas',
    'timeUnit.day': 'dia',
    'timeUnit.days': 'dias',
    'timeUnit.week': 'semana',
    'timeUnit.weeks': 'semanas',
    'timeUnit.month': 'mês',
    'timeUnit.months': 'meses',
    'timeUnit.year': 'ano',
    'timeUnit.years': 'anos',
    'timeUnit.forever': 'para sempre',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Conectado via Google',
    'commons.signedWith.facebook': 'Conectado via Facebook',
    'commons.signedWith.twitter': 'Conectado via X',
    'commons.signedWith.linkedin': 'Conectado via LinkedIn',
    'commons.signedWith.email': 'Conectado via email',
    'commons.signedWith.jwt': 'Conectado a este site',
    'commons.signedWith.noRegistration': 'Conectado a este chat',

    'commons.close': 'Fechar', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Pessoas visualizando esta página',
    'monitor.siteViewersTitle': 'Pessoas visualizando este site',
    'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Pessoas presentes agora',

    /**
     * Menu
     */
    'status-header.options': 'Opções',
    'status-header.flushChat': 'Limpar este chat',
    'status-header.disableChat': 'Desativar este chat',
    'status-header.enableChat': 'Ativar este chat',
    'status-header.createPoll': 'Criar enquete',
    'status-header.terminatePoll': 'Encerrar enquete',
    'status-header.removePoll': 'Remover enquete',
    'status-header.help': 'Ajuda',
    'status-header.issue': 'Reportar um problema',
    'status-header.terms': 'Termos de Serviço',
    'status-header.privacy': 'Política de Privacidade',
    'status-header.signout': 'Sair',
    'status-header.signin': 'Entrar',
    'status-header.editUserProfile': 'Editar perfil',
    'status-header.sounds': 'Sons',
    'status-header.soundsNote': 'Alertas sonoros permanecem ativos por alguns minutos após a aba ir para segundo plano',

    'status-header.notRememberedLogin': 'Não será lembrado',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'Para alterar seu nome de exibição e foto, <a>edite seu perfil</a>',
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
    'chat.attentionGrabber1': '⚡ Converse com os $N outros visitantes online agora!',
    'chat.attentionGrabber2': '⚡ Converse com os outros visitantes online agora!',
    // $N is a number
    // example: "⚡ Chat with the 2 other visitors online now!"

    'chat.welcomeMessage': 'Converse com outros visitantes em tempo real. As mensagens são públicas e desaparecem após $N $A. Seja gentil e divirta-se!',
    'chat.welcomeMessageJWT': 'Converse com outros visitantes em tempo real. As mensagens podem ser públicas e desaparecer após $N $A. Seja gentil e divirta-se!',
    // $N is a number and $A in a time unit taken from timeUnit
    // example: "Chat with other visitors in real time. Messages are public and vanish after 20 minutes. Be kind and have fun!"

    'chat.welcomeMessageNoExpiration': 'Converse com outros visitantes em tempo real. As mensagens são públicas. Seja gentil e divirta-se!',
    'chat.welcomeMessageNoExpirationJWT': 'Converse com outros visitantes em tempo real. As mensagens podem ser públicas. Seja gentil e divirta-se!',

    'chat.messageDeleted.byYou': 'Você excluiu esta mensagem',
    'chat.messageDeleted.byAuthor': 'Mensagem excluída pelo autor',
    'chat.messageDeleted.byModerator': 'Mensagem excluída por um moderador',
    'chat.messageDeleted.byAdmin': 'Mensagem excluída pelo administrador',
    'chat.messageDeleted.byNow4real': 'Mensagem excluída pelo administrador',
    'chat.messageDeleted.byAI': 'Mensagem excluída pela IA após denúncia',
    'chat.messageDeleted.unknown': 'Mensagem excluída',

    'chat.messageEdited': 'Editado',

    'chat.messageHidden.byYou': 'Ocultada por você',

    'chat.placeholder': 'Escrever mensagem',
    'chat.postBtn': 'Postar', // means "publish this message"

    'chat.tooFrequentError': 'Você está sendo\' rápido demais... \nPor favor não congestione o bate-papo',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Desculpe, sua mensagem parece imprópria. <a>Saiba mais</a>',
    'chat.abortedError': 'Login cancelado ou cookies desativados neste navegador',
    'chat.notPersistentError': 'A autenticação não será lembrada devido às suas configurações de privacidade restritas. Ative os cookies para Now4real no seu navegador para evitar que isso aconteça.',
    'chat.disabledError': 'Este chat foi desativado',
    'chat.chatbotError': 'Ocorreu um erro com o chatbot do site. Por favor, tente novamente.',
    'chat.loadMoreError': 'Não foi possível carregar mensagens mais antigas',
    'chat.editNotAuthorizedError': 'Esta mensagem não pode ser editada',
    'chat.deleteNotAuthorizedError': 'Esta mensagem não pode ser excluída',

    'chat.copiedInfo': 'Mensagem copiada',

    'chat.disabledByAdmin': 'Este chat foi desativado pelo administrador',
    'chat.disabledByModerator': 'Este chat foi desativado por um moderador',
    'chat.signinRequired': '<a>Entrar</a> para conversar',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Somente leitura',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Responder', // means "reply to this message"
    'chat.copyBtn': 'Copiar', // means "copy this message"
    'chat.deleteBtn': 'Excluir', // means "delete this message"
    'chat.muteBtn': 'Silenciar', // means "mute this user"
    'chat.reportBtn': 'Denunciar', // means "report this message"
    'chat.hideBtn': 'Ocultar', // means "hide this message"
    'chat.showBtn': 'Mostrar', // means "show this message"
    'chat.editBtn': 'Editar', // means "edit this message"

    'chat.userIdenticon': 'Impressão digital do usuário',

    'chat.showMoreBtn': 'Mostrar mais',
    'chat.showLessBtn': 'Mostrar menos',

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
    'emoji-picker.recents': 'Recentes',
    'emoji-picker.recents.none': 'Você ainda não selecionou nenhum emoji.',
    'emoji-picker.search': 'Procurar emojis',
    'emoji-picker.search.error': 'Falha ao procurar emojis',
    'emoji-picker.search.notFound': 'Nenhum resultado encontrado',
    'emoji-picker.search.clear': 'Limpar pesquisa',
    'emoji-picker.error.load': 'Falha ao carregar emojis',
    'emoji-picker.error.retry': 'Tentar novamente',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Buscar GIF',
    'gif-picker.retry': 'Erro ao carregar os GIFs. <a>Tente novamente</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Try again"

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
     * JWT login dialog
     */
    'jwt-modal.title': 'Consentimento',

    'jwt-modal.header': 'Para começar a conversar você deve aceitar os <a1>Termos de Serviço</a1> e a <a2>Política de Privacidade</a2> de Now4real (o serviço de chat)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Aceitar',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Discordar',
    'jwt-modal.agreeRadio': 'Concordar',
    'jwt-modal.continueBtn': 'Continuar',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Silenciar Usuário',

    'mute-modal.header': 'Usuário $U foi silenciado até $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'Usuário $U foi silenciado',

    'mute-modal.body.set': 'Silenciar usuário $U por:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Atualizar período de silêncio:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Se silenciado, o usuário não poderá publicar outras mensagens. Você pode retirar o silêncio quando quiser.',

    'mute-modal.body.deleteAlert': 'Você está retirando o silêncio do usuário',

    'mute-modal.button': 'Confirmar',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Ocultar Mensagens',
    'hide-modal.showTitle': 'Mostrar Mensagens',

    'hide-modal.hideHeader': 'Ocultar todas as mensagens publicadas por $U (eles não saberão que você o silenciou).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Mostrar novamente as mensagens publicadas por $U.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Você pode mostrá-las novamente quando quiser.',

    'hide-modal.button': 'Confirmar',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Confirmar',
    'confirmation-modal.ok': 'Sim',
    'confirmation-modal.cancel': 'Não',

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
     * Create poll dialog
     */
    'create-poll-modal.title': 'Criar enquete',

    'create-poll-modal.questionPlaceholder': 'Pergunta',
    'create-poll-modal.optionPlaceholder': 'Opção',
    
    'create-poll-modal.multipleChoice': 'Escolha múltipla',
    
    'create-poll-modal.addOptionButton': 'Adicionar opção...',
    'create-poll-modal.deleteOptionButton': 'Excluir',
    'create-poll-modal.createButton': 'Criar',
    
    /**
     * Poll dialog
     */
    'poll-modal.title': 'Enquete',
    'poll-modal.titleClosed': 'Enquete fechada',
    
    'poll-modal.vote': 'voto',
    'poll-modal.votes': 'votos',
    'poll-modal.finalResults': 'Resultados finais',
    'poll-modal.signinToVote': '<a>Entrar</a> para votar',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Votar',
    'poll-modal.revokeVoteButton': 'Revogar voto',
    'poll-modal.viewVotesButton': 'Resultados',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Tem certeza de que deseja limpar este chat?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Tem certeza de que deseja desativar este chat?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': 'Tem certeza de que deseja encerrar a enquete atual?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': 'Tem certeza de que deseja remover a enquete atual?',

    /**
     * Delete message confirm dialog
     */
    'delete-message-confirmation-modal.message': 'Tem certeza de que deseja excluir esta mensagem?'
}