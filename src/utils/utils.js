/**function to remove certain characters from lyrics */
const removeWrongCharacters = (texto) => {
  const result = texto.split(0, 20);
  const slicedWords = result.slice(0, 20);
  const slicedText =
    slicedWords.join(" ").replace(/(<br>|<br\/>|\n)/gi, " ") + " ...";
  return slicedText;
};

module.exports = { removeWrongCharacters };
