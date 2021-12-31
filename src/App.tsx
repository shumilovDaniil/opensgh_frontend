import React from 'react'
import styled from 'styled-components'
import { Course } from './pages/Course'

const css = require('./styles/normalize.css')
const fonts = require('./styles/fonts.css')
const icomoon = require('./styles/icomoon.css')

const AppWrapper = styled.div`
	font-family: 'Epilogue', sans-serif;
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
