import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#5C715B",
            dark: "#5C715B"
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
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
})