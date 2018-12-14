// Higher order component (HOC) - A componenet that renders another componenet

import React from 'react'
import ReactDom from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, Please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to system</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)



// ReactDom.render(<AdminInfo isAdmin={true} info="there are the details" />, document.getElementById('app'))
ReactDom.render(<AuthInfo isAuthenticated={true} info="there are the details" />, document.getElementById('app'))