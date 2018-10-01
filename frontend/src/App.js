import React from 'react';
import './App.css';
import Table from './components/Table';


class App extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    hits: [],
  };
}
  componentDidMount() {
  fetch('http://127.0.0.1:8000/general-number-api/')
    .then(response => response.json())
    .then(data => this.setState({ hits: data }));
}

  render() {
  const { hits } = this.state;
    return (
      <Table data={hits}/>
    );
  }
}


export default App;
