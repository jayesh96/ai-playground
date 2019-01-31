import React from 'react';
import './styles.css'

export const Image = ({src, classname}) => {
    console.log(classname,"----")
    return (
        <img src={src} className={classname}/>
    )
}

export default Image;