import {createGlobalStyle} from "styled-components";

export default createGlobalStyle({
    '*, *::before, *::after' : {
        margin: 0,
        padding: 0,
        outline: 'none',
        textDecoration: 'none',
        boxSizing: 'border-box'
    },

    body : {
        padding: 24,
    }
})