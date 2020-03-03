import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      q: '',
      page: 1,
      results: [],
      search: ''
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/events?q=${this.state.q}&_page=${this.state.page}`)
      .then(res => {
        this.setState({
          results: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleSubmit(e) {
    this.setState({
      q: this.state.search,
      page: 1
    })
  }

  handleTyping(e) {
    this.setState({
      search: e.target.value
    })
  }


  render() {
    return (
      <div>
        <Search handleTyping={this.handleTyping.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}

export default App;

