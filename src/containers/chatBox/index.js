import React, { Component ,Fragment} from 'react';
import LoadingDots from '../../components/loadingDots';
import classnames from 'classnames';
import "./styles.css"

class ChatBox extends Component{

    render(){
        const {code,messageCount,messages,loading} = this.props
        return(
            <div className={'chatBox'}>
          {code.length > 0 && messageCount > 0 ? (
            <Fragment>
              {messages.map((msg, index) => {
                return (
                  <div
                    className={
                      index % 2 === 0
                        ? 'chats'
                        : classnames('chats', 'chat-right')
                    }
                    key={index}>
                    <img
                      src={
                        'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'
                      }
                      alt=''
                      width={'26px'}
                      height={'24px'}
                      style={{borderRadius: '50%'}}
                    />
                    <div className={
                      index % 2 === 0
                        ? 'chats-msg'
                        : classnames('chats-msg', 'chats-msg-right')
                    }>{msg.message}</div>
                  </div>
                );
              })}
            </Fragment>
          ) : null}
          {loading ? (
            <div className={classnames('chats', 'chat-right')}>
              <img
                src={
                  'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'
                }
                alt=''
                width={'26px'}
                height={'24px'}
                style={{borderRadius: '50%'}}
              />
              <div className={'chat-msg-loading'}>
                <LoadingDots />
              </div>
            </div>
          ) : null}
        </div>
        )
    }
}

export default ChatBox;