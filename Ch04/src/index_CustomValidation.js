import React from 'react'
import { render } from 'react-dom'
import { SkiDayList } from './components/CustomValidation/SkiDayList.js'

window.React = React

render(
	// <SkiDayList days="lots"/>,
	<SkiDayList days={[]}/>,
	document.getElementById('react-container')
)