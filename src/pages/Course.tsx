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
	`

	const CourseInfoWrapper = styled.div`
		background: #fff;
		padding: 16px 18px;
		border-radius: 24px;

		h2 {
			font-size: 28px;
			font-weight: 600;
			line-height: 1.25;
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

	const CourseRating = styled.div`
		li {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			strong {
				font-weight: 400;
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

			<CourseInfoWrapper>
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
				<CourseRating>
					<ul>
						<li>
							<strong>How easy to pass</strong>
							<span>⭐⭐⭐⭐⭐</span>
						</li>
						<li>
							<strong>Atmosphere in classes</strong>
							<span>⭐⭐⭐⭐⭐</span>
						</li>
						<li>
							<strong>How clear explanations</strong>
							<span>⭐⭐⭐⭐⭐</span>
						</li>
					</ul>
				</CourseRating>
			</CourseInfoWrapper>
		</PageWrapper>
	)
}
