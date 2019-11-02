import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { fetchUpcomingMusic, fetchTvPopularShows } from '../Redux/Actions/action'
import TopSection from './TopSection'

function MovieComponent(props) {
    
    useEffect(() => {
        props.fetchUpcomingMusic()
    }, [])
    
    const upres = useMemo(() => {
        const imageURL = "https://image.tmdb.org/t/p/w500/"
        if (props.upcoming.results !== undefined)
            return (
                props.upcoming.results.map(res => 
                    <div className="col-md-4 mb-5" key={res.id}>
                        <div className="card override-bg">
                            <img src={imageURL+res.backdrop_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{ res.original_title }</h4>
                                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                
                                <div className="card-body-text">
                                    <p className="head-text">Release: <span className="mini">{res.release_date}</span></p>
                                    <p className="head-text">Popularity: <span className="mini-v">{res.popularity}</span></p>
                                    <p className="head-text">Vote: <span className="mini-v">{res.vote_count}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )
    })

    console.log(props.upcoming.results)

    return (
        <div className="container-fluid">
            <TopSection />
            <h2>{ props.upcoming.results ? "Upcoming Movies" : null}</h2><br/>
            <div className="row">
                { upres }
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        upcoming : state.fetch.upcomingMovies
    }
}
export default connect(mapStateToProps, { fetchUpcomingMusic, fetchTvPopularShows })(MovieComponent)
