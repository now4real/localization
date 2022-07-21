/****************************************************************************************
 * POLISH (Standard)
 ****************************************************************************************/
export default {
    'genericError': 'Oops! Coś poszło nie tak',

    'connection-status.offline': 'Jesteś offline',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minutes': 'minutach',
    'timeUnit.hours': 'godzinach',
    'timeUnit.days': 'dniach',
    'timeUnit.weeks': 'tygodniach',
    'timeUnit.months': 'miesiące',
    'timeUnit.years': 'lat',
    'timeUnit.forever': 'na zawsze',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Zaloguj się: Google',
    'commons.signedWith.facebook': 'Zaloguj się: Facebook',
    'commons.signedWith.twitter': 'Zaloguj się: Twitter',
    'commons.signedWith.linkedin': 'Zaloguj się: LinkedIn',
    'commons.signedWith.email': 'Zaloguj się przez email',
    'commons.signedWith.jwt': 'Zalogowany na tej stronie',

    'commons.close': 'Zamknij', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Osoby przeglądające tę stronę',
    'monitor.siteViewersTitle': 'Osoby przeglądające tę witrynę',
    'monitor.chatBalloon': 'CZAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Osoby aktualnie obecne',

    /**
     * Menu
     */
    'status-header.options': 'Opcje',
    'status-header.flushChat': 'Wyczyść ten czat',
    'status-header.disableChat': 'Wyłącz ten czat',
    'status-header.enableChat': 'Włącz ten czat',
    'status-header.help': 'Pomoc',
    'status-header.issue': 'Zgłoś błąd',
    'status-header.terms': 'Regulamin',
    'status-header.privacy': 'Polityka Prywatności',
    'status-header.signout': 'Wyloguj się',
    'status-header.signin': 'Zaloguj się',
    'status-header.editUserProfile': 'Edit profile', // TODO

    'status-header.notRememberedLogin': 'Nie zapamiętany',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'To change your display name and picture, <a>edit your profile</a>', // TODO
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CZAT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Czat z innymi użytkownikami tej strony w czasie rzeczywistym',
    'tab.chatTitleSite': 'Czat z innymi użytkownikami tej witryny w czasie rzeczywistym',

    'tab.rankingTabLabel': 'STRONY', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Strony teraz przeglądane',

    'tab.heatmapTabLabel': 'MAPA', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Skąd są',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'STRONA', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'WITRYNA', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Brak danych',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Osoby na tej witrynie',
    'ranking.activeTitle': 'Osoby rozmawiające na tej witrynie',
    'ranking.foregroundSwitchLabel': 'PRZEGLĄDAJĄCY', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'ROZMAWIAJĄCY', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Brak danych',
    'ranking.currentPage': 'Bieżąca strona',

    'ranking.note': 'Dziesięć najlepszych stron',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ Czat teraz z innymi $N użytkownikami',
    'chat.attentionGrabber2': '⚡ Czat teraz z innymi użytkownikami',
    // $N is a number
    // example: "⚡ Chat with the other 2 visitors now"

    'chat.welcomeMessage': 'Czat z innymi użytkownikami w czasie rzeczywistym. Wiadomości są publiczne i znikają po $N $A.',
    'chat.welcomeMessageJWT': 'Czat z innymi użytkownikami w czasie rzeczywistym. Wiadomości mogą być publiczne i znikać po $N $A.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'Usunąłeś wiadomość',
    'chat.messageDeleted.byAuthor': 'Wiadomość usunięta przez autora',
    'chat.messageDeleted.byModerator': 'Wiadomość usunięta przez moderatora',
    'chat.messageDeleted.byAdmin': 'Wiadomość usunięta przez administratora',
    'chat.messageDeleted.byNow4real': 'Wiadomość usunięta przez administratora',
    'chat.messageDeleted.unknown': 'Wiadomość usunięta',

    'chat.placeholder': 'Wpisz wiadomość',
    'chat.postBtn': 'Wyślij', // means "publish this message"

    'chat.tooFrequentError': 'Jesteś trochę za szybki...\nProsimy nie zalewać czatu',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Przepraszamy... Ta wiadomość wydaje się nieodpowiednia',
    'chat.abortedError': 'Nie można się zalogować lub ciasteczka są wyłączone w Twojej przeglądarce',
    'chat.mutedError': 'Oops! Wygląda na to, że zostałeś wyciszony',
    'chat.notPersistentError': 'Uwierzytelnienie nie zostanie zapamiętane ze względu na Twoje ustawienia prywatności. Prosimy włączyć obsługę plików cookie w swojej przeglądarce, aby temu zapobiec.',
    'chat.disabledError': 'Ten czat został wyłączony',

    'chat.disabledByAdmin': 'Ten czat został wyłączony przez administratora',
    'chat.disabledByModerator': 'Ten czat został wyłączony przez moderatora',
    'chat.signinRequired': '<a>Zaloguj się</a> aby rozmawiać',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'Tryb podglądu',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Odpowiedz', // means "reply to this message"
    'chat.deleteBtn': 'Usuń', // means "delete this message"
    'chat.muteBtn': 'Wycisz', // means "mute this user"

    'chat.userIdenticon': 'User fingerprint', // TODO

    /**
     * Presence
     */
    'presence.all.a': '1 osoba na tej stronie (z $N na tej witrynie)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': 'Osób na tej stronie: $N (z $M na tej witrynie)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 osoba na tej stronie',
    'presence.page.b': 'Ilość osób na tej stronie: $N',

    'presence.site.a': '1 osoba na tej witrynie',
    'presence.site.b': 'Ilość osób na tej witrynie: $N',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.people': 'Ludzie',
    'emoji-picker.nature': 'Natura',
    'emoji-picker.food': 'Jedzenie',
    'emoji-picker.activity': 'Aktywność',
    'emoji-picker.travel': 'Miejsca',
    'emoji-picker.objects': 'Obiekty',
    'emoji-picker.symbols': 'Symbole',
    'emoji-picker.flags': 'Flagi',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Wyszukaj GIF',

    /**
     * Typing
     */
    'typing.a': '1 osoba pisze...',

    'typing.b': '$N osób pisze...',
    // example: "5 people are typing..."

    'typing.c': '$A pisze...',
    // example: "Alex is typing..."

    'typing.d': '$A i $B piszą...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B i $C piszą...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A i 1 inna osoba piszą...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A i $N innych piszą...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B i 1 inna osoba piszą...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B i $N innych pisze...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C i 1 inna osoba piszą...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C i $N innych pisze...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * Social login dialog
     */
    'social-modal.title': 'Zaloguj się',
    'social-modal.header': 'Rozpocznij lub dołącz do rozmowy',

    // buttons:
    'social-modal.google': 'Logowanie z Google',
    'social-modal.facebook': 'Logowanie z Facebook',
    'social-modal.twitter': 'Logowanie z Twitter',
    'social-modal.linkedin': 'Logowanie z LinkedIn',
    'social-modal.email': 'Zaloguj się adresem email',

    'social-modal.footer': 'Logując się akceptujesz <a1>Regulamin</a1> i <a2>Politykę Prywatności</a2>',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Zgoda',

    'jwt-modal.header': 'Aby zacząc rozmawiać zaakceptuj <a1>Regulamin</a1> i <a2>Politykę Prywatności</a2> Now4real (operatora czatu)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Akceptuję',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Nie zgadzać się',
    'jwt-modal.agreeRadio': 'Zgodzić się',
    'jwt-modal.continueBtn': 'Kontyntynuj',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Wycisz użytkownika',

    'mute-modal.header': 'Użytkownik $U został wyciszony do $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'Użytkownik $U został wyciszony',

    'mute-modal.body.set': 'Wycisz użytkownika $U na:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Aktualizacja okresu wyciszenia:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Możesz wyłączyć wyciszenie użytkownika, kiedy tylko chcesz.',

    'mute-modal.body.deleteAlert': 'Uwalniasz użytkownika',

    'mute-modal.button': 'Potwierdź',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Potwierdź',
    'confirmation-modal.ok': 'Tak',
    'confirmation-modal.cancel': 'Nie',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Czy na pewno chcesz wyczyścić ten czat?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Czy na pewno chcesz wyłączyć ten czat?'
}