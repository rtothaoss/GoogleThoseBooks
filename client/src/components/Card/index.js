import React from 'react'

import ViewBtn from '../Buttons/ViewBtn'
import SaveBtn from '../Buttons/SaveBtn'
import DeleteBtn from '../Buttons/DeleteBtn'



const Card = props => {
    return (
        <div className="card">
            <h5 className="card-header text-left">{props.title}<SaveBtn save={props.save} id={props.id} saveStyle={props.saveStyle}>Save</SaveBtn><ViewBtn link={props.link}>View</ViewBtn><DeleteBtn remove={props.remove} id={props.id} deleteStyle={props.deleteStyle}>Delete</DeleteBtn></h5>
            <div className="card-body">
                <div className='row'>
                    <div className='col-md-3'>
                        <p className="card-title text-center">Written by {props.author}</p>
                        <img src={props.image} alt='harry potter' />
                    </div>
                    <div className='col-md-9 text-left'>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

