import React, {Component, Fragment} from 'react';
// import classnames from 'classnames';
import './styles.css';
import {connect} from 'react-redux';
import safeEval from 'safe-eval';
// import LoadingDots from '../../components/loadingDots';


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
    }
  }

  evaluateCode(code, message) {
    var regex = /^[0-9]+$/;
    console.log("############")
    window.eval(`(${code})(${message})`)
    console.log("############")
    try {
      if (message.match(regex)) {
        let value = safeEval(`(${code})(${message})`);
        console.log(value, '---1');
        return value;
      } else {
        const _message = message.replace(/"/g, "'");
        let value = safeEval(`(${code})("${_message}")`);
        console.log(value, '---2');
        return value;
      }
    } catch (err) {
      return 'undefined';
    }
  }
  // function square(b) { return b * b; }
  render() {
    const {code, message} = this.state;
    return (
      <Fragment>
        <div className={'chatBox'}>
          {this.props.code.length > 0 && message.length ? (
            <div className={'chats'}>
              <img
                src={
                  'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'
                }
                width={'26px'}
                height={'24px'}
                style={{borderRadius: '50%'}}
              />
              <div className={'chats-msg'}>
                {this.evaluateCode(code, message)}
              </div>
            </div>
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
  return {code: state.applyCodeChanges.get('code')};
};

export default connect(
  mapStateToProps,
  null,
)(RightPanel);
