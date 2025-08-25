
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
        ].join(','),
    },
    palette: {
        primary: { main: '#0D1B2A' },    // Azul petróleo
        secondary: { main: '#1B9AAA' },  // Verde água elegante
        background: { default: '#F8F9FA' },
    },
});
theme = responsiveFontSizes(theme);

export default theme;