import React, {Component} from 'react';
import MonacoEditor from 'react-monaco-editor';
import {options,defaultCode} from './constants'
class CodeEditor extends Component {
  onChange = (code, e) => {
    // this.setState({[`Tab${this.props.activeTab}`]:newValue});
    this.props.onCodeChange(code,this.props.activeTab);
  };

  editorDidMount = (editor) => {
    this.editor = editor;
  };

  render() {
    const {code,activeTab} = this.props;
    console.log(code,"----->")
    return (
      <div style={{height: '100vH'}}>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}
export default CodeEditor;
