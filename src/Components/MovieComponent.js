import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { fetchUpcomingMusic, fetchTvPopularShows } from '../Redux/Actions/action'
import TopSection from './TopSection'
import RenderComponent from './renderComponent'

function MovieComponent(props) {
    const { fetchUpcomingMusic, fetchTvPopularShows } = props

    useEffect(() => {
        fetchUpcomingMusic()
        fetchTvPopularShows()
    }, [fetchUpcomingMusic, fetchTvPopularShows])
    
    const upres = useMemo(() => {
        if (props.upcoming.results !== undefined)
            return (
                props.upcoming.results.map(res => 
                    <div className="col-md-4 mb-2" key={res.id}>
                        <RenderComponent 
                            name={res.original_title}
                            pic={res.backdrop_path} 
                            release={res.release_date}
                            popular={res.popularity} 
                            vote={res.vote_count} />
                    </div>
                )
            )
    },[props])

    const popul = useMemo(() => {
        if (props.popular.results !== undefined)
            return (
                props.popular.results.map(res => 
                    <div className="col-md-4 mb-2" key={res.id}>
                        <RenderComponent 
                            id={res.id} 
                            name={res.name}
                            pic={res.backdrop_path} 
                            release={res.first_air_date}
                            popular={res.popularity} 
                            vote={res.vote_count} />
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
                                <RenderComponent 
                                    id={res.id} 
                                    name={res.title}
                                    pic={res.backdrop_path} 
                                    release={res.release_date}
                                    popular={res.popularity} 
                                    vote={res.vote_count} />
                            </div>
                        )
                    return null
                    }
                )
            )
    },[props])
  
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
