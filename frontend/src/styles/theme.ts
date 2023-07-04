import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
      warning: React.CSSProperties['color'];
      neutral: React.CSSProperties['color'];
    };
  }

  interface Palette {
    pallette: {
      primary: Palette['primary'];
      secondary: Palette['secondary'];
    };
  }

  interface ThemeOptions {
    status: {
      danger: string;
      warning: string;
      neutral: string;
      success: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: `#388e3c`,
      light: `#6abf69`,
      dark: `#00600f`,
      contrastText: `#000000`,
    },
    secondary: {
      main: `#bdbdbd`,
      dark: `#8d8d8d`,
      light: `#efefef`,
      contrastText: `#000000`,
    },
    info: {
      main: `#ffb300`,
    },
  },
  status: {
    danger: `#a30000`,
    warning: `#ffee58`,
    success: `#1faa00`,
    neutral: `#9e9e9e`,
  },
});
