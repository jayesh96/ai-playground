import React,{Component} from 'react';
import classnames from 'classnames';

export const Tabs = ({tabsCount,activeTab, changeActiveTab}) => {
    return (
        tabsCount.map((tab, index) => {
            return (
              <button
                className={classnames(
                  'tabsButton',
                  activeTab === index ? 'activeTab' : '',
                )}
                onClick={()=>changeActiveTab(index)}>
                <div className={'tabsButtonText'}>{tab}</div>
              </button>
            );
          })
    )
}

export default Tabs;