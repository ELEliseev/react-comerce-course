import React from 'react'
const withClass = (Component, className) => {
    console.log("cn ", className)
    return (props) => {
        return (
            <div className={className}>
                <Component {...props} />
            </div>
        )
    }
}
export default withClass