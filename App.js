import React,{Component} from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved, import/extensions
import MonacoEditor from 'react-monaco-editor';
/* eslint-enable import/no-extraneous-dependencies */
import Main from './src/containers/main';
// Using with webpack

class App extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <Main/>
        )
    }
}

export default App;



