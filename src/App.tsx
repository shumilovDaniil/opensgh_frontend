import React from 'react'
import styled from 'styled-components'

import Header from './components/Header'

const css = require('./styles/normalize.css')

const AppWrapper = styled.div`
	background: #eceeee;
`

function App() {
	return (
		<AppWrapper>
			<Header />
		</AppWrapper>
	)
}

export default App
