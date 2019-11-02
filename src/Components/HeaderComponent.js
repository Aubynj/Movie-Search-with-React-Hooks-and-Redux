import React from 'react'

function HeaderComponent(props) {
    console.log(props)
    return (
        <header className="navbar sticky-top navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
                <img src={props.logo} width="40" height="40" className="d-inline-block align-top" alt="" /> 
                <div  className="brand-head">
                    <span>Movies</span>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                   
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2 top-search" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn custom-outline-component my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </header>
    )
}

export default HeaderComponent
