import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    // in here is where we return the higher order component
    return (props) => (
        <div>
            {props.isAdmin && <p>This is sensitive information. Do not share!</p> }
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Login to view the info</p> }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="these are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details" />, document.getElementById('app'))