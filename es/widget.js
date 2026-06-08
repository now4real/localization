/****************************************************************************************
 * SPANISH (Castilian)
 ****************************************************************************************/
export default {
    'genericError': '¡UPS! Algo ha fallado',
    'mutedError': '¡UPS! Parece que te han silenciado',

    'connection-status.offline': 'Estás desconectado/a',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minute': 'minuto',
    'timeUnit.minutes': 'minutos',
    'timeUnit.hour': 'hora',
    'timeUnit.hours': 'horas',
    'timeUnit.day': 'día',
    'timeUnit.days': 'días',
    'timeUnit.week': 'semana',
    'timeUnit.weeks': 'semanas',
    'timeUnit.month': 'mes',
    'timeUnit.months': 'meses',
    'timeUnit.year': 'año',
    'timeUnit.years': 'años',
    'timeUnit.forever': 'para siempre',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Registrado a través de Google',
    'commons.signedWith.facebook': 'Registrado a través de Facebook',
    'commons.signedWith.twitter': 'Registrado a través de X',
    'commons.signedWith.linkedin': 'Registrado a través de LinkedIn',
    'commons.signedWith.email': 'Registrado a través de email',
    'commons.signedWith.jwt': 'Registrado en este sitio',
    'commons.signedWith.noRegistration': 'Conectado en este chat',

    'commons.close': 'Cerrar', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Personas viendo esta página',
    'monitor.siteViewersTitle': 'Personas viendo este sitio',
    'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Personas presentes ahora',

    /**
     * Menu
     */
    'status-header.options': 'Opciones',
    'status-header.flushChat': 'Vaciar este chat',
    'status-header.disableChat': 'Desactivar este chat',
    'status-header.enableChat': 'Activar este chat',
    'status-header.createPoll': 'Crear encuesta',
    'status-header.terminatePoll': 'Finalizar encuesta',
    'status-header.removePoll': 'Eliminar encuesta',
    'status-header.help': 'Ayuda',
    'status-header.issue': 'Informa de un Problema',
    'status-header.terms': 'Términos del Servicio',
    'status-header.privacy': 'Política de Privacidad',
    'status-header.signout': 'Cerrar Sesión',
    'status-header.signin': 'Iniciar sesión',
    'status-header.editUserProfile': 'Editar perfil',
    'status-header.sounds': 'Sonidos',
    'status-header.soundsNote': 'Las notificaciones sonoras permanecen activas unos minutos después de que la pestaña pase a segundo plano',

    'status-header.notRememberedLogin': 'Sin recordar',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'Para cambiar tu nombre visible y foto, <a>edita tu perfil</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Habla aquí con otras personas que están ahora en esta página',
    'tab.chatTitleSite': 'Habla aquí con otras personas que están ahora en este sitio',

    'tab.rankingTabLabel': 'PÁGINAS', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Dónde está la gente ahora en este sitio',

    'tab.heatmapTabLabel': 'MAPA', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Dónde está la gente en el mundo real',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'PÁGINA', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'SITIO', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Sin datos',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Personas en este sitio',
    'ranking.activeTitle': 'Personas hablando en este sitio',
    'ranking.foregroundSwitchLabel': 'VISITANTES', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'EN EL CHAT', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Sin datos',
    'ranking.currentPage': 'Página actual',

    'ranking.note': 'Mostrando las diez primeras páginas',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ ¡Chatea con los $N otros visitantes en línea ahora!',
    'chat.attentionGrabber2': '⚡ ¡Chatea con los demás visitantes en línea ahora!',
    // $N is a number
    // example: "⚡ Chat with the 2 other visitors online now!"

    'chat.welcomeMessage': 'Chatea con otros visitantes en tiempo real. Los mensajes son públicos y desaparecen después de $N $A. Sé amable y diviértete!',
    'chat.welcomeMessageJWT': 'Chatea con otros visitantes en tiempo real. Los mensajes pueden ser públicos y desaparecen después de $N $A. Sé amable y diviértete!',
    // $N is a number and $A in a time unit taken from timeUnit
    // example: "Chat with other visitors in real time. Messages are public and vanish after 20 minutes. Be kind and have fun!"

    'chat.welcomeMessageNoExpiration': 'Chatea con otros visitantes en tiempo real. Los mensajes son públicos. Sé amable y diviértete!',
    'chat.welcomeMessageNoExpirationJWT': 'Chatea con otros visitantes en tiempo real. Los mensajes pueden ser públicos. Sé amable y diviértete!',

    'chat.messageDeleted.byYou': 'Has eliminado este mensaje',
    'chat.messageDeleted.byAuthor': 'Mensaje eliminado por el autor',
    'chat.messageDeleted.byModerator': 'Mensaje eliminado por un moderador',
    'chat.messageDeleted.byAdmin': 'Mensaje eliminado por el administrador',
    'chat.messageDeleted.byNow4real': 'Mensaje eliminado por el administrador',
    'chat.messageDeleted.byAI': 'Mensaje eliminado por la IA tras la denuncia',
    'chat.messageDeleted.unknown': 'Mensaje eliminado',

    'chat.messageEdited': 'Editado',

    'chat.messageHidden.byYou': 'Oculto por ti',

    'chat.placeholder': 'Escribe un mensaje',
    'chat.postBtn': 'Publicar', // means "publish this message"

    'chat.tooFrequentError': 'Vas un poco rápido...\nPor favor, no llenes el chat',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Lo sentimos, tu mensaje parece inapropiado. <a>Más información</a>',
    'chat.abortedError': 'Inicio de sesión cancelado o cookies desactivadas en este navegador',
    'chat.notPersistentError': 'La autenticación no será recordada debido a tu configuración de privacidad restringida. Por favor, habilita las cookies para Now4real en tu navegador para evitar que esto suceda.',
    'chat.disabledError': 'Este chat ha sido desactivado',
    'chat.chatbotError': 'Se ha producido un error con el chatbot del sitio. Por favor, inténtalo de nuevo.',
    'chat.loadMoreError': 'No se pueden cargar mensajes anteriores',
    'chat.editNotAuthorizedError': 'Este mensaje no se puede editar',
    'chat.deleteNotAuthorizedError': 'Este mensaje no se puede eliminar',

    'chat.copiedInfo': 'Mensaje copiado',

    'chat.disabledByAdmin': 'Este chat ha sido desactivado por el administrador',
    'chat.disabledByModerator': 'Este chat ha sido desactivado por un moderador',
    'chat.signinRequired': '<a>Inicia sesión</a> para hablar',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Solo lectura',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Responder', // means "reply to this message"
    'chat.copyBtn': 'Copiar', // means "copy this message"
    'chat.deleteBtn': 'Eliminar', // means "delete this message"
    'chat.muteBtn': 'Silenciar', // means "mute this user"
    'chat.reportBtn': 'Denunciar', // means "report this message"
    'chat.hideBtn': 'Ocultar', // means "hide this message"
    'chat.showBtn': 'Mostrar', // means "show this message"
    'chat.editBtn': 'Editar', // means "edit this message"

    'chat.userIdenticon': 'Identificador del usuario',
    
    'chat.showMoreBtn': 'Mostrar más',
    'chat.showLessBtn': 'Mostrar menos',

    'chat.reactionPickerBtn': 'Elige una reacción',
    'chat.reactionsTitle': 'Reacciones',
    'chat.reactionsAll': 'Todas',
    'chat.reactionsRemoveHint': 'Quita tu reacción',
    'chat.youLabel': 'Tú',

    /**
     * Presence
     */
    'presence.all.a': '1 persona en esta página (de $N en este sitio)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N personas en esta página (de $M en este sitio)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 persona en esta página',
    'presence.page.b': '$N personas en esta página',

    'presence.site.a': '1 persona en este sitio',
    'presence.site.b': '$N personas en este sitio',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.recents': 'Recientes',
    'emoji-picker.recents.none': 'Aún no has seleccionado ningún emoji.',
    'emoji-picker.search': 'Buscar emojis',
    'emoji-picker.search.error': 'Error al buscar emojis',
    'emoji-picker.search.notFound': 'No se encontraron resultados',
    'emoji-picker.search.clear': 'Limpiar búsqueda',
    'emoji-picker.error.load': 'Error al cargar emojis',
    'emoji-picker.error.retry': 'Intentar de nuevo',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Buscar KLIPY',
    'gif-picker.retry': 'Error al cargar los GIF. <a>Inténtalo de nuevo</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Try again"

    /**
     * Typing
     */
    'typing.a': 'Una persona está escribiendo...',

    'typing.b': '$N personas están escribiendo...',
    // example: "5 people are typing..."

    'typing.c': '$A está escribiendo...',
    // example: "Alex is typing..."

    'typing.d': '$A y $B están escribiendo...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B y $C están escribiendo...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A y otra persona están escribiendo...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A y otras $N personas están escribiendo...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B y otra persona están escribiendo...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B y otras $N personas están escribiendo...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C y otra persona están escribiendo...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C y otras $N personas están escribiendo...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Consentimiento',

    'jwt-modal.header': 'Para empezar a hablar debes aceptar los <a1>Términos del Servicio</a1> y la <a2>Política de Privacidad</a2> de Now4real (el servicio de chat)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Acepto',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Discrepar',
    'jwt-modal.agreeRadio': 'Aceptar',
    'jwt-modal.continueBtn': 'Continuar',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Silenciar usuario',

    'mute-modal.header': 'El usuario $U ha sido silenciado por $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'El usuario $U ha sido silenciado',

    'mute-modal.body.set': 'Silenciar al usuario $U durante:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Actualizar periodo de silencio:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Si está silenciado, el usuario no podrá publicar más mensajes. Puedes quitar el silencio cuando quieras.',

    'mute-modal.body.deleteAlert': 'Vas a quitar el silencio al usuario',

    'mute-modal.button': 'Confirmar',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Ocultar mensajes',
    'hide-modal.showTitle': 'Mostrar mensajes',

    'hide-modal.hideHeader': 'Ocultar todos los mensajes publicados por $U (no sabrá que los has ocultado).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Volver a mostrar los mensajes publicados por $U.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Puedes volver a mostrarlos cuando quieras.',

    'hide-modal.button': 'Confirmar',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Confirmar',
    'confirmation-modal.ok': 'Sí',
    'confirmation-modal.cancel': 'No',

    /**
     * Report dialog
     */
    'report-modal.title': 'Denunciar Mensaje',

    'report-modal.header': '¿Por qué quieres denunciar este mensaje?',
    'report-modal.note': 'Si alguien está en peligro inmediato, llame a los servicios de emergencia locales - no espere',

    'report-modal.hateSpeech': 'Discurso de odio o bullying',
    'report-modal.violence': 'Terrorismo o violencia',
    'report-modal.pornography': 'Sexualmente inapropiado',
    'report-modal.spam': 'Spam, estafas o fraude',
    'report-modal.selfInjury': 'Suicidio o autolesión',
    'report-modal.copyright': 'Infracción de la propiedad intelectual',
    'report-modal.other': 'Otro',

    'report-modal.commentPlaceholder': 'Comentario',
    'report-modal.button': 'Denunciar',

    'report-modal.reportOk': '¡Gracias por la denuncia!',
    'report-modal.alreadyReportedError': 'Ya has denunciado el mensaje',

    /**
     * Create poll dialog
     */
    'create-poll-modal.title': 'Crear encuesta',

    'create-poll-modal.questionPlaceholder': 'Pregunta',
    'create-poll-modal.optionPlaceholder': 'Opción',

    'create-poll-modal.multipleChoice': 'Selección múltiple',

    'create-poll-modal.addOptionButton': 'Agregar opción...',
    'create-poll-modal.deleteOptionButton': 'Eliminar',
    'create-poll-modal.createButton': 'Crear',

    /**
     * Poll dialog
     */
    'poll-modal.title': 'Encuesta',
    'poll-modal.titleClosed': 'Encuesta cerrada',

    'poll-modal.vote': 'voto',
    'poll-modal.votes': 'votos',
    'poll-modal.finalResults': 'Resultados finales',
    'poll-modal.signinToVote': '<a>Inicie sesión</a> para votar',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Votar',
    'poll-modal.revokeVoteButton': 'Revocar voto',
    'poll-modal.viewVotesButton': 'Resultados',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': '¿Seguro que quieres vaciar este chat?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': '¿Seguro que quieres desactivar este chat?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': '¿Está seguro de que desea finalizar la encuesta actual?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': '¿Está seguro de que desea eliminar la encuesta actual?',

    /**
     * Delete message confirm dialog
     */
    'delete-message-confirmation-modal.message': '¿Seguro que quieres eliminar este mensaje?'
}