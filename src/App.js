import React, { Component } from "react";
import "./App.css";
import { Cardlist } from "./Components/card-list/card-list.component";
import { SearchBox } from "./Components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    // initializing state with empty array of monsters
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  //arrow function automatically binds the this to the place(context) where the function was defined
  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Cards</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <Cardlist monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
