/**
 * Protected routes
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import querries from '../utils/querries'

const DashboardRoute = ({ component: Component, ...rest }) => {
    return ( <
        div className = 'dashboard-wrapper' >
        <
        Navbar / >
        <
        Route {...rest }
        render = {
            props =>
            querries.isAuthorized(props.history) ? ( <
                Component {...props }
                />
            ) : ( <
                Redirect to = {
                    {
                        pathname: '/auth',
                        state: { from: props.location }
                    }
                }
                />
            )
        }
        />{' '} <
        Footer showSocials / >
        <
        /div>
    )
}

export default DashboardRoute