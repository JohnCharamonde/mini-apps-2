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
      results: [{ date: '', description: '' }],
      search: '',
      first: '',
      next: '',
      last: ''
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/events?q=${this.state.q}&_page=${this.state.page}`)
      .then(res => {
        this.setState({
          results: res.data,
          first: res.headers.link.split(',')[0].split(';')[0],
          next: res.headers.link.split(',')[1].split(';')[0],
          last: res.headers.link.split(',')[2].split(';')[0]
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
    axios.get(`http://localhost:3000/events?q=${this.state.search}&_page=1`)
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

  handlePaginatorClick(category, e) {
    let uri;
    if(category === 'first') {
       uri = this.state.first;
    } else if(category === 'previous') {
      if(this.state.page > 1) {
        uri = `http://localhost:3000/events?q=${this.state.q}&_page=${this.state.page - 1}`;
      }
    } else if(category === 'next') {
      uri = this.state.next;
    } else if(category === 'last') {
      uri = this.state.last;
    }
    console.log(uri)
    axios.get(uri)
      .then(res => {
        this.setState({
          results: res.data,
          first: res.headers.link.split(',')[0].split(';')[0],
          next: res.headers.link.split(',')[1].split(';')[0],
          last: res.headers.link.split(',')[2].split(';')[0]
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search handleTyping={this.handleTyping.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", width: "20%" }}></div>
          <Results results={this.state.results} />
          <div style={{ display: "flex", width: "20%" }}></div>
        </div>
        <div style={{ height: "40px" }}></div>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", width: "20%" }}></div>
          <Paginator page={this.state.page} handlePaginatorClick={this.handlePaginatorClick.bind(this)}/>
          <div style={{ display: "flex", width: "20%" }}></div>
        </div>
      </div>
    )
  }
}

export default App;

