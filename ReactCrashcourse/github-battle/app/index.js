import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/popular'
//Component
//State
//Lifecycle
//UI
class App extends React.Component{
    render(){
        return (
        <div className='container'>
            <Popular />
        </div>)
    }
}

ReactDOM.render(
    //react element
    <App />,
    //where to render
    document.getElementById('app')
)