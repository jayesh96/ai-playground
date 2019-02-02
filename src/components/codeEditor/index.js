import React, {Component} from 'react';
import MonacoEditor from 'react-monaco-editor';
const options = {
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: true,
};

const defaultCode="// code changed! \n function add(j){return j+j}"
class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code... \n',
    };
  }

  onChange = (code, e) => {
    // this.setState({[`Tab${this.props.activeTab}`]:newValue});
    this.props.onCodeChange(code,this.props.activeTab);
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
    const {code,activeTab} = this.props;
    return (
      <div style={{height: '100vH'}}>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          value={code.length===0 && activeTab===0?defaultCode:code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}
export default CodeEditor;
