/****************************************************************************************
 * MONGOLIAN
 ****************************************************************************************/
export default {
    'genericError': 'Уучлаарай! Алдаа гарлаа',
    'mutedError': 'Уучлаарай! Дууг хаасан байна',

    'connection-status.offline': 'Та оффлайн байна',

    /**
     * Time representation
     */
    'hourFormat': 24,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minute': 'минут',
    'timeUnit.minutes': 'минут',
    'timeUnit.hour': 'цаг',
    'timeUnit.hours': 'цаг',
    'timeUnit.day': 'өдөр',
    'timeUnit.days': 'өдрүүд',
    'timeUnit.week': 'долоо хоног',
    'timeUnit.weeks': 'долоо хоног',
    'timeUnit.month': 'сар',
    'timeUnit.months': 'сар',
    'timeUnit.year': 'жил',
    'timeUnit.years': 'жил',
    'timeUnit.forever': 'үүрд',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Google аккаунтаар нэвтрэх',
    'commons.signedWith.facebook': 'Facebook аккаунтаар нэвтрэх',
    'commons.signedWith.twitter': 'X аккаунтаар нэвтрэх',
    'commons.signedWith.linkedin': 'LinkedIn аккаунтаар нэвтрэх',
    'commons.signedWith.email': 'Мэйл хаягаар нэвтрэх',
    'commons.signedWith.jwt': 'Энэ сайтын бүртгэлээр нэвтрэх',
    'commons.signedWith.noRegistration': 'Энэ чатад нэвтэрсэн',

    'commons.close': 'Хаах', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'Хуудсыг үзэж буй хүмүүс',
    'monitor.siteViewersTitle': 'Сайтыг үзэж буй хүмүүс',
    'monitor.chatBalloon': 'ЧАТ', // keep upper case, if applicable
    'monitor.presenceBalloon': 'Холбогдсон хүмүүс',

    /**
     * Menu
     */
    'status-header.options': 'Сонголтууд',
    'status-header.flushChat': 'Энэ чатыг цэвэрлэ',
    'status-header.disableChat': 'Энэ чатыг хаах',
    'status-header.enableChat': 'Энэ чатыг идэвхжүүлэх',
    'status-header.createPoll': 'Судалгаа үүсгэх',
    'status-header.terminatePoll': 'Судалгааг дуусгах',
    'status-header.removePoll': 'Судалгааг устгах',
    'status-header.help': 'Тусламж',
    'status-header.issue': 'Алдааг мэдээлэх',
    'status-header.terms': 'Үйлчилгээний нөхцөл',
    'status-header.privacy': 'Нууцлалын бодлого',
    'status-header.signout': 'Гарах',
    'status-header.signin': 'Орох',
    'status-header.editUserProfile': 'Профайл засварлах',

    'status-header.notRememberedLogin': 'Нэвтрэх хандалт хадгалагдахгүй',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'Дэлгэцийн нэр болон зургийг солихын тулд <a>Профайл засварлах</a> дээр дарна уу',
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"   

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'ЧАТ', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Хуудасны зочидтой хийх рийл-тайм чаат',
    'tab.chatTitleSite': 'Сайтын зочидтой хийх рийл-тайм чаат',

    'tab.rankingTabLabel': 'ХУУДСУУД', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Үзэж буй хуудсууд',

    'tab.heatmapTabLabel': 'ГАЗРЫН ЗУРАГ', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Хаанаас зочилсон',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'ХУУДАС', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'САЙТ', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'Дата байхгүй',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'Онлайн байгаа зочид',
    'ranking.activeTitle': 'Чаатад буй хүмүүс',
    'ranking.foregroundSwitchLabel': 'УНШИГЧИД', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'БУУ ХАЛАГЧИД', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'Дата байхгүй',
    'ranking.currentPage': 'Одоогийн хуудас',

    'ranking.note': 'Топ 10 хуудсыг харуулж байна',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ бусад $N зочидтой одоо чатлах',
    'chat.attentionGrabber2': '⚡ бусад зочидтой одоо чатлах',
    // $N is a number
    // example: "⚡ Chat with the other 2 visitors now"

    'chat.welcomeMessage': 'Бодит цаг хугацаанд бусад зочидтой чатлах. Мессежүүд олон нийтэд нээлттэй байх бөгөөд $N $A дараа алга болно.',
    'chat.welcomeMessageJWT': 'Бодит цаг хугацаанд бусад зочидтой чатлах. Мессежүүд нь олон нийтэд нээлттэй байж болох бөгөөд $N $A дараа алга болно.',
    // $N is a number and $A in a time unit taken from timeUnit.
    // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."

    'chat.messageDeleted.byYou': 'Та энэ зурвасыг устгасан',
    'chat.messageDeleted.byAuthor': 'Автор зурвасыг устгасан',
    'chat.messageDeleted.byModerator': 'Модератор зурвасыг устгасан',
    'chat.messageDeleted.byAdmin': 'Админ зурвасыг устгасан',
    'chat.messageDeleted.byNow4real': 'Админ зурвасыг устгасан',
    'chat.messageDeleted.unknown': 'Зурвас устсан',

    'chat.messageHidden.byYou': 'Чамаас нуусан',

    'chat.placeholder': 'Зурвас бичих',
    'chat.postBtn': 'Постлох', // means "publish this message"

    'chat.tooFrequentError': 'Хэт хурдан бичиж байна...\nЧаатыг дүүргэж болохгүй',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Уучлаарай... Зурвас тохиромжгүй хэллэгтэй байна',
    'chat.abortedError': 'Энэ браузераас Нэвтрэхийг хориглосон эсвэл cookie-г идэвхгүй болгосон байна',
    'chat.notPersistentError': 'Нууцлалыг хадгалах үүднээс таних явцыг сануулахгүй. Байдлыг давтахгүйн тул браузер дээрээ Now4real-ийн cookie-г идэвхжүүлнэ үү.',
    'chat.disabledError': 'Энэ чаатыг идэвхгүй болгосон',

    'chat.disabledByAdmin': 'Энэ чатыг Админ идэвхгүй болгосон',
    'chat.disabledByModerator': 'Энэ чатыг Модератор хүчингүй болгосон',
    'chat.signinRequired': 'Чаатад <a>Холбогдох</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'View-only горим',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Хариулах', // means "reply to this message"
    'chat.deleteBtn': 'Устгах', // means "delete this message"
    'chat.muteBtn': 'Блоклох', // means "mute this user"
    'chat.reportBtn': 'мэдээлэх', // means "report this message"
    'chat.hideBtn': 'Нуух', // means "hide this message"
    'chat.showBtn': 'Үзүүлэх', // means "show this message"

    'chat.userIdenticon': 'Хэрэглэгчийн хурууны хээ',

    /**
     * Presence
     */
    'presence.all.a': 'Хуудсанд 1 хүн байна (сайтад $N хүн байна)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': 'Хуудсанд $N хүн байна (сайтад $M хүн байна)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': 'Хуудсанд 1 хүн байна',
    'presence.page.b': 'Хуудсанд $N хүн байна',

    'presence.site.a': 'Сайтад 1 хүн байна',
    'presence.site.b': 'Сайтад $N хүн байна',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.recents': 'Сүүлийн үеийн',
    'emoji-picker.recents.none': 'Та хараахан эможи сонгоогүй байна.',
    'emoji-picker.search': 'Эможи хайх',
    'emoji-picker.search.error': 'Эможи хайж чадсангүй',
    'emoji-picker.search.notFound': 'Үр дүн олдсонгүй',
    'emoji-picker.search.clear': 'Хайлтыг арилгах',
    'emoji-picker.error.load': 'Эможи ачаалж чадсангүй',
    'emoji-picker.error.retry': 'Дахин оролд',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'GIF хайх',

    /**
     * Typing
     */
    'typing.a': '1 хүн бичиж байна...',

    'typing.b': '$N хүн бичиж байна...',
    // example: "5 people are typing..."

    'typing.c': '$A бичиж байна...',
    // example: "Alex is typing..."

    'typing.d': '$A, $B нар бичиж байна...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B, $C нар бичиж байна...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A болон өөр 1 хүн бичиж байна...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A болон өөр $N хүн бичиж байна...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B, өөр 1 хүн бичиж байна...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B, өөр $N хүн бичиж байна...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C, өөр 1 хүн бичиж байна...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C, өөр $N хүн бичиж байна...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Зөвшөөрөл',

    'jwt-modal.header': 'Чаатыг ашиглахын тулд Та Now4real-ийн <a1>Үйлчилгээний нөхцөл</a1> ба <a2>БНууцлалын бодлогыг</a2> зөвшөөрөх ёстой',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Зөвшөөрөх',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Санал нийлэхгүй байна',
    'jwt-modal.agreeRadio': 'Зөвшөөрөх',
    'jwt-modal.continueBtn': 'Үргэлжлүүлэх',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Хэрэглэгчийг блоклох',

    'mute-modal.header': 'Хэрэглэгчийн мэссэж бичих эрх $U $E хүртэл хаагдсан',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'Хэрэглэгч $U-г хаасан',

    'mute-modal.body.set': 'Хэрэглэгч $U-г блоклох хугацаа:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Блоклох хугацааг шинэчлэх:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'Хэрэглэгчийг хүссэн үедээ блокоос гаргаж болно.',
    'mute-modal.body.deleteInfo': 'Дууг хаасан тохиолдолд хэрэглэгч бусад мессежийг нийтлэх боломжгүй болно. Та хүссэн үедээ хэрэглэгчийн дууг асааж болно.',

    'mute-modal.body.deleteAlert': 'Та хэрэглэгчийг блокоос гаргалаа',

    'mute-modal.button': 'Баталгаажуулах',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Зурвасуудыг нуух',
    'hide-modal.showTitle': 'Зурвасуудыг харуулах',

    'hide-modal.hideHeader': '$U-ийн нийтэлсэн бүх мессежийг нуух (тэд таны дууг хаасаныг мэдэхгүй байх болно).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': '$U-н нийтэлсэн мессежүүдийг дахин харуул.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'Та хүссэн үедээ дахин харуулах боломжтой.',

    'hide-modal.button': 'Баталгаажуулах',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Баталгаажуулах',
    'confirmation-modal.ok': 'Тийм',
    'confirmation-modal.cancel': 'Үгүй',

    /**
     * Report dialog
     */
    'report-modal.title': 'Мессежийг мэдээлэх',

    'report-modal.header': 'Та яагаад энэ мессежийг мэдээлж байна вэ?',
    'report-modal.note': 'Хэрэв хэн нэгэн яаралтай аюулд орсон бол орон нутгийн түргэн тусламж дуудах - хүлээх хэрэггүй',

    'report-modal.hateSpeech': 'Үзэн ядсан үг хэллэг эсвэл дээрэлхэх',
    'report-modal.violence': 'Терроризм эсвэл хүчирхийлэл',
    'report-modal.pornography': 'Бэлгийн харьцаанд тохиромжгүй',
    'report-modal.spam': 'Спам, луйвар эсвэл залилан',
    'report-modal.selfInjury': 'Амиа хорлох эсвэл өөрийгөө гэмтээх',
    'report-modal.copyright': 'Оюуны өмчийн зөрчил',
    'report-modal.other': 'Бусад',

    'report-modal.commentPlaceholder': 'Сэтгэгдэл',
    'report-modal.button': 'мэдээлэх',

    'report-modal.reportOk': 'Мэдээлэл өгсөнд баярлалаа!',
    'report-modal.alreadyReportedError': 'Та мессежийг аль хэдийн мэдэгдсэн байна',

    /**
     * Create poll dialog
     */
    'create-poll-modal.title': 'Судалгаа үүсгэх',

    'create-poll-modal.questionPlaceholder': 'Асуулт',
    'create-poll-modal.optionPlaceholder': 'Сонголт',

    'create-poll-modal.multipleChoice': 'Олон сонголттой',

    'create-poll-modal.addOptionButton': 'Сонголт нэмэх...',
    'create-poll-modal.deleteOptionButton': 'Устгах',
    'create-poll-modal.createButton': 'Үүсгэх',

    /**
     * Poll dialog
     */
    'poll-modal.title': 'Судалгаа',
    'poll-modal.titleClosed': 'Судалгаа хаагдсан',

    'poll-modal.vote': 'сонголт',
    'poll-modal.votes': 'сонголтууд',
    'poll-modal.finalResults': 'Төгсгөлд хийгдсэн үр дүн',
    'poll-modal.signinToVote': 'Сонголт явуулахын тулд <a>нэвтрэх</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Сонгох',
    'poll-modal.revokeVoteButton': 'Сонголтыг буцаах',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Энэ чатыг цэвэрлэх үү?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Энэ чатыг хүчингүй болгох уу?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': 'Та одоогийн судалгааг дуусгахдаа итгэлтэй байна уу?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': 'Та одоогийн судалгааг устгахдаа итгэлтэй байна уу?'
}