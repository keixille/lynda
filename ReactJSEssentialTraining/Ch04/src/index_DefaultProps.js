import React from 'react'
import { render } from 'react-dom'
// import { SkiDayCount } from './components/DefaultProps/SkiDayCount_CreateClass'
// import { SkiDayCount } from './components/DefaultProps/SkiDayCount_ES6'
import { SkiDayCount } from './components/DefaultProps/SkiDayCount_Stateless'

window.React = React

render(
	<SkiDayCount />,
	document.getElementById('react-container')
)