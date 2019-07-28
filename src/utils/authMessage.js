/**
 * returns a random welcome message
 * @param {Boolean} condition - login <--> true, register <--> false
 */
function getMessage(condition) {
    let message = '';

    const salutations = condition ? [
        { header: `👋Welcome!`, desc: `Please Signin to Continue` },
        { header: `👋Bienvenido!`, desc: 'Please Login or Create an Account' },
        { header: `Greetings!`, desc: `We've been WAVING for you` },
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

export default getMessage;