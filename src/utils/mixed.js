/**
 * Returns a random welcome message
 * @param {Boolean} condition - login <--> true, register <--> false
 */
function getMessage(condition) {
    let message = '';

    const salutations = condition ? [
        { header: `👋 Welcome!`, desc: `Please login to Continue` },
        { header: `👋 Oh, Hi There!`, desc: `Wave been expecting you` },
        {
            header: `👋 Salut, Bienvenue.`,
            desc: `Ahh, i Know Right! Wave Been practicing`,
        },
    ] : [{
            header: `👋 Hey`,
            desc: `Please Fillout the Form to Create an Account`,
        },
        {
            header: `👋 Hi There!`,
            desc: `Please Fillout the Form to Register`,
        },
    ];

    const randomIndex = Math.floor(Math.random() * salutations.length);

    message = salutations[randomIndex];

    return message;
}


/**
 * Returns the avatar name of user given an id
 * @param {Number} id - avatar id
 */
const getAvatar = (id) => {
    const avatars = ["turtle.png", "mana.png", "crab.png", "dolphin.png", "marlin.png"]
    return avatars[id - 1];

}


/**
 * Capitalize each word of a given string
 * @param {String} words - text to be be "word cased"
 */
const wordCase = (words) => {
    const UNKNOWN = 'Unknwon'
    if (!words) return UNKNOWN
    else {
        let text = words.toLowerCase().split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
        return text;
    }
}


export default { getMessage, getAvatar, wordCase };