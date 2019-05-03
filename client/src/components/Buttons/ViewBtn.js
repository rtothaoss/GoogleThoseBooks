import React from "react";
import { Link } from "react-router-dom"


const ViewBtn = (props) => {
return (
    <div>
        <button style={{ float: "right", marginBottom: 10, marginLeft: 10, marginRight: 10}} className="btn btn-info" ><Link to={props.link} style={{textDecoration: "none", color: "white"}}>View</Link></button>
    </div>
)
}

export default ViewBtn