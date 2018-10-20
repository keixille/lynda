import React from 'react'
import { render } from 'react-dom'
// import { SkiDayCount } from './components/CreateComponent/SkiDayCount_Basic'
// import { SkiDayCount } from './components/CreateComponent/SkiDayCount_CreateClass'
// import { SkiDayCount } from './components/CreateComponent/SkiDayCount_ES6'
import { SkiDayCount } from './components/CreateComponent/SkiDayCount_Stateless'

window.React = React

render(
	<SkiDayCount total={50}
				 powder={20}
				 backcountry={10}
				 goal={100} />,
	document.getElementById('react-container')
)