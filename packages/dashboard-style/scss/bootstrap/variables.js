const colors = {
    white: "#fff",
    black: "#1f2d3d",
    gray: {
      100: "#f8f9fa",
      200: "#e9ecef",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#868e96",
      700: "#5d636d",
      800: "#3f4651",
      900: "#353c48",
    },
    blue: "#1eb7ff",
    indigo: "#6610f2",
    purple: "#ca8eff",
    pink: "#e83e8c",
    red: "#ed1c24",
    orange: "#f27212",
    yellow: "#f7bf47",
    green: "#1bb934",
    teal: "#20c997",
    cyan: "#33ae9a",
    corpo: "rgba(237,28,36,0.5)",
    corpoRedSecondary: "rgba(237,28,36,0.6)",
    corpoRedTertiary: "rgba(237,28,36,0.7)",
    textoBolder: "#AA3214",
    titulos: "#AA765E",//bold 900, regular 100
    texto: "#333333",
    genericButton: "#F5E5E0",
    cota: "#E2725B",
    cotaClaro: "#F4A698",
    cotaEscuro: "#CC4D33",
    cotaAvermelhado: "#D05C4B",
    cotaAlaranjado: "#E4844E",
    cotaNeutro: "#A65844"
   
  };
  
  const socialColors = {
    facebook: "#3a5e95",
    twitter: "#60addb",
    lastfm: "#e01132",
    pinterest: "#bc364a",
    linkedin: "#057cb2",
    medium: "#5cb85c",
    skype: "#0ab2ef",
    foursquare: "#f84978",
    android: "#a6c843",
    spotify: "#2fd665",
    paypal: "#2a9ad7",
    dribbble: "#f16898",
    youtube: "#ed1922",
    windows: "#10bff2",
    amazon: "#fea320",
  };
  
  const themeColors = {
    primary: colors.blue,
    secondary: colors.gray[600],
    success: colors.green,
    info: colors.cyan,
    warning: colors.orange,
    danger: colors.red,
    light: colors.gray[100],
    dark: colors.gray[800],
    indigo: colors.indigo,
    purple: colors.purple,
    pink: colors.pink,
    yellow: colors.yellow,
    corpo: "rgba(188, 54, 74, 0.5)",
    corpoRedSecondary: "#c0414599",
    corpoRedTertiary: "rgba(237,28,36,0.7)",
  };
  
  const shades = {
    ...generateShades("black", colors.black),
    ...generateShades("white", colors.white),
    ...generateShades("primary", colors.blue),
    ...generateShades("info", colors.cyan),
    ...generateShades("success", colors.green),
    ...generateShades("warning", colors.orange),
    ...generateShades("danger", colors.red),
    ...generateShades("yellow", colors.yellow),
    ...generateShades("secondary", colors.gray[600]),
    ...generateShades("dark", colors.gray[800]),
    ...generateShades("light", colors.gray[100]),
    ...generateShades("purple", colors.purple),
  };
  
  function generateShades(name, color) {
    const shades = {};
    for (let i = 1; i <= 9; i++) {
      const opacity = (i / 10).toFixed(1);
      shades[`${name}-${i.toString().padStart(2, "0")}`] = `rgba(${hexToRgb(color)}, ${opacity})`;
    }
    return shades;
  }
  
  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  }
  
  export const allColors = {
    ...colors,
    ...socialColors,
    ...shades,
  };
  
  console.log({ colors, socialColors, themeColors, shades, allColors });
  