import { createContext, useEffect, useState } from 'react';

// Créer le contexte
export const ColorContext = createContext();

// Créer le fournisseur
export const ColorProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#175a48');
  const [primaryGradientColor, setPrimaryGradientColor] = useState('#175a48');
  const [secondaryColor, setSecondaryColor] = useState('#e2eedf');
  const [thirdColor, setThirdColor] = useState('#dd9787');
  const [fourthColor, setFourthColor] = useState('#7a1c1a');
  const [fourthGradientColor, setFourthGradientColor] = useState('#7a1c1a');

  const hexToRgba = (hex, alpha = 1) => {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
  // Fonction utilitaire pour convertir hex en rgba avec saturation ajustée

  const hexToRgbaWithSaturation = (hex, alpha = 1, saturationBoost = 0.1) => {
    // Conversion hex -> RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Convertir RGB en HSL pour ajuster la saturation
    let { h, s, l } = rgbToHsl(r, g, b);

    // Augmenter la saturation
    s = Math.min(1, s + saturationBoost); // On limite la saturation à 1 (100%)

    // Reconvertir HSL en RGB
    let { r: newR, g: newG, b: newB } = hslToRgb(h, s, l);

    // Retourner la couleur avec alpha
    return `rgba(${newR}, ${newG}, ${newB}, ${alpha})`;
  };

  // Fonction pour convertir RGB en HSL
  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // gris
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
    return { h, s, l };
  };

  // Fonction pour convertir HSL en RGB
  const hslToRgb = (h, s, l) => {
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // gris
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 3) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    };
  };

  useEffect(() => {
    setPrimaryGradientColor(hexToRgbaWithSaturation(primaryColor, 0.7))
    setFourthGradientColor(hexToRgbaWithSaturation(fourthColor, 0.7))
    setPrimaryGradientColor(hexToRgbaWithSaturation(primaryColor, 0.7))
    setFourthGradientColor(hexToRgbaWithSaturation(fourthColor, 0.7))
  }, [primaryColor])

  return (
    <ColorContext.Provider
      value={{
        primaryColor,
        setPrimaryColor,
        primaryGradientColor,
        setPrimaryGradientColor,
        secondaryColor,
        setSecondaryColor,
        thirdColor,
        setThirdColor,
        fourthColor,
        setFourthColor,
        fourthGradientColor,
        setFourthGradientColor
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};