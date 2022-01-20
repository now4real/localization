/****************************************************************************************
 * SPANISH (Castilian)
 ****************************************************************************************/
export default {
    'genericError': '¡UPS! Algo ha fallado',

    'connection-status.offline': 'Estás desconectado/a',

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
    'timeUnit.years': 'años',
    'timeUnit.forever': 'forever', // TODO

    /**
     * Commons
     */
    'commons.signedWith.google': 'Registrado a través de Google',
    'commons.signedWith.facebook': 'Registrado a través de Facebook',
    'commons.signedWith.twitter': 'Registrado a través de Twitter',
    'commons.signedWith.linkedin': 'Registrado a través de LinkedIn',
    'commons.signedWith.email': 'Registrado a través de email',
    'commons.signedWith.jwt': 'Registrado en este sitio',

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
    'status-header.flushChat': 'Flush this chat', // TODO
    'status-header.disableChat': 'Disable this chat', // TODO
    'status-header.enableChat': 'Enable this chat', // TODO
    'status-header.help': 'Ayuda',
    'status-header.issue': 'Informa de un Problema',
    'status-header.terms': 'Términos del Servicio',
    'status-header.privacy': 'Política de Privacidad',
    'status-header.signout': 'Cerrar Sesión',
    'status-header.signin': 'Sign in', // TODO
    'status-header.editUserProfile': 'Edit profile', // TODO

    'status-header.notRememberedLogin': 'Sin recordar',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'To change your display name and picture, <a>edit your profile</a>', // TODO
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
    'chat.welcomeMessage': 'Habla aquí con otras visitantes en tiempo real. Los mensajes son públicos y desaparecen después de $N $A.',
    'chat.welcomeMessageJWT': 'Habla aquí con otras personas en tiempo real. Los mensajes pueden ser públicos y desaparecer después de $N $A.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'You deleted this message', // TODO
    'chat.messageDeleted.byAuthor': 'Message deleted by the author', // TODO
    'chat.messageDeleted.byModerator': 'Message deleted by a moderator', // TODO
    'chat.messageDeleted.byAdmin': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.byNow4real': 'Message deleted by the admin', // TODO
    'chat.messageDeleted.unknown': 'Message deleted', // TODO

    'chat.placeholder': 'Escribe un mensaje',
    'chat.postBtn': 'Publicar', // means "publish this message"

    'chat.tooFrequentError': 'Vas un poco rápido...\nPor favor, no llenes el chat',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Lo siento... Este mensaje parece inapropiado',
    'chat.abortedError': 'Inicio de sesión cancelado o cookies desactivadas en este navegador',
    'chat.mutedError': '¡UPS! Parece que te han silenciado',
    'chat.notPersistentError': 'La autenticación no será recordada debido a tu configuración de privacidad restringida. Por favor, habilita las cookies para Now4real en tu navegador para evitar que esto suceda.',
    'chat.disabledError': 'This chat has been disabled', // TODO

    'chat.disabledByAdmin': 'This chat has been disabled by the admin', // TODO
    'chat.disabledByModerator': 'This chat has been disabled by a moderator', // TODO
    'chat.signinRequired': '<a>Inicia sesión</a> para hablar',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Solo lectura',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Responder', // means "reply to this message"
    'chat.deleteBtn': 'Eliminar', // means "delete this message"
    'chat.muteBtn': 'Mute', // means "mute this user" // TODO

    'chat.userIdenticon': 'User fingerprint', // TODO

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
    'emoji-picker.people': 'Personas',
    'emoji-picker.nature': 'Naturaleza',
    'emoji-picker.food': 'Comida',
    'emoji-picker.activity': 'Actividad',
    'emoji-picker.travel': 'Lugares',
    'emoji-picker.objects': 'Objetos',
    'emoji-picker.symbols': 'Símbolos',
    'emoji-picker.flags': 'Banderas',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Search GIF', // TODO

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
     * Social login dialog
     */
    'social-modal.title': 'Iniciar sesión',
    'social-modal.header': 'Empieza a hablar en cualquier página web que use Now4real',

    // buttons:
    'social-modal.google': 'Inicia sesión con Google',
    'social-modal.facebook': 'Inicia sesión con Facebook',
    'social-modal.twitter': 'Inicia sesión con Twitter',
    'social-modal.linkedin': 'Inicia sesión con LinkedIn',
    'social-modal.email': 'Inicia sesión con email',

    'social-modal.footer': 'Haz click en “Iniciar sesión” arriba para aceptar los <a1>Términos del Servicio</a1> y la <a2>Política de Privacidad</a2> de Now4real',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Consentimiento',

    'jwt-modal.header': 'Para empezar a hablar debes aceptar los <a1>Términos del Servicio</a1> y la <a2>Política de Privacidad</a2> de Now4real (el servicio de chat)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.button': 'Acepto',

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
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?', // TODO

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?' // TODO
}