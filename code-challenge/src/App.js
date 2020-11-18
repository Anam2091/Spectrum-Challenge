import React from 'react';
import './App.css';
import API from './Api';
import Table from './Table'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };

  }

  async componentDidMount() {
    let userData = await API.get('/restaurants');
    // Parse the results for ease of use.
    // userData = userData.data.results[0];
    console.log(userData.data)
    this.setState({
      restaurants: userData.data
    })
}

  render() {
    return (
      <div>
        <Table restaurants={this.state.restaurants}/>
      </div>
    );
  }
}

 
export default App;
