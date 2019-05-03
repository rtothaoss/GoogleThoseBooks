import React from "react";
import { Link } from "react-router-dom"


const DeleteBtn = ({remove, id, deleteStyle}) => {
return (
    <div>
        <button style={{ float: "right", marginBottom: 10, display: "none", ...deleteStyle}} className="btn btn-success" onClick={()=>remove(id)}>Delete</button>
    </div>
)
}

export default DeleteBtn