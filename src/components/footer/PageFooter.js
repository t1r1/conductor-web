import React, { Component } from 'react';
import './PageFooter.css'

class PageFooter extends Component {
    render () {
        return (
            <footer className="PageFooter">
                Conductor v6.8.0 / flask 0.12 / mongodb 2.6.12
            </footer>
        )
    }
}

export default PageFooter