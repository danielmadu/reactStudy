import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
// const App = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h1>Olá {this.props.name}!!</h1>
//       </div>
//     )
//   }
// })
ReactDOM.render(<App name='Daniel Madureira' />, document.querySelector('#root'))
