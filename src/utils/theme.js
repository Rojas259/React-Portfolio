import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#590104",
            dark: "#590104"
        },
        secondary: {
            main: "#E09891",
        },
    },
    typography: {

        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Nexa Script',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
})