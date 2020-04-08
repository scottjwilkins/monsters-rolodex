import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchBox: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => {
           response.json()
            .then(monsters => {
                this.setState({
                    monsters,
                })
            })
        })
        .catch(e => {
            console.log(e);
        })
    }

    _handleSearch = searchBox => {
        this.setState({searchBox})
    };

    render () {
        const {
            monsters,
            searchBox,
        } = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchBox.toLowerCase()));

        return (
            <div className="App">
                <h1>Monster's Rolodex</h1>
                <SearchBox
                    value={this.state.searchBox}
                    handleSearch={this._handleSearch}
                    placeholder={'search monsters'}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

