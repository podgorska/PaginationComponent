import React, { Component } from 'react';
import PaginationComponent from './PaginationComponent';
import { encodeStrings } from './functions';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
        }
    }

    onChange = (arg) => {
        let { currentPage } = this.state;
        if (arg === 'previous') {
            currentPage -= 1;
        }
        if (arg === 'next') {
            currentPage += 1;
        }
        this.setState({
            currentPage
        })
    };

    render() {
        const {currentPage } = this.state;
        return (
            <div className="App">
                {encodeStrings('abc', 'aab', 'cbd')}
                <PaginationComponent
                    itemsCount={12}
                    itemsPerPage={2}
                    currentPage={currentPage}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default App;