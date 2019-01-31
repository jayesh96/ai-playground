import React, {Component} from 'react';
import MonacoEditor from 'react-monaco-editor';
import safeEval from 'safe-eval';

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code... \n',
    };
  }

  onChange = (newValue, e) => {
    this.props.onCodeChange(newValue);
  };

  editorDidMount = (editor) => {
    this.editor = editor;
  };

  changeEditorValue = () => {
    if (this.editor) {
      this.setState('// code changed! \n');
    }
  };

  changeBySetState = () => {
    this.setState({code: '// code changed by setState! \n'});
  };

  render() {
    const {code} = this.props;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: true,
    };
    return (
      <div style={{height: '100vH'}}>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={code}
          defaultValue = {this.state.code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}
export default CodeEditor;
