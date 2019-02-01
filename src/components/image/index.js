import React from 'react';
import './styles.css'

export const Image = ({src, classname}) => {
    return (
        <img src={src} className={classname} alt=''/>
    )
}

export default Image;