/****************************************************************************************
 * POLISH (Standard)
 ****************************************************************************************/
export default {
    'genericError': 'Oops! Coś poszło nie tak',
    'mutedError': 'Oops! Wygląda na to, że zostałeś wyciszony',

    'connection-status.offline': 'Jesteś offline',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minute': 'minuta',
    'timeUnit.minutes': 'minuty',
    'timeUnit.hour': 'godzina',
    'timeUnit.hours': 'godziny',
    'timeUnit.day': 'dzień',
    'timeUnit.days': 'dni',
    'timeUnit.week': 'tydzień',
    'timeUnit.weeks': 'tygodnie',
    'timeUnit.month': 'miesiąc',
    'timeUnit.months': 'miesiące',
    'timeUnit.year': 'rok',
    'timeUnit.years': 'lata',
    'timeUnit.forever': 'na zawsze',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Zaloguj się: Google',
    'commons.signedWith.facebook': 'Zaloguj się: Facebook',
    'commons.signedWith.twitter': 'Zaloguj się: X',
    'commons.signedWith.linkedin': 'Zaloguj się: LinkedIn',
    'commons.signedWith.email': 'Zaloguj się przez email',
    'commons.signedWith.jwt': 'Zalogowany na tej stronie',
    'commons.signedWith.noRegistration': 'Zalogowano do czatu',

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
    'status-header.createPoll': 'Utwórz ankietę',
    'status-header.terminatePoll': 'Zakończ ankietę',
    'status-header.removePoll': 'Usuń ankietę',
    'status-header.help': 'Pomoc',
    'status-header.issue': 'Zgłoś błąd',
    'status-header.terms': 'Regulamin',
    'status-header.privacy': 'Polityka Prywatności',
    'status-header.signout': 'Wyloguj się',
    'status-header.signin': 'Zaloguj się',
    'status-header.editUserProfile': 'Edytuj profil',

    'status-header.notRememberedLogin': 'Nie zapamiętany',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'Aby zmienić swoją nazwę wyświetlaną i zdjęcie, <a>edytuj swój profil</a>',
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
    'chat.attentionGrabber1': '⚡ Czat z $N innymi odwiedzającymi online teraz!',
    'chat.attentionGrabber2': '⚡ Czat z innymi odwiedzającymi online teraz!',
    // $N is a number
    // example: "⚡ Chat with the 2 other visitors online now!"

    'chat.welcomeMessage': 'Czat z innymi gośćmi w czasie rzeczywistym. Wiadomości są publiczne i znikają po $N $A. Bądź miły i baw się dobrze!',
    'chat.welcomeMessageJWT': 'Czat z innymi gośćmi w czasie rzeczywistym. Wiadomości mogą być publiczne i znikną po $N $A. Bądź miły i baw się dobrze!',
    // $N is a number and $A in a time unit taken from timeUnit
    // example: "Chat with other visitors in real time. Messages are public and vanish after 20 minutes. Be kind and have fun!"

    'chat.messageDeleted.byYou': 'Usunąłeś wiadomość',
    'chat.messageDeleted.byAuthor': 'Wiadomość usunięta przez autora',
    'chat.messageDeleted.byModerator': 'Wiadomość usunięta przez moderatora',
    'chat.messageDeleted.byAdmin': 'Wiadomość usunięta przez administratora',
    'chat.messageDeleted.byNow4real': 'Wiadomość usunięta przez administratora',
    'chat.messageDeleted.unknown': 'Wiadomość usunięta',

    'chat.messageHidden.byYou': 'Ukryty przez Ciebie',

    'chat.placeholder': 'Wpisz wiadomość',
    'chat.postBtn': 'Wyślij', // means "publish this message"

    'chat.tooFrequentError': 'Jesteś trochę za szybki...\nProsimy nie zalewać czatu',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Przepraszamy... Ta wiadomość wydaje się nieodpowiednia',
    'chat.abortedError': 'Nie można się zalogować lub ciasteczka są wyłączone w Twojej przeglądarce',
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
    'chat.reportBtn': 'Zgłoś', // means "report this message"
    'chat.hideBtn': 'Ukryj', // means "hide this message"
    'chat.showBtn': 'Pokaż', // means "show this message"

    'chat.userIdenticon': 'Odcisk użytkownika',

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
    'emoji-picker.recents': 'Ostatnie',
    'emoji-picker.recents.none': 'Jeszcze nie wybrałeś żadnych emotikonów.',
    'emoji-picker.search': 'Szukaj emotikonów',
    'emoji-picker.search.error': 'Nie udało się wyszukać emotikonów',
    'emoji-picker.search.notFound': 'Nie znaleziono wyników',
    'emoji-picker.search.clear': 'Wyczyść wyszukiwanie',
    'emoji-picker.error.load': 'Nie udało się załadować emotikonów',
    'emoji-picker.error.retry': 'Spróbuj ponownie',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Wyszukaj GIF',
    'gif-picker.retry': 'Błąd ładowania GIF-ów. <a>Spróbuj ponownie</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Try again"

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
    'mute-modal.body.deleteInfo': 'Jeśli wyciszony, użytkownik nie będzie mógł publikować innych wiadomości. Możesz wyłączyć wyciszenie użytkownika, kiedy tylko chcesz.',

    'mute-modal.body.deleteAlert': 'Uwalniasz użytkownika',

    'mute-modal.button': 'Potwierdź',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Ukryj wiadomości',
    'hide-modal.showTitle': 'Pokaż wiadomości',

    'hide-modal.hideHeader': 'Ukryj wszystkie wiadomości wysłane przez $U (nie będą wiedzieć, że je wyciszyłeś).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Pokaż ponownie wiadomości wysłane przez $U.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Możesz je ponownie pokazać, kiedy tylko chcesz.',

    'hide-modal.button': 'Potwierdź',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Potwierdź',
    'confirmation-modal.ok': 'Tak',
    'confirmation-modal.cancel': 'Nie',

    /**
     * Report dialog
     */
    'report-modal.title': 'Zgłoś wiadomość',

    'report-modal.header': 'Dlaczego zgłaszasz tę wiadomość?',
    'report-modal.note': 'Jeśli komuś grozi bezpośrednie niebezpieczeństwo, zadzwoń do lokalnych służb ratunkowych - nie czekaj',

    'report-modal.hateSpeech': 'Mowa nienawiści lub zastraszanie',
    'report-modal.violence': 'Terroryzm lub przemoc',
    'report-modal.pornography': 'Nieodpowiednie seksualnie',
    'report-modal.spam': 'Spam, oszustwo lub wyłudzenie',
    'report-modal.selfInjury': 'Samobójstwo lub samookaleczenie',
    'report-modal.copyright': 'Naruszenie własności intelektualnej',
    'report-modal.other': 'Inny',

    'report-modal.commentPlaceholder': 'Komentarz',
    'report-modal.button': 'Zgłoś',

    'report-modal.reportOk': 'Dzięki za zgłoszenie!',
    'report-modal.alreadyReportedError': 'Już zgłosiłeś tę wiadomość',

    /**
     * Create poll dialog
     */
    'create-poll-modal.title': 'Utwórz ankietę',

    'create-poll-modal.questionPlaceholder': 'Pytanie',
    'create-poll-modal.optionPlaceholder': 'Opcja',

    'create-poll-modal.multipleChoice': 'Wybór wielokrotny',

    'create-poll-modal.addOptionButton': 'Dodaj opcję...',
    'create-poll-modal.deleteOptionButton': 'Usuń',
    'create-poll-modal.createButton': 'Utwórz',

    /**
     * Poll dialog
     */
    'poll-modal.title': 'Ankieta',
    'poll-modal.titleClosed': 'Ankieta zamknięta',

    'poll-modal.vote': 'głos',
    'poll-modal.votes': 'głosy',
    'poll-modal.finalResults': 'Wyniki końcowe',
    'poll-modal.signinToVote': '<a>Zaloguj się</a>, aby zagłosować',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Głosuj',
    'poll-modal.revokeVoteButton': 'Wycofaj głos',
    'poll-modal.viewVotesButton': 'Wyniki',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Czy na pewno chcesz wyczyścić ten czat?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Czy na pewno chcesz wyłączyć ten czat?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': 'Czy na pewno chcesz zakończyć bieżącą ankietę?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': 'Czy na pewno chcesz usunąć bieżącą ankietę?'
}