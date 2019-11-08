import React from 'react'
import { imageURL } from '../Redux/Actions/action'

function RenderComponent(props) {
    return (
            <div className="card override-bg">
                <img src={imageURL+props.pic} className="card-img-top" alt="movie_picture" />
                <div className="card-body">
                    <h4 className="card-title">{ props.name }</h4>
                    <div className="card-body-text">
                        <p className="head-text">Release: <span className="mini">{props.release}</span></p>
                        <p className="head-text">Popularity: <span className="mini-v">{props.popular}</span></p>
                        <p className="head-text">Vote: <span className="mini-v">{props.vote}</span></p>
                    </div>
                </div>
            </div>
    )
}

export default RenderComponent
