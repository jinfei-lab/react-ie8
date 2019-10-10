import React from 'react'
import Routes from './router/router'


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