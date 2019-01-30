import React, {Component} from 'react';
import MonacoEditor from 'react-monaco-editor';
import safeEval from 'safe-eval'

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code... \n',
    };
  }

  onChange = (newValue, e) => {
    console.log('onChange', newValue, e); // eslint-disable-line no-console
    this.props.onCodeChange()
    this.setState({code: newValue});
  };

  editorDidMount = (editor) => {
    // eslint-disable-next-line no-console
    console.log('editorDidMount', editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  };

  changeEditorValue = () => {
    if (this.editor) {
      this.editor.setValue('// code changed! \n');
    }
  };

  changeBySetState = () => {
    this.setState({code: '// code changed by setState! \n'});
  };

  render() {
    const {code} = this.state;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: true,
    };
    return (
      <div style={{height:'100vH'}}>
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