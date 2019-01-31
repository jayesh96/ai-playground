import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import './styles.css';
import {connect} from 'react-redux';
import safeEval from 'safe-eval';
// import LoadingDots from '../../components/loadingDots';
import {addMessage} from './actions';

class RightPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      message: '',
    };
    this.messageSubmit = this.messageSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps, prevState) {
    this.setState({code: nextProps.code});
  }

  messageSubmit(e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      this.setState({message: e.target.value});
      this.props.addMessage(e.target.value);
      this.evaluateCode(this.state.code, e.target.value)
    }
  }

  evaluateCode(code, message) {
    var regex = /^[0-9]+$/;
    try {
      if (message.match(regex)) {
        let value = safeEval(`(${code})(${message})`);
        this.props.addMessage(value);
        return value;
      } else {
        const _message = message.replace(/"/g, "'");
        let value = safeEval(`(${code})("${_message}")`);
        this.props.addMessage(value);
        return value;
      }
    } catch (err) {
      this.props.addMessage('Oops! '+err.toString());
      return 'NIL';
    }
  }
  
  render() {
    const {code, message} = this.state;
    const {messages} = this.props;
    return (
      <Fragment>
        <div className={'chatBox'}>
          {this.props.code.length > 0 && message.length ? (
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
        </div>
        <div className={'messageBox'}>
          <div className={'Rectangle-3'}>
            <div style={{width: '100%'}}>
              <input
                type="text"
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
