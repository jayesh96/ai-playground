import React,{ Component, Fragment } from "react";
import classnames from 'classnames';
import './styles.css';

class RightPanel extends Component{
constructor(props){
    super(props)
}

render(){
    return (
        <Fragment>
        <div className={'chatBox'}>
            
        <div className={classnames('chats')}>
        <img src={'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'} width={'26px'} height={'24px'} style={{borderRadius:'50%'}}/>
        <div className={'chats-msg'}>Hello</div>
        </div>

        <div className={classnames('chats', 'chat-right')}>
        <img src={'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'} width={'26px'} height={'24px'} style={{borderRadius:'50%'}}/>
        <div className={classnames('chats-msg', 'chat-msg-right')}>Hello Right</div>
        </div>

        <div className={classnames('chats')}>
        <img src={'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'} width={'26px'} height={'24px'} style={{borderRadius:'50%'}}/>
        <div className={'chats-msg'}>Hello</div>
        </div>

        <div className={classnames('chats', 'chat-right')}>
        <img src={'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'} width={'26px'} height={'24px'} style={{borderRadius:'50%'}}/>
        <div className={classnames('chats-msg', 'chat-msg-right')}>Hello Right</div>
        </div>

        <div className={classnames('chats')}>
        <img src={'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'} width={'26px'} height={'24px'} style={{borderRadius:'50%'}}/>
        <div className={'chats-msg'}>Hello</div>
        </div>

        <div className={classnames('chats', 'chat-right')}>
        <img src={'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'} width={'26px'} height={'24px'} style={{borderRadius:'50%'}}/>
        <div className={classnames('chats-msg', 'chat-msg-right')}>Hello RightHello RightHello RightHello RightHello RightHello RightHello RightHello RightHello RightHello RightHello RightHello Right</div>
        </div>

        </div>
        <div className={'messageBox'}>
        <div className={'Rectangle-3'}>
        <p className={'Type-message-here'}>Type message here…</p>
        </div>
        </div>
        </Fragment>
    )
}
}

export default RightPanel;