import React,{Component} from 'react';
import CodeEditor from '../codeEditor';
import {Flex, Box} from 'reflexbox';
import classnames from 'classnames';
import './styles.css';

class LeftPanel extends Component{

    constructor(props){
        super(props);
        this.state={
            isCodeUpdated:false
        }
        this.onCodeChange = this.onCodeChange.bind(this)
    }

    onCodeChange(){
        this.setState({isCodeUpdated:true})
    }
    render(){
        const {isCodeUpdated} = this.state
        return (
            <Flex column>
            <div className={'tabs'}>
            <button className={classnames('tabsButton','activeTab')}><div className={'tabsButtonText'}>main.js</div></button>
            <button className={'tabsButton'}><div className={'tabsButtonText'}>setup.js</div></button>

            <button className={isCodeUpdated?'applyChangeActive':'applyChangeDisabled'}>Apply Changes</button>
            </div>
            <div className={'editorContainer'}>
              <CodeEditor onCodeChange={this.onCodeChange}/>
            </div>
          </Flex>
        )
    }
}

export default LeftPanel