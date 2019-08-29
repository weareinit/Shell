/**
 * Returns a random welcome message
 * @param {Boolean} condition - login <--> true, register <--> false
 */
function getMessage(condition) {
  let message = "";

  const salutations = condition
    ? [
        { header: `👋 Long time no sea!`, desc: `Shell we dance?` },
        { header: `👋 Hey there!`, desc: `Wave been expecting you` }
      ]
    : [
        {
          header: `🏖 Feeling beachy?`,
          desc: `Join the wave!`
        },
        {
          header: `🦑 Down for a dive?`,
          desc: `Come get your vitamin sea!`
        }
      ];

  const randomIndex = Math.floor(Math.random() * salutations.length);

  message = salutations[randomIndex];

  return message;
}

/**
 * Returns the avatar name of user given an id
 * @param {Number} id - avatar id
 */
const getAvatar = id => {
  const avatars = [
    "crab.png",
    "dolphin.png",
    "mahi.png",
    "octopus.png",
    "mana.png",
    "diver.png"
  ];
  return avatars[id];
};

/**
 * Capitalize each word of a given string
 * @param {String} words - text to be be "word cased"
 */
const wordCase = words => {
  const UNKNOWN = "Unknown";
  if (!words) return UNKNOWN;
  else {
    let text = words
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    return text;
  }
};

export default { getMessage, getAvatar, wordCase };
