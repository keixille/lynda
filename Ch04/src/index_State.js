import React from 'react'
import { render } from 'react-dom'
// import { App } from './components/State/App_CreateClass.js'
import { App } from './components/State/App_ES6.js'

window.React = React

render(
	<App />,
	document.getElementById('react-container')
)