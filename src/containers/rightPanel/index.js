import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import './styles.css';
import {connect} from 'react-redux';
import {addMessage} from './actions';
import LoadingDots from '../../components/loadingDots';
import '../../scripts/main';

class RightPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      message: '',
      messageCount: 0,
      loading: false,
    };
    this.messageSubmit = this.messageSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps, prevState) {
    this.setState({code: nextProps.code});
  }

  messageSubmit(e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      this.setState({
        messageCount: this.state.messageCount + 1,
        message: '',
        loading: true,
      });
      this.props.addMessage(e.target.value);
      this.evaluateCode(this.state.code, e.target.value);
    }
  }

  async evaluateCode(code, message) {
    var regex = /^[0-9]+$/;
    try {
      if (message.match(regex)) {
        let value = await eval(`(${code})(${message})`);
        this.props.addMessage(value);
        this.setState({loading: false});
        return value;
      } else {
        const _message = message.replace(/"/g, "'");
        let value = await eval(`(${code})("${_message}")`);
        this.props.addMessage(value);
        this.setState({loading: false});
        return value;
      }
    } catch (err) {
      this.props.addMessage('Oops! ' + err.toString());
      this.setState({loading: false});
      return 'NIL';
    }
  }

  render() {
    const {messageCount, message, loading} = this.state;
    const messages = this.props.messages;
    return (
      <Fragment>
        <div className={'chatBox'}>
          {this.props.code.length > 0 && messageCount > 0 ? (
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
                      width={'26px'}
                      height={'24px'}
                      style={{borderRadius: '50%'}}
                    />
                    <div className={'chats-msg'}>{msg.message}</div>
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
        <div className={'messageBox'}>
          <div className={'Rectangle-3'}>
            <div style={{width: '100%'}}>
              <input
                type="text"
                value={message}
                onChange={(e) => {
                  this.setState({message: e.target.value});
                }}
                placeholder="Your Message Here"
                className={'Type-message-here'}
                onKeyPress={this.messageSubmit}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {code: state.applyCodeChanges.get('code'), messages: state.addMessage};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (payload) => {
      dispatch(addMessage(payload));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RightPanel);
