//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (colors) => {
  return colorCode(colors[0]) * 10 + colorCode(colors[1]);
};

const colorCode = (color) => COLORS.indexOf(color);

const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];