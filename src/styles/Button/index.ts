import styled from "styled-components";

const DefaultButton = styled.button({
    borderRadius: 6,
    padding: '5px 15px',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px',
    transition: "0.35s",
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: 10
})

type ButtonProps = {
    color?: 'primary' | 'secondary' | 'danger',
    variant?: "text" | "outlined",
    startIcon?: string,
    endIcon?: string,
    shadow?: boolean
    disabled?: boolean,
}

const StyledButton = styled(DefaultButton)<ButtonProps>((props) => ({
    boxShadow: props.shadow 
                ? "0px 2px 3px rgba(51, 51, 51, 0.2)" 
                : "none",

    background: props.variant === "outlined" || props.variant === 'text' 
                ? 'transparent' 
                : props.color 
                    ? props.theme.colors[props.color] 
                    : '#E0E0E0',

    color: props.disabled 
                ? "#9E9E9E" 
                : props.color && props.variant 
                    ? props.theme.colors[props.color] 
                    : props.color
                        ? "#FFF" 
                        : "#3F3F3F",
    
    border: props.variant !== 'outlined' 
                ? 'none' : 'thin solid',

    cursor: props.disabled ? 'auto' : 'pointer',


    '&:hover, *:focus' : {
        background: props.disabled 
                ? '' 
                : props.color && props.variant
                    ? `${props.theme.hoverColors[props.color] + '70'}`
                    : props.color
                        ? props.theme.hoverColors[props.color]
                        : props.variant 
                            ? '#E0E0E0'
                            : '#AEAEAE',
        
        color: props.color && props.variant ? '#FFF' : ''
    },
}))

export default StyledButton