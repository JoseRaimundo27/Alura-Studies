import React from "react";
import style from "./Button.module.scss"
import { buttonProps } from "../../types/buttonProps";



class Button extends React.Component<{
tipo?: buttonProps,
texto: string,
onClick? : () => void
}> {
    render() {
        return(
            <button onClick={this.props.onClick} type={this.props.tipo} className={style.Botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button;