/**
 * returns a random welcome message
 * @param {Boolean} condition - login <--> true, register <--> false
 */
function getMessage(condition) {

    let message = "";

    let salutations = condition ? [
        `Welcome!\n Please Signin`,
        `Bienvenido!\n`,
        `こんにちは\nOh go ahead and Google \ntranslate that, WAVE time.`,
        `Oh look who it is!\nWe"ve been WAVING for you`,
        `Oh, Hi There!\nWAVE been expecting you.`,
        `Well Hello There!\nWe love the WAVE you look.`,
        `Salut, Bienvenue.\nAhh, i Know Right!\n WAVE Been practicing.`,
    ]
        :
        [
            `Whoa New Hacker Incoming!\nPlease Fillout the Form to Register`,
            `New Shell-Hacker Incoming...\nPlease Fillout the Form to Register`,
            `Wanna Hack with the Cool Kids?\nPlease Fillout the Form to Register`,
            `A Wise Man Once said:\nPlease Fillout the Form to Register`
        ];

    let randomNumber = Math.floor(Math.random() * salutations.length);

    message = salutations[randomNumber];


    return message
}

export default getMessage;