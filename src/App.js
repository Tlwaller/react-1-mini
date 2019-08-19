import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    };
  }

  updatePicture(val) {
      this.setState({picture: val})
  }

  updateName(val) {
    this.setState({name: val})
  }

  addFriend() {
    const {friends, picture, name} = this.state;
    let newFriends = friends.slice();
    newFriends.push({picture, name});
    this.setState({friends: newFriends, picture: '', name: ''});
    console.log(friends)
  }

    render() {
      const friends = this.state.friends.map(function(e, i, arr) {
        return (
          <div>
            <img src={e.picture} />
            <span>{e.name}</span>
          </div>
      )})
      return (
        <div className="App">
          <input placeholder='Image URL' onChange={(e) => this.updatePicture(e.target.value)} value={this.state.picture} />
          <input placeholder='Name' onChange={(e) => this.updateName(e.target.value)} value={this.state.name} />
          <button onClick={() => this.addFriend()} >Add Friend</button>
          {friends}
        </div>
      );
    }
  }

export default App;
