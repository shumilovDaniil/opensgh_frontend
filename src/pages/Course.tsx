import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'

export const Course: React.FC = () => {
	const PageWrapper = styled.div`
		padding: 0 16px;

		.backLink {
			padding: 0 0 27px 30px;
			font-size: 14px;
		}

		.courseDesc {
		}

		.feature {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}

		.courseDesc_items {
			display: flex;
			flex-wrap: wrap;

			li {
				margin-right: 24px;
				padding-bottom: 12px;

				span {
					padding-right: 6px;
				}
			}
		}
	`

	return (
		<PageWrapper>
			<Header />
			<div className='backLink'>
				<span></span>
				<a href='#'>Elective courses</a>
			</div>

			<div className='courseDesc'>
				<h2>International Business Transactions and Logistics Operations</h2>
				<div className='feature'>
					<span>121151</span>
					<span>🔖</span>
				</div>
				<ul className='courseDesc_items'>
					<li>
						<span>🔖</span>Eng
					</li>
					<li>
						<span>🔖</span>Lecture + Exercises
					</li>
					<li>
						<span>🔖</span>6 credits
					</li>
					<li>
						<span>🔖</span>100 hours
					</li>
				</ul>
			</div>
		</PageWrapper>
	)
}
