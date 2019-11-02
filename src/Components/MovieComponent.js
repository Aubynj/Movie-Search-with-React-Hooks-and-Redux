import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUpcomingMusic, fetchTvPopularShows } from '../Redux/Actions/action'

function MovieComponent(props) {
    
    useEffect(() => {
        props.fetchUpcomingMusic()
    }, [])

    console.log("Upcoming movies ::: ", props.upcoming)

    return (
        <div>
            <p>Movie will be displayed here</p>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        upcoming : state.fetch.upcomingMovies
    }
}
export default connect(mapStateToProps, { fetchUpcomingMusic, fetchTvPopularShows })(MovieComponent)
