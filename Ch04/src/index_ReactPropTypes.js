import React from 'react'
import { render } from 'react-dom'
// import { SkiDayCount } from './components/ReactPropTypes/SkiDayCount_CreateClass'
// import { SkiDayCount } from './components/ReactPropTypes/SkiDayCount_ES6'
import { SkiDayCount } from './components/ReactPropTypes/SkiDayCount_Stateless'

window.React = React

render(
	// ##### CreateClass #####
	// <SkiDayCount total="lots"/>,

	// ##### ES6 & Stateless #####
	<SkiDayCount total={true} />,
	document.getElementById('react-container')
)