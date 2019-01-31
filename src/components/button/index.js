import React from 'react';

export const Button = ({classname,applyChangeButtonClick,disabled, children}) => {
    console.log(children)
    return (
        <button className={classname} disabled={disabled} onClick={()=>applyChangeButtonClick()} >
        {children}
        </button>
    )
}
export default Button;