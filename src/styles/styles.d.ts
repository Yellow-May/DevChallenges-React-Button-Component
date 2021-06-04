import "styled-components";

type ColorType  = {
    primary: string,
    secondary: string,
    danger: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ColorType,
        hoverColors: ColorType,
    }
}