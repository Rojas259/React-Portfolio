
import {createTheme} from '@mui/themed';

export const Theme = createTheme({
 lightColors: {
        primary: 'red',
    },
    darkColors: {
        primary: 'blue',
    },
    components: {
        Button: {
            raised: true,
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
    },
});

