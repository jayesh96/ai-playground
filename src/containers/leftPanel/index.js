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
      tabsCount: ['Tab1', 'Tab2', 'Tab3'],
      activeTab: 2,
    };
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  onCodeChange(code) {
    this.setState({isCodeUpdated: true, code: code});
  }
  
  render() {
    const {isCodeUpdated, code, tabsCount, activeTab} = this.state;
    return (
      <Flex column>
        <div className={'tabs'}>
          {tabsCount.map((tab, index) => {
            return (
              <button
                className={classnames(
                  'tabsButton',
                  activeTab === index ? 'activeTab' : '',
                )}
                onClick={() => {
                  this.setState({activeTab: index});
                }}>
                <div className={'tabsButtonText'}>{tab}</div>
              </button>
            );
          })}

          <span
            style={{cursor: 'pointer', padding: '8px'}}
            onClick={() =>
              this.setState({
                tabsCount: [
                  ...this.state.tabsCount,
                  `Tab${tabsCount.length + 1}`,
                ],
              })
            }>
            <img
              style={{height: '8px', width: '8px'}}
              src="../../../public/icons/shape@3x.png"
            />
          </span>
          <span style={{float: 'right'}}>
            <button
              className={
                isCodeUpdated ? 'applyChangeActive' : 'applyChangeDisabled'
              }
              disabled={isCodeUpdated ? false : true}
              onClick={() => {
                this.setState({isCodeUpdated: false});
                this.props.onApplyChangesClicked(code);
              }}>
              <img
                src="../../../public/icons/refresh@3x.png"
                style={{
                  float: 'left',
                  marginRight: '0.5em',
                  width: '11px',
                  height: '12px',
                }}
              />
              Apply Changes
            </button>
          </span>
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
    onApplyChangesClicked: (payload) => {
      dispatch(applyCodeChanges(payload));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LeftPanel);
