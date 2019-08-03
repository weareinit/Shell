/**
 * returns a random welcome message
 * @param {Boolean} condition - login <--> true, register <--> false
 */
function getMessage(condition) {
    let message = '';

    const salutations = condition ? [
        { header: `👋Welcome!`, desc: `Please Signin to Continue` },
        { header: `👋Oh, Hi There!`, desc: `WAVE been expecting you.` },
        {
            header: `👋Salut, Bienvenue.`,
            desc: `Ahh, i Know Right! WAVE Been practicing`,
        },
    ] : [{
            header: `👋Hey`,
            desc: `Please Fillout the Form to Create an Account`,
        },
        {
            header: `👋Welcome!`,
            desc: `Please Fillout the Form to Register`,
        },
        {
            header: `👋Hi There!`,
            desc: `Please Fillout the Form to Register`,
        },
    ];

    const randomNumber = Math.floor(Math.random() * salutations.length);

    message = salutations[randomNumber];

    return message;
}

const getAvatar = (id) => {
    const avatars = ["turtle.png", "mana.png", "crab.png", "dolphin.png", "marlin.png"]
    return avatars[id - 1];

}

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