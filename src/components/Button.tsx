import React from 'react'
import StyledButton from "../styles/Button";
import { FaMoon, FaUser, FaArrowRight, FaArrowLeft, FaLock, FaHamburger } from "react-icons/fa";

type IconType = 'user' | 'moon' | 'arrowLeft' | 'arrowRight' | 'lock' | 'hamburger';

interface ButtonProps {
    text?: string;
    color?: "primary" | "secondary" | "danger";
    variant?: "text" | "outlined";
    startIcon?: IconType;
    endIcon?: IconType;
    shadow?: boolean;
    disabled?: boolean
}

const iconReturn = (name: IconType) => {
    if (name === 'user') return <FaUser />
    if (name === 'moon') return <FaMoon />
    if (name === 'arrowLeft') return <FaArrowLeft />
    if (name === 'arrowRight') return <FaArrowRight />
    if (name === 'lock') return <FaLock />
    if (name === 'hamburger') return <FaHamburger />
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <StyledButton color={props.color} disabled={props.disabled} shadow={props.shadow} variant={props.variant}>
            {props.startIcon && iconReturn(props.startIcon)}
            {props.text}
            {props.endIcon && iconReturn(props.endIcon)}
        </StyledButton>
    )
}

export default Button
