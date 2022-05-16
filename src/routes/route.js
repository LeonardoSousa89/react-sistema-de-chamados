import { Route,Link } from 'react-router-dom'

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    const loading = false
    const signed  = false

    if(loading){
        return(
            <div></div>
        )
    }

    if(!signed && isPrivate){
        return <Link to='/' />
    }

    if(!signed && isPrivate){
        return <Link to='/dashboard' />
    }

    return(
        <Route
            { ...rest }
            render={ props => {
               <Component {...props} />   
            } }
        />
    )
}