import React from 'react';
import classnames from 'classnames';
import "./styles.css"

export const Tabs = ({tabsCount,activeTab, changeActiveTab}) => {
    return (
        tabsCount.map((tab, index) => {
            return (
              <button
              key={index}
                className={classnames(
                  'tabsButton',
                  activeTab === index ? 'activeTab' : '',
                )}
                onClick={()=>changeActiveTab(index)}>
                <div className={'tabsButtonText'}>{tab} <span style={{display:"none"}}>X</span></div>

              </button>
            );
          })
    )
}

export default Tabs;