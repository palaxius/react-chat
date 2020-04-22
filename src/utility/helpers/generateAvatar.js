import tinycolor from "tinycolor2/tinycolor";

const getCorrectIndex = (number) => {
  return number > 255 ? 255 : number < 0 ? 0 : number;
};

export default (hash) => {
  const [r, g, b] = hash
    .substr(8, 10)
    .split("")
    .map((char) => getCorrectIndex(char.charCodeAt(0)));

  return {
    color: tinycolor({ r: r, g: g, b: b })
      .lighten(30)
      .saturate(30)
      .toHexString(),
    colorLighten: tinycolor({ r: r, g: g, b: b })
      .lighten(20)
      .saturate(20)
      .toHexString(),
  };
};
