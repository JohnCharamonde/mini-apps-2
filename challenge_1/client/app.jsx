import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import Results from './Results.jsx';
import Paginator from './Paginator.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      q: '',
      page: 1,
      results: [{date:'', description:''}],
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
    axios.get(`http://localhost:3000/events?q=${this.state.search}&_page=${this.state.page}`)
      .then(res => {
        this.setState({
          results: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleTyping(e) {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search handleTyping={this.handleTyping.bind(this)} handleSubmit={this.handleSubmit.bind(this)}/>
        <div style={{display: "flex"}}>
        <div style={{display: "flex", width: "20%"}}></div>
        <Results results={this.state.results}/>
        <div style={{display: "flex", width: "20%"}}></div>
        </div>
        <Paginator />
      </div>
    )
  }
}

export default App;

