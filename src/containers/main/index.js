import React, {Component} from 'react';
import {Flex, Box} from 'reflexbox';
import RightPanel from '../rightPanel';
import LeftPanel from '../leftPanel';
import Header from '../../components/header';
import './styles.css';

class Main extends Component {
  render() {
    return (
      <Flex column>
        <Box w={1}>
          <Header title={'AI Playground'}/>
        </Box>
        <Box w={1}>
          <Flex>
            <Box w={2 / 5} className={'ide'}>
              <LeftPanel/> 
            </Box>
            <Box w={3 / 5} className={'bot'}>
           {
            <RightPanel/>
           }
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

export default Main;
