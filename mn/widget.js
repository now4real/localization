/****************************************************************************************
 * Mongolian (Mongolia)
 ****************************************************************************************/
export default {
    'genericError': 'Уучлаарай! Алдаа гарлаа',
 
       'connection-status.offline': 'Та оффлайн байна',
 
       /**
        * Time representation
        */
       'hourFormat': 24,
       // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")
 
       'timeUnit.minutes': 'минут',
       'timeUnit.hours': 'цаг',
       'timeUnit.days': 'өдөр',
       'timeUnit.weeks': 'долоо хоног',
       'timeUnit.months': 'сар',
       'timeUnit.years': 'жилд',
       'timeUnit.forever': 'үүрд',
 
       /**
        * Commons
        */
       'commons.signedWith.google': 'Google аккаунтаар нэвтрэх',
       'commons.signedWith.facebook': 'Facebook аккаунтаар нэвтрэх',
       'commons.signedWith.twitter': 'Twitter аккаунтаар нэвтрэх',
       'commons.signedWith.linkedin': 'LinkedIn аккаунтаар нэвтрэх',
       'commons.signedWith.email': 'Мэйл хаягаар нэвтрэх',
       'commons.signedWith.jwt': 'Энэ сайтын бүртгэлээр нэвтрэх',
 
       'commons.close': 'Хаах', // close button
 
       /**
        * Tooltips and balloons on closed widget
        */
       'monitor.pageViewersTitle': 'Хуудсыг үзэж буй хүмүүс',
       'monitor.siteViewersTitle': 'Сайтыг үзэж буй хүмүүс',
       'monitor.chatBalloon': 'ЧААТ', // keep upper case, if applicable
       'monitor.presenceBalloon': 'Холбогдсон хүмүүс',
 
       /**
        * Menu
        */
       'status-header.options': 'Сонголтууд',
       'status-header.flushChat': 'Энэ чатыг цэвэрлэ',
       'status-header.disableChat': 'Энэ чатыг хаах',
       'status-header.enableChat': 'Энэ чатыг идэвхжүүлэх',
       'status-header.help': 'Тусламж',
       'status-header.issue': 'Алдааг мэдээлэх',
       'status-header.terms': 'Үйлчилгээний нөхцөл',
       'status-header.privacy': 'Нууцлалын бодлого',
       'status-header.signout': 'Гарах',
       'status-header.signin': 'Орох',
       'status-header.editUserProfile': 'Профайл засварлах',
       'status-header.notRememberedLogin': 'Сануулаагүй',
       // means that the login status is temporary and will not be remembered next time
 
       'status-header.editUserProfileModal': 'Дэлгэцийн нэр болон зургийг солихын тулд <a>Профайл засварлах</a> дээр дарна уу',
       // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"   

       /**
        * Tab labels and tooltips
        */
       'tab.chatTabLabel': 'ЧААТ', // max 8 characters; keep upper case, if applicable
       'tab.chatTitlePage': 'Хуудасны зочидтой хийх рийл-тайм чаат',
       'tab.chatTitleSite': 'Сайтын зочидтой хийх рийл-тайм чаат',
 
       'tab.rankingTabLabel': 'ХУУДСУУД', // max 8 characters; keep upper case, if applicable
       'tab.rankingTitle': 'Үзэж буй хуудсууд',
 
       'tab.heatmapTabLabel': 'ЗУРАГ', // max 8 characters; keep upper case, if applicable
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
       'ranking.foregroundTitle': 'Зочид',
       'ranking.activeTitle': 'Чаатад буй хүмүүс',
       'ranking.foregroundSwitchLabel': 'УНШИГЧИД', // max 12 characters; keep upper case, if applicable
       'ranking.activeSwitchLabel': 'ЧААТЛАГЧИД', // max 12 characters; keep upper case, if applicable
       'ranking.empty': 'Дата байхгүй',
       'ranking.currentPage': 'Одоогийн хуудас',
 
       'ranking.note': 'Топ 10 хуудсыг харуулж байна',
       // note added to the end to the ranking list to explain that only the top ten pages are shown
 
       /**
        * Chat
        */
        'chat.welcomeMessage': 'Бусад зочидтой шууд чат бич. Бичсэн чат нийтэд харагдах ба $N $A хугацааны дараа алга болно.',
        'chat.welcomeMessageJWT': 'Бусад зочидтой шууд чат бич. Бичсэн чат нийтэд харагдах ба $N $A хугацааны дараа алга болно.',
      // $N is a number and $A in a time unit taken from timeUnit.
      // example: "Chat with the other visitors in real time. Messages are public and disappear after 2 hours."
    
       'chat.welcomeFirstMessagePage': 'Хуудсын зочидтой хийх рийл-тайм чаат',
       'chat.welcomeFirstMessageSite': 'Сайтын зочидтой хийх рийл-тайм чаат',
 
       'chat.welcomeSecondMessage': 'Таны зурвасууд паблик тохиргоотой бөгөөд $N $A дараа устана',
       'chat.welcomeSecondMessageJWT': 'Таны зурвасууд паблик тохиргоотой бол $N $A дараа алга болж болзошгүй',
       // $N is a number and $A in a time unit taken from timeUnit.
       // example: "Таны зурвасууд паблик тохиргоотой, 2 цагийн дараа устана"
 
       'chat.messageDeleted.byYou': 'Та энэ зурвасыг устгасан',
       'chat.messageDeleted.byAuthor': 'Автор зурвасыг устгасан',
       'chat.messageDeleted.byModerator': 'Модератор зурвасыг устгасан',
       'chat.messageDeleted.byAdmin': 'Админ зурвасыг устгасан',
       'chat.messageDeleted.byNow4real': 'Админ зурвасыг устгасан',
       'chat.messageDeleted.unknown': 'Зурвас устсан',
 
       'chat.placeholder': 'Зурвас бичих',
       'chat.postBtn': 'Постлох', // means "publish this message"
 
       'chat.tooFrequentError': 'Хэт хурдан бичиж байна...\nЧаатыг дүүргэж болохгүй',
       // \n means to break the line; \' distinguishes the apostrophe from the final apex
 
       'chat.blockedError': 'Уучлаарай... Зурвас тохиромжгүй хэллэгтэй байна',
       'chat.abortedError': 'Энэ браузераас Нэвтрэхийг хориглосон эсвэл cookie-г идэвхгүй болгосон байна',
       'chat.mutedError': 'Уучлаарай! Дууг хаасан байна',
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
       'chat.muteBtn': 'Дууг хаах', // means "mute this user"
 
       'chat.userIdenticon': 'Хэрэглэгчийн хурууны хээ',
       /**
        * Presence
        */
       'presence.all.a': 'Хуудсанд 1 хүн байна (сайтад $N хүн байна)',
       // example: "..."
 
       'presence.all.b': 'Хуудсанд $N хүн байна (сайтад $M хүн байна)',
       // example: "..."
 
       'presence.page.a': 'Хуудсанд 1 хүн байна',
       'presence.page.b': 'Хуудсанд $N хүн байна',
 
       'presence.site.a': 'Хуудсанд 1 хүн байна',
       'presence.site.b': 'Хуудсанд $N хүн байна',
 
       /**
        * Emoji-picker labels
        */
       'emoji-picker.people': 'Хүмүүс',
       'emoji-picker.nature': 'Байгаль',
       'emoji-picker.food': 'Хоол хүнс',
       'emoji-picker.activity': 'Үйл хөдлөл',
       'emoji-picker.travel': 'Газар',
       'emoji-picker.objects': 'Обьект',
       'emoji-picker.symbols': 'Тэмдэгт',
       'emoji-picker.flags': 'Далбаа',
 
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
       // example: // example: "Alex, Ben, Cindy, and 3 others are typing..."
 
       /**
        * Social login dialog
        */
       'social-modal.title': 'Нэвтрэх',
       'social-modal.header': 'Now4real ашигладаг сайтад чатлаж эхлэх',
 
       // buttons:
       'social-modal.google': 'Google аккаунтаар нэвтрэх',
       'social-modal.facebook': 'Facebook аккаунтаар нэвтрэх',
       'social-modal.twitter': 'Twitter аккаунтаар нэвтрэх',
       'social-modal.linkedin': 'LinkedIn аккаунтаар нэвтрэх',
       'social-modal.email': 'Мэйл хаягаар нэвтрэх',
 
       'social-modal.footer': 'Та Now4real-ийн <a1>Үйлчилгээний нөхцөл</a1>, <a2>Нууцлалын бодлогыг</a2> зөвшөөрч байгаа бол "Нэвтрэх" товчийг дарна уу',
       // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
       // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"
 
       /**
        * JWT login dialog
        */
       'jwt-modal.title': 'Зөвшөөрөл',
 
       'jwt-modal.header': 'Чаатыг ашиглахын тулд Та Now4real-ийн <a1>Үйлчилгээний нөхцөл</a1> ба <a2>БНууцлалын бодлогыг</a2> зөвшөөрөх ёстой',
       // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
       // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"
 
       'jwt-modal.button': 'Зөвшөөрөх',
 
       /**
        * Mute dialog
        */
       'mute-modal.title': 'Хэрэглэгчийг хаах',
 
       'mute-modal.header': 'Хэрэглэгчийн эрх $U $E хүртэл хаагдсан',
       // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"
 
       'mute-modal.headerForever': 'Хэрэглэгч $U-г хаасан',
 
       'mute-modal.body.set': 'Хэрэглэгч $U-г хаах хугацаа:',
       // example: "Mute user Ben for:" followed by input fields with "3 days"
 
       'mute-modal.body.update': 'Хаах хугацааг шинэчлэх:',
       // example: "Update mute period:" followed by input fields with "5 days"
 
       'mute-modal.body.deleteInfo': 'Хэрэглэгчийг хүссэн үедээ нээж болно.',
 
       'mute-modal.body.deleteAlert': 'Та хэрэглэгчийг нээлээ',
 
       'mute-modal.button': 'Баталгаажуулах',
 
       /**
        * Confirm dialog
        */
       'confirmation-modal.title': 'Баталгаажуулах',
       'confirmation-modal.ok': 'Тийм',
       'confirmation-modal.cancel': 'Үгүй',
 
       /**
        * Flush chat confirm dialog
        */
       'flush-chat-confirmation-modal.message': 'Энэ чатыг цэвэрлэх үү?',
 
       /**
        * Disable chat confirm dialog
        */
       'disable-chat-confirmation-modal.message': 'Энэ чатыг хүчингүй болгох уу?',
 
}