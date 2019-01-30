import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import RightPanel from '../rightPanel';
import LeftPanel from '../leftPanel';
import './styles.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex column>
        <Box w={1}>
          <div className={'header'}>
            <div className={'header-title'}>
              AI Playground
            </div>
          </div>
        </Box>
        <Box w={1}>
          <Flex>
            <Box w={2 / 5} className={'ide'}>
              <LeftPanel/> 
            </Box>
            <Box w={3 / 5} style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
            <RightPanel/>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

export default Main;
