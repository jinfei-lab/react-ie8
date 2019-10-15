/*
 * @Descripttion: 
 * @version: 
 * @Author: JF
 * @Date: 2019-10-14 14:51:45
 * @LastEditors: 
 * @LastEditTime: 2019-10-14 14:51:45
 */
import React from 'react'
import Routes from './router/router'
import './App.css'

class App extends React.Component {
    componentWillMount() {

    }

    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        )
    }
}

export default App