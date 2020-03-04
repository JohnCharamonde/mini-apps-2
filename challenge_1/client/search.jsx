import React from 'react';

const Search = (props) => {
  return (
    <div>
      <div style={{ display: "flex", height: "100px", width: "100%", alignItems: "center", justifyContent: "center" }}>
        <input type="text" style={{ height: "50px", width: "750px", fontSize: "18px" }} onChange={(e) => { props.handleTyping(e) }}></input>
        <div style={{ height: "50px", width: "50px" }}></div>
        <button style={{ height: "50px", width: "100px", fontSize: "18px" }} onClick={(e) => { props.handleSubmit(e) }}>Search</button>
      </div>
      <div style={{ height: "10px", width: "100%" }}></div>
    </div>
  )
}

export default Search;