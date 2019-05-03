import React from "react";



export function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function SaveBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function ViewBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, marginLeft: 10, marginRight: 10 }} className="btn btn-info">
      {props.children} 
    </button>
  );
}