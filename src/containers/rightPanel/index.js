import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import './styles.css';
import {connect} from 'react-redux';

class RightPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <div className={'chatBox'}>
          {this.props.applyCodeChanges.map((chat, index) => {
            return (
              <div
                className={
                  index % 2 == 0 ? 'chats' : classnames('chats', 'chat-right')
                }>
                <img
                  src={
                    'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'
                  }
                  width={'26px'}
                  height={'24px'}
                  style={{borderRadius: '50%'}}
                />
                <div className={'chats-msg'}>
                  {chat.code}
                </div>
              </div>
            );
          })}
        </div>
        <div className={'messageBox'}>
          <div className={'Rectangle-3'}>
            <p className={'Type-message-here'}>Type message here…</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps,
  null,
)(RightPanel);
