import React from 'react';

const Results = (props) => {
  return (
    <div>
      {props.results.map(event => {
        return (
          <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "center", fontSize: "18px", fontFamily: "Helvetica", borderBottom: "1px solid #D3D3D3" }}>
            <div style={{ display: "flex", width: "15%", alignItems: "center", justifyContent: "flex-start" }}>{event.date}</div>
            <div style={{ display: "flex", width: "85%", alignItems: "center", justifyContent: "flex-start" }}>{event.description}</div>
          </div>)
      })}
    </div>
  )
}

export default Results;