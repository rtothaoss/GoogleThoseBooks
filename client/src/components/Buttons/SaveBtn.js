import React from "react";
import { Link } from "react-router-dom"


const SaveBtn = ({save, id, saveStyle}) => {
return (
    <div>
        <button style={{ float: "right", marginBottom: 10, ...saveStyle }} className="btn btn-success" onClick={()=>save(id)}>Save</button>
    </div>
)
}

export default SaveBtn