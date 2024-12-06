import chroma from "chroma-js";

export function getColorName(hexColor){
  const colorName = chroma(hexColor).name();
  return colorName;
}

export function generateRandomPalette(numColors){
  const baseColor = chroma.random();
  
  const colorScale = chroma.scale([baseColor, baseColor.set('hsl', [Math.random() * 360, 0.5, 0.5])])
    .mode('lab')
    .colors(numColors);

  return colorScale;
}
