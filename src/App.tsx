import React from 'react'
import styled from 'styled-components'
import { Course } from './pages/Course'

const css = require('./styles/normalize.css')

const AppWrapper = styled.div`
	background: #eceeee;
`

function App() {
	return (
		<AppWrapper>
			<Course />
		</AppWrapper>
	)
}

export default App
