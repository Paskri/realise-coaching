export default function adjustColor(hexColor, lightnessBoost = 0.1, saturationBoost = 0.1) {
  // Convert hex to RGB
  let r = parseInt(hexColor.slice(1, 3), 16);
  let g = parseInt(hexColor.slice(3, 5), 16);
  let b = parseInt(hexColor.slice(5, 7), 16);

  // Convert RGB to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // Adjust lightness and saturation
  l = Math.min(1, Math.max(0, l + lightnessBoost));
  s = Math.min(1, Math.max(0, s + saturationBoost));

  // Convert HSL back to RGB
  function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  let rOut, gOut, bOut;
  if (s === 0) {
    rOut = gOut = bOut = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    rOut = hueToRgb(p, q, h + 1 / 3);
    gOut = hueToRgb(p, q, h);
    bOut = hueToRgb(p, q, h - 1 / 3);
  }

  // Convert RGB to hex
  rOut = Math.round(rOut * 255);
  gOut = Math.round(gOut * 255);
  bOut = Math.round(bOut * 255);

  return `#${rOut.toString(16).padStart(2, '0')}${gOut.toString(16).padStart(2, '0')}${bOut.toString(16).padStart(2, '0')}`;
}

