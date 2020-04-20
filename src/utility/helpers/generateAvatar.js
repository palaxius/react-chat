import tinycolor from "tinycolor2/tinycolor";

const getCorrectIndex = (number) => {
  return number > 255 ? 255 : number < 0 ? 0 : number;
};

export default (hash) => {
  const [r, g, b] = hash
    .substr(4, 6)
    .split("")
    .map((char) => getCorrectIndex(char.charCodeAt(0)));

  return {
    color: tinycolor({ r: r, g: g, b: b }).toHexString(),
    colorLighten: tinycolor({ r: r, g: g, b: b }).lighten(30).toHexString(),
  };
};
