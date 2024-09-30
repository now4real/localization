/****************************************************************************************
 * ENGLISH (American)
 ****************************************************************************************/
export default {
    'genericError': 'Oops! Something went wrong',
    'mutedError': 'Oops! It looks like you have been muted',

    'connection-status.offline': 'You are offline',

    /**
     * Time representation
     */
    'hourFormat': 12,
    // 12 (e.g. "3:52 PM") or 24 (e.g. "15:52")

    'timeUnit.minute': 'minute',
    'timeUnit.minutes': 'minutes',
    'timeUnit.hour': 'hour',
    'timeUnit.hours': 'hours',
    'timeUnit.day': 'day',
    'timeUnit.days': 'days',
    'timeUnit.week': 'week',
    'timeUnit.weeks': 'weeks',
    'timeUnit.month': 'month',
    'timeUnit.months': 'months',
    'timeUnit.year': 'year',
    'timeUnit.years': 'years',
    'timeUnit.forever': 'forever',

    /**
     * Commons
     */
    'commons.signedWith.google': 'Signed in with Google',
    'commons.signedWith.facebook': 'Signed in with Facebook',
    'commons.signedWith.twitter': 'Signed in with X',
    'commons.signedWith.linkedin': 'Signed in with LinkedIn',
    'commons.signedWith.email': 'Signed in with email',
    'commons.signedWith.jwt': 'Signed in on this site',
    'commons.signedWith.noRegistration': 'Signed in on this chat',

    'commons.close': 'Close', // close button

    /**
     * Tooltips and balloons on closed widget
     */
    'monitor.pageViewersTitle': 'People viewing this page',
    'monitor.siteViewersTitle': 'People viewing this site',
    'monitor.chatBalloon': 'CHAT', // keep upper case, if applicable
    'monitor.presenceBalloon': 'People present now',

    /**
     * Menu
     */
    'status-header.options': 'Options',
    'status-header.flushChat': 'Flush this chat',
    'status-header.disableChat': 'Disable this chat',
    'status-header.enableChat': 'Enable this chat',
    'status-header.createPoll': 'Create poll',
    'status-header.terminatePoll': 'Terminate poll',
    'status-header.removePoll': 'Remove poll',
    'status-header.help': 'Help',
    'status-header.issue': 'Report an Issue',
    'status-header.terms': 'Terms of Service',
    'status-header.privacy': 'Privacy Policy',
    'status-header.signout': 'Sign out',
    'status-header.signin': 'Sign in',
    'status-header.editUserProfile': 'Edit profile',

    'status-header.notRememberedLogin': 'Not remembered',
    // means that the login status is temporary and will not be remembered next time

    'status-header.editUserProfileModal': 'To change your display name and picture, <a>edit your profile</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "edit your profile"

    /**
     * Tab labels and tooltips
     */
    'tab.chatTabLabel': 'CHAT', // max 8 characters; keep upper case, if applicable
    'tab.chatTitlePage': 'Chat with other visitors of this page in real time',
    'tab.chatTitleSite': 'Chat with other visitors of this site in real time',

    'tab.rankingTabLabel': 'PAGES', // max 8 characters; keep upper case, if applicable
    'tab.rankingTitle': 'Pages people are viewing now',

    'tab.heatmapTabLabel': 'MAP', // max 8 characters; keep upper case, if applicable
    'tab.heatmapTitle': 'Where people come from',

    /**
     * Heatmap
     */
    'heatmap.pageSwitchLabel': 'PAGE', // max 12 characters; keep upper case, if applicable
    'heatmap.siteSwitchLabel': 'SITE', // max 12 characters; keep upper case, if applicable
    'heatmap.empty': 'No data',

    /**
     * Ranking
     */
    'ranking.foregroundTitle': 'People on this site',
    'ranking.activeTitle': 'People chatting on this site',
    'ranking.foregroundSwitchLabel': 'VIEWERS', // max 12 characters; keep upper case, if applicable
    'ranking.activeSwitchLabel': 'CHATTERS', // max 12 characters; keep upper case, if applicable
    'ranking.empty': 'No data',
    'ranking.currentPage': 'Current page',

    'ranking.note': 'Showing top ten pages',
    // note added to the end to the ranking list to explain that only the top ten pages are shown

    /**
     * Chat
     */
    'chat.attentionGrabber1': '⚡ Chat with the $N other visitors online now!',
    'chat.attentionGrabber2': '⚡ Chat with the other visitors online now!',
    // $N is a number
    // example: "⚡ Chat with the 2 other visitors online now!"

    'chat.welcomeMessage': 'Chat with other visitors in real time. Messages are public and vanish after $N $A. Be kind and have fun!',
    'chat.welcomeMessageJWT': 'Chat with other visitors in real time. Messages might be public and vanish after $N $A. Be kind and have fun!',
    // $N is a number and $A in a time unit taken from timeUnit
    // example: "Chat with other visitors in real time. Messages are public and vanish after 20 minutes. Be kind and have fun!"

    'chat.messageDeleted.byYou': 'You deleted this message',
    'chat.messageDeleted.byAuthor': 'Message deleted by the author',
    'chat.messageDeleted.byModerator': 'Message deleted by a moderator',
    'chat.messageDeleted.byAdmin': 'Message deleted by the admin',
    'chat.messageDeleted.byNow4real': 'Message deleted by the admin',
    'chat.messageDeleted.unknown': 'Message deleted',

    'chat.messageHidden.byYou': 'Hidden by you',

    'chat.placeholder': 'Type a message',
    'chat.postBtn': 'Post', // means "publish this message"

    'chat.tooFrequentError': 'You are a bit too fast...\nPlease don\'t flood the chat',
    // \n means to break the line; \' distinguishes the apostrophe from the final apex

    'chat.blockedError': 'Sorry... This message seems inappropriate',
    'chat.abortedError': 'Sign-in canceled or cookies disabled on this browser',
    'chat.notPersistentError': 'The authentication will not be remembered due to your restricted privacy settings. Please enable cookies for Now4real in your browser to prevent this from happening.',
    'chat.disabledError': 'This chat has been disabled',

    'chat.disabledByAdmin': 'This chat has been disabled by the admin',
    'chat.disabledByModerator': 'This chat has been disabled by a moderator',
    'chat.signinRequired': '<a>Sign in</a> to chat',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'chat.viewOnly': 'View-only mode',

    // below are the actions on messages that appear in a contextual menu
    'chat.replyBtn': 'Reply', // means "reply to this message"
    'chat.deleteBtn': 'Delete', // means "delete this message"
    'chat.muteBtn': 'Mute', // means "mute this user"
    'chat.reportBtn': 'Report', // means "report this message"
    'chat.hideBtn': 'Hide', // means "hide this message"
    'chat.showBtn': 'Show', // means "show this message"

    'chat.userIdenticon': 'User fingerprint',

    /**
     * Presence
     */
    'presence.all.a': '1 person on this page (of $N on this site)',
    // example: "1 person on this page (of 23 on this site)"

    'presence.all.b': '$N people on this page (of $M on this site)',
    // example: "5 people on this page (of 23 on this site)"

    'presence.page.a': '1 person on this page',
    'presence.page.b': '$N people on this page',

    'presence.site.a': '1 person on this site',
    'presence.site.b': '$N people on this site',

    /**
     * Emoji-picker labels
     */
    'emoji-picker.recents': 'Recent',
    'emoji-picker.recents.none': 'You haven\'t selected any emojis yet.',
    'emoji-picker.search': 'Search emojis',
    'emoji-picker.search.error': 'Failed to search emojis',
    'emoji-picker.search.notFound': 'No results found',
    'emoji-picker.search.clear': 'Clear search',
    'emoji-picker.error.load': 'Failed to load emojis',
    'emoji-picker.error.retry': 'Try again',

    /**
     * GIF-picker labels
     */
    'gif-picker.search': 'Search GIF',
    'gif-picker.retry': 'Error loading GIFs. <a>Try again</a>',
    // keep <a> and </a> unchanged and surrounding the translation of "Try again"

    /**
     * Typing
     */
    'typing.a': '1 person is typing...',

    'typing.b': '$N people are typing...',
    // example: "5 people are typing..."

    'typing.c': '$A is typing...',
    // example: "Alex is typing..."

    'typing.d': '$A and $B are typing...',
    // example: "Alex and Ben are typing..."

    'typing.e': '$A, $B, and $C are typing...',
    // example: "Alex, Ben, and Cindy are typing..."

    'typing.f': '$A and 1 other are typing...',
    // example: "Alex and 1 other are typing..."

    'typing.g': '$A and $N others are typing...',
    // example: "Alex and 3 others are typing..."

    'typing.h': '$A, $B, and 1 other are typing...',
    // example: "Alex, Ben, and 1 other are typing..."

    'typing.i': '$A, $B, and $N others are typing...',
    // example: "Alex, Ben, and 3 others are typing..."

    'typing.j': '$A, $B, $C, and 1 other are typing...',
    // example: "Alex, Ben, Cindy, and 1 other are typing..."

    'typing.k': '$A, $B, $C, and $N others are typing...',
    // example: "Alex, Ben, Cindy, and 3 others are typing..."

    /**
     * JWT login dialog
     */
    'jwt-modal.title': 'Consent',

    'jwt-modal.header': 'To start chatting you must accept the <a1>Terms of Service</a1> and the <a2>Privacy Policy</a2> of Now4real (the chat service)',
    // keep <a1> and </a1> unchanged and surrounding the translation of "Terms of Service"
    // keep <a2> and </a2> unchanged and surrounding the translation of "Privacy Policy"

    'jwt-modal.acceptBtn': 'Accept',

    // below are the keys used when an additional consent message is in place
    'jwt-modal.disagreeRadio': 'Disagree',
    'jwt-modal.agreeRadio': 'Agree',
    'jwt-modal.continueBtn': 'Continue',

    /**
     * Mute dialog
     */
    'mute-modal.title': 'Mute User',

    'mute-modal.header': 'User $U has been muted until $E',
    // example: "User Ben has been muted until Wed, 14 Jun 2022 07:12:00 GMT"

    'mute-modal.headerForever': 'User $U has been muted',

    'mute-modal.body.set': 'Mute user $U for:',
    // example: "Mute user Ben for:" followed by input fields with "3 days"

    'mute-modal.body.update': 'Update mute period:',
    // example: "Update mute period:" followed by input fields with "5 days"

    'mute-modal.body.deleteInfo': 'If muted, the user will not be able to publish other messages. You can unmute the user whenever you want.',

    'mute-modal.body.deleteAlert': 'You are unmuting the user',

    'mute-modal.button': 'Confirm',

    /**
     * Hide/Show dialog
     */
    'hide-modal.hideTitle': 'Hide Messages',
    'hide-modal.showTitle': 'Show Messages',

    'hide-modal.hideHeader': 'Hide all messages posted by $U (they won\'t know you have muted them).',
    // example: "Hide all messages posted by Ben (they won't know you have muted them)."

    'hide-modal.showHeader': 'Show again messages posted by $U.',
    // example: "Show again messages posted by Ben."

    'hide-modal.hideInfo': 'You can show them again whenever you want.',

    'hide-modal.button': 'Confirm',

    /**
     * Confirm dialog
     */
    'confirmation-modal.title': 'Confirm',
    'confirmation-modal.ok': 'Yes',
    'confirmation-modal.cancel': 'No',

    /**
     * Report dialog
     */
    'report-modal.title': 'Report Message',

    'report-modal.header': 'Why are you reporting this message?',
    'report-modal.note': 'If someone is in immediate danger, call the local emergency services - don\'t wait',

    'report-modal.hateSpeech': 'Hate speech or bullying',
    'report-modal.violence': 'Terrorism or violence',
    'report-modal.pornography': 'Sexually inappropriate',
    'report-modal.spam': 'Spam, scams, or fraud',
    'report-modal.selfInjury': 'Suicide or self-injury',
    'report-modal.copyright': 'Intellectual property infringement',
    'report-modal.other': 'Other',

    'report-modal.commentPlaceholder': 'Comment',
    'report-modal.button': 'Report',

    'report-modal.reportOk': 'Thanks for the reporting!',
    'report-modal.alreadyReportedError': 'You have already reported the message',

    /**
     * Create poll dialog
     */
    'create-poll-modal.title': 'Create Poll',

    'create-poll-modal.questionPlaceholder': 'Question',
    'create-poll-modal.optionPlaceholder': 'Option',

    'create-poll-modal.multipleChoice': 'Multiple choice',

    'create-poll-modal.addOptionButton': 'Add an option...',
    'create-poll-modal.deleteOptionButton': 'Delete',
    'create-poll-modal.createButton': 'Create',

    /**
     * Poll dialog
     */
    'poll-modal.title': 'Poll',
    'poll-modal.titleClosed': 'Poll closed',

    'poll-modal.vote': 'vote',
    'poll-modal.votes': 'votes',
    'poll-modal.finalResults': 'Final results',
    'poll-modal.signinToVote': '<a>Sign in</a> to vote',
    // keep <a> and </a> unchanged and surrounding the translation of "Sign in"

    'poll-modal.sendVoteButton': 'Vote',
    'poll-modal.revokeVoteButton': 'Revoke vote',
    'poll-modal.viewVotesButton': 'Results',

    /**
     * Flush chat confirm dialog
     */
    'flush-chat-confirmation-modal.message': 'Are you sure you want to flush this chat?',

    /**
     * Disable chat confirm dialog
     */
    'disable-chat-confirmation-modal.message': 'Are you sure you want to disable this chat?',

    /**
     * Terminate poll confirm dialog
     */
    'terminate-poll-confirmation-modal.message': 'Are you sure you want to terminate the current poll?',

    /**
     * Remove poll confirm dialog
     */
    'remove-poll-confirmation-modal.message': 'Are you sure you want to remove the current poll?'
}