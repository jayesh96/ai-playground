import React, {Component} from 'react';
import CodeEditor from '../../components/codeEditor';
import {Flex, Box} from 'reflexbox';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {applyCodeChanges} from './actions';
import './styles.css';

class LeftPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCodeUpdated: false,
      code: '',
    };
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  onCodeChange(code) {
    this.setState({isCodeUpdated: true, code: code});
  }
  render() {
    const {isCodeUpdated, code} = this.state;
    return (
      <Flex column>
        <div className={'tabs'}>
          <button className={classnames('tabsButton', 'activeTab')}>
            <div className={'tabsButtonText'}>main.js</div>
          </button>
          <button className={'tabsButton'}>
            <div className={'tabsButtonText'}>setup.js</div>
          </button>
          <button
            className={
              isCodeUpdated ? 'applyChangeActive' : 'applyChangeDisabled'
            }
            disabled={isCodeUpdated?false:true}
            onClick={() => {
              this.setState({isCodeUpdated:false})
              this.props.onApplyChangesClicked(code);
            }}>
            Apply Changes
          </button>{' '}
        </div>
        <div className={'editorContainer'}>
          <CodeEditor onCodeChange={this.onCodeChange} />
        </div>
      </Flex>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    onApplyChangesClicked: (code) => {
      dispatch(applyCodeChanges(code));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeftPanel);
