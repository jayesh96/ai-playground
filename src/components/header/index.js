import React,{Component} from 'react';
import './styles.css'

const Header = ({title}) => {
    return (
        <div className={'header'}>
            <div className={'header-title'}>
              {title}
            </div>
          </div>
    )
}

export default Header;