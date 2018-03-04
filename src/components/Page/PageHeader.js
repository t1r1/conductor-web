import React, { Component } from 'react';
import './PageHeader.css'
import '../../App.css'

class PageHeader extends Component {
    render () {
        return (
            <header className="PageHeader">
                <div className="PageHeader_Brand">
                    <h1><a href="/">CONDUCTOR</a></h1>
                </div>
                <nav className="PageHeader_Mainmenu">
                    <ul className="PageHeader_Mainmenu_List">
                        <li><a href="/">Datacenters</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/groups">Groups</a></li>
                        <li><a href="/hosts">Hosts</a></li>
                        <li><a href="/users">Users</a></li>
                        <li><a href="/">Action Log</a></li>
                    </ul>
                </nav>
                <div className="PageHeader_Account">
                    <div className="PageHeader_Account_Avatar">
                        <img className="PageHeader_Account_Avatar_Pic" src="/avatar.png" alt="avatar"/>
                    </div>
                </div>
            </header>
        )
    }
}

export default PageHeader