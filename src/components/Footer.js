import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="mt-4 text-center font-smaller">
                <p className="small-text footer"> with <i className="fa fa-heart" style={{color: "red"}}></i> by <a href="https://bit.ly/atutechs" target="_blank" rel="noreferrer">Atutechs Corp</a> | noteKratx &copy; {new Date().getFullYear()} </p>
            </div>
        )
    }
}

export default  Footer