import React from 'react'
import { render } from 'react-dom'
// --- Create components using CreateClass() ---
//import { SkiDayCount } from "./components/CreateComponents/SkiDayCount_CreateClass

// --- Create components using ES6 class syntax ---
//import { SkiDayCount } from "./components/CreateComponents/SkiDayCount_ES6"

// --- Create components using Stateless functional ---
//import { SkiDayCount } from "./components/CreateComponents/SkiDayCount_Stateless"

// --- Add icons to components ---
import { SkiDayCount } from "./components/SkiDayCount"

window.React = React

render(
	<SkiDayCount
		total={50}
		powder={20}
		backcountry={10}
		goal={100}/>,
	document.getElementById('react-container')
)