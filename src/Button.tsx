import React, {MouseEvent, ReactNode} from "react";

type Props = 
{
 onClick(e: MouseEvent<HTMLElement>): void, 
 children:ReactNode,
 Color?: string
}

 const Button: React.FC<Props> = ({onClick, children, Color}) =>
 {
    return (
        <button style={{backgroundColor:Color}} onClick={onClick}> {children} </button>
    );
 };

export default Button;