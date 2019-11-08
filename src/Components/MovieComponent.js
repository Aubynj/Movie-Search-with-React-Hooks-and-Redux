import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { fetchUpcomingMusic, fetchTvPopularShows, imageURL } from '../Redux/Actions/action'
import TopSection from './TopSection'

function MovieComponent(props) {
    const { fetchUpcomingMusic, fetchTvPopularShows } = props

    useEffect(() => {
        fetchUpcomingMusic()
        fetchTvPopularShows()
    }, [])
    
    const upres = useMemo(() => {
        if (props.upcoming.results !== undefined)
            return (
                props.upcoming.results.map(res => 
                    <div className="col-md-4 mb-2" key={res.id}>
                        <div className="card override-bg">
                            <img src={imageURL+res.backdrop_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{ res.original_title }</h4>
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
    },[props])

    const popul = useMemo(() => {
        if (props.popular.results !== undefined)
            return (
                props.popular.results.map(res => 
                    <div className="col-md-4 mb-2" key={res.id}>
                        <div className="card override-bg">
                            <img src={imageURL+res.backdrop_path} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{ res.name }</h4>
                                <div className="card-body-text">
                                    <p className="head-text">Release: <span className="mini">{res.first_air_date}</span></p>
                                    <p className="head-text">Popularity: <span className="mini-v">{res.popularity}</span></p>
                                    <p className="head-text">Vote: <span className="mini-v">{res.vote_count}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )
    },[props])

    let search = useMemo(() => {
        if (props.res.results !== undefined && props.res.results !== null)
            return (
                props.res.results.map(res => {
                    if (res.backdrop_path !== null) 
                        return(
                            <div className="col-md-4 mb-2" key={res.id}>
                                <div className="card override-bg">
                                    <img src={imageURL+res.backdrop_path} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title">{ res.title }</h4>
                                        <div className="card-body-text">
                                            <p className="head-text">Release: <span className="mini">{res.release_date}</span></p>
                                            <p className="head-text">Popularity: <span className="mini-v">{res.popularity}</span></p>
                                            <p className="head-text">Vote: <span className="mini-v">{res.vote_count}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) 
                    }
                )
            )
    })

    console.log(props.res.results)

    
    return (
        <div className="container-fluid">
            <TopSection />
            <h2>{ props.upcoming.results ? "Upcoming Movies" : <div className="text-center"><h2>{props.error}</h2><br/></div>}</h2><br/>
            <div className="row">
                { props.fetchLoading ? <div className="text-loader"><div className="lds-ripple"><div></div><div></div></div></div> : null}
                { upres }
            </div>
            { props.popular.results && <div><h2>Popular TV Shows</h2><br/></div>}
            <div className="row">
                { popul }
            </div>
            { props.res.results ? <div className="mt-2"><h2>Search result below...</h2><br /></div> : <div className="mt-2"><h2>{props.errMsg}</h2><br /></div>}
            <div className="row" id="search-res">
                { props.fetchLoading && <div className="text-loader"><div className="lds-ripple"><div></div><div></div></div></div>}
                { search }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        fetchLoading : state.fetch.loadingF,
        error : state.fetch.error,
        fetchLoadingP : state.popular.loadingT,
        upcoming : state.fetch.upcomingMovies,
        popular : state.popular.tvShows,
        err_p : state.popular.error,
        searchLoading : state.search.loadingS,
        res : state.search.searchResult,
        errMsg : state.search.errMsg
    }
}
export default connect(mapStateToProps, { fetchUpcomingMusic, fetchTvPopularShows })(MovieComponent)
