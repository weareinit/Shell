/**
 * returns a random welcome message
 * @param {Boolean} condition - login <--> true, register <--> false
 */
function getMessage(condition) {
  let message = "";

  let salutations = condition
    ? [
        { header: `Welcome!`, desc: `Please Signin` },
        { header: `Bienvenido!`, desc: "Please Login" },
        {
          header: `こんにちは`,
          desc: `Ahh go ahead and Google translate that, WAVE time.`
        },
        { header: `Greetings!`, desc: `We've been WAVING for you` },
        { header: `Oh, Hi There!`, desc: `WAVE been expecting you.` },
        { header: `Hello There!`, desc: `We love the WAVE you look.` },
        {
          header: `Salut, Bienvenue.`,
          desc: `Ahh, i Know Right! WAVE Been practicing`
        }
      ]
    : [
        {
          header: `Shell-Hacker Incoming...`,
          desc: `Please Fillout the Form to Create an Account`
        },
        {
          header: `Shell-Hacker Incoming...`,
          desc: `Please Fillout the Form to Register`
        },
        {
          header: `Hi There!`,
          desc: `Please Fillout the Form to Register`
        }
      ];

  let randomNumber = Math.floor(Math.random() * salutations.length);

  message = salutations[randomNumber];

  return message;
}

export default getMessage;
