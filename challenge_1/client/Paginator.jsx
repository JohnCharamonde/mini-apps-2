import React from 'react';

const Paginator = (props) => {
  return (
    <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-evenly", fontSize: "18px", fontFamily: "Helvetica", color:"#0000EE"}}>
      <div onClick={(e) => {props.handlePaginatorClick('first', e)}}>Beggining of Time...</div>
      <div onClick={(e) => {props.handlePaginatorClick('previous', e)}}>...Earlier...</div>
      <div style={{color: "black"}}>Page: {props.page}</div>
      <div onClick={(e) => {props.handlePaginatorClick('next', e)}}>...More Recent...</div>
      <div onClick={(e) => {props.handlePaginatorClick('last', e)}}>...Present Day</div>
    </div>
  )
}

export default Paginator;