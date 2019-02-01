import React, {Component} from 'react';
// eslint-disable-next-line import/no-unresolved, import/extensions
/* eslint-enable import/no-extraneous-dependencies */
import Main from './containers/main';
// Using with webpack
class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <Main />;
    }
}

export default App;
