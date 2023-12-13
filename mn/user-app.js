/****************************************************************************************
 * MONGOLIAN
 ****************************************************************************************/
export default {
    'socialLoginTitle': 'Now4real Сошиал нэвтрэлт',
    'noRegLoginTitle': 'Now4real нэвтрэлт',
    'emailLoginTitle': 'Now4real Имэйл нэвтрэлт',
    'whiteLabelLoginTitle': 'Чатаар нэвтрэх',
    'editProfileTitle': 'Профайл засварлах - Now4real',
    'whiteLabelEditProfileTitle': 'Профайл засварлах',

    'genericError': 'Уучлаарай! Алдаа гарлаа',
    'sessionExpiredError': 'Холболт салсан тул дахин хандна уу',
    'recaptchaError': 'Уучлаарай, таны хандалт сэжигтэй байна',
    'sendThrottlingError': 'Шинэ код авахын тулд өмнөх имэйл илгээснээс хойш хамгийн багадаа $N минутын дараа дахин хандна уу',
    'noOpenerError': 'Аутентификаци гүйцэтгэх боломжгүй байна. Дахин оролдож эсвэл хуулбарыг солино уу.',

    'n4rTermsAndPrivacy': 'Now4real-ын <a1>Үйлчилгээний нөхцөл</a1> болон <a2>Нууцлалын бодлого</a2>-г зөвшөөрч байхын тулд “$B” товчийг дарна уу',
    // $B is the button text
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    /**
     * Email signin step 1
     */
    'emailSigninStep1.title': 'Имэйл хаягаар нэвтрэх',

    'emailSigninStep1.emailInfo': 'Имэйл хаягаа оруулна уу',
    'emailSigninStep1.emailPlaceholder': 'Имэйл',

    'emailSigninStep1.continue': 'Үргэлжлүүлэх',
    'emailSigninStep1.newEmail': 'Өөр имэйл ашиглана уу',

    'emailSigninStep1.invalidEmailError': 'Зөв имэйл хаяг оруулна уу',

    /**
     * Email signin step 2
     */
    'emailSigninStep2.title': 'Имэйл баталгаажуулалт',

    'emailSigninStep2.info1': '($E) имэйл хаягаар баталгаажуулалтын код илгээсэн болно',
    // $E is the user email
    // example: "We sent you a verification code to your email address (john@mail.test)"

    'emailSigninStep2.info2': 'Код хүлээж аваагүй юу?',

    'emailSigninStep2.resend': 'Дахин илгээх',
    'emailSigninStep2.confirm': 'Батлах',

    'emailSigninStep2.otpResendFeedback': 'Шинэ код илгээсэн',
    'emailSigninStep2.invalidOtpError': 'Хүчингүй эсвэл хугацаа дууссан код байна',

    /**
     * Email signin step 3
     */
    'emailSigninStep3.title': 'Профайлын мэдээллээ гүйцэт оруулна уу',

    'emailSigninStep3.feedback': 'Код баталгаажсан. Сүүлийн алхам...',

    'emailSigninStep3.nameInfo': 'Дэлгэцэнд харагдах нэр (нийтийн чатанд харагдна)',
    'emailSigninStep3.namePlaceholder': 'Нэр',

    'emailSigninStep3.pictureInfo': 'Таны зураг (нийтийн чатанд харагдна)',

    'emailSigninStep3.useGravatar': 'Gravatar зургийг ашиглах',
    'emailSigninStep3.gravatarInfo': 'Бид, Gravatar гэдэг гуравдагч талын үйлчилгээг ашиглан таны зургийг харуулдаг. Зургийг өөрчлөхийн тулд <a>Gravatar/WordPress -т бүртгүүлнэ үү</a>.',
    // keep <a> and </a> unchanged and surrounding the translation of "register to Gravatar/WordPress"

    'emailSigninStep3.emailInfo': 'Таны имэйл хаяг (бусдад харагдахгүй)',

    'emailSigninStep3.continue': 'Үргэжлүүлэх',

    'emailSigninStep3.invalidNameError': 'Хүчингүй нэр',

    /**
     * Edit profile
     */
    'editProfile.title': 'Профайл засварлах',

    'editProfile.pictureInfo': 'Таны зураг (нийтийн чатанд харагдна)',

    'editProfile.nameInfo': 'Дэлгэцийн нэр (нийтийн чатанд харагдна)',
    'editProfile.namePlaceholder': 'Нэр',

    'editProfile.emailInfo': 'Таны имэйл (Бусдад харагдахгүй)',

    'editProfile.updatedFeedback': 'Таны мэдээллийг шинэчилж дууслаа. Энэ цонхыг хаана уу',

    'editProfile.useGravatar': 'Gravatar зургийг ашиглах',
    'editProfile.gravatarInfo': 'Бид, Gravatar гэдэг гуравдагч талын үйлчилгээг ашиглан таны зургийг харуулдаг. Зургийг өөрчлөхийн тулд <a>Gravatar/WordPress -т бүртгүүлнэ үү</a>.',
    // keep <a> and </a> unchanged and surrounding the translation of "register to Gravatar/WordPress"

    'editProfile.update': 'Шинэчлэх',

    /**
     * No registration signin
     */
    'noRegistrationSignin.nickInfo': '$S дээр чатлахын тулд нэрийг сонгоно уу',
    // $S is the site
    // example: "Choose a nickname to chat on example.com"

    'noRegistrationSignin.nickPlaceholder': 'Нэрийг оруулна уу',

    'noRegistrationSignin.ok': 'OK',
    'noRegistrationSignin.newNick': 'Өөр нэр ашиглах',

    'noRegistrationSignin.invalidNickError': 'Нэр буруу байна',

    /**
     * Social and email signin
     */
    'socialSignin.title': 'Нэвтрэх',
    'socialSignin.header': 'Now4real ашиглаж буй ямар ч вэбсайтаар сэтгэлд тусалж чатлах',

    // buttons:
    'socialSignin.google': 'Google-р нэвтрэх',
    'socialSignin.facebook': 'Facebook-р нэвтрэх',
    'socialSignin.twitter': 'X-р нэвтрэх',
    'socialSignin.linkedin': 'LinkedIn-р нэвтрэх',
    'socialSignin.email': 'И-мэйлээр нэвтрэх',

    'socialSignin.signin': 'нэвтрэх',

    'socialSignin.newUser': 'Өөр бүртгэл ашиглана уу'
}