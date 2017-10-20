import React, { Component } from 'react';

import List from './components/List';
import Input from './components/Input';
import Search from './components/Search';


class App extends Component {
  render() {
    return (
      <div>
        <Input />
        <Search />
        <List />
      </div>
    );
  }
}

export default App;
