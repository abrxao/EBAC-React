import {createTheme} from '@mui/system'

export const theme = createTheme({
    palette:{
        background:{
            paper:'#adf',
        },
        text:{
            primary:'#173a5e',
            secondary: '#46505a',
        },
        action:{
            active:'#001e3c',
        },
        success:{
            dark:'#009688',
        },
    },
});

export const themeDark = createTheme({
    palette:{
        background:{
            paper:'#5a6f44',
        },
        text:{
            primary:'#f2f2f2',
            secondary: '#e4e4e4',
        },
        action:{
            active:'#001e3c',
        },
        success:{
            dark:'#fff',
        },
    },
});