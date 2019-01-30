import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import './styles.css';
import {connect} from 'react-redux';
import safeEval from 'safe-eval';

const val = 'Hello';

class RightPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
  }

  componentWillReceiveProps(nextProps, prevState) {
    this.setState({code: `(${nextProps.code}(${5}))`});
  }

  render() {
    return (
      <Fragment>
        <div className={'chatBox'}>
          {this.props.code.length > 0 ? (
            <div className={'chats'}>
              <img
                src={
                  'http://images.clipartpanda.com/user-clipart-acspike_male_user_icon.png'
                }
                width={'26px'}
                height={'24px'}
                style={{borderRadius: '50%'}}
              />
              <div className={'chats-msg'}>{safeEval(this.state.code)}</div>
            </div>
          ) : null}
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

const mapStateToProps = (state) => {
  return {code: state.applyCodeChanges.get('code')};
};

export default connect(
  mapStateToProps,
  null,
)(RightPanel);
