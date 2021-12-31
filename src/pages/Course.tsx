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
		margin-bottom: 8px;

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

	const TeacherInfo = styled.div`
		background: #fff;
		padding: 16px 18px;
		border-radius: 24px;
		margin-bottom: 8px;

		.teacherTop {
			display: flex;
			flex-wrap: nowrap;
			align-items: center;
			justify-content: space-between;

			img {
				margin-right: 8px;
			}
		}

		.teacherName {
			margin-bottom: 8px;

			h4 {
				font-weight: 600;
				font-size: 20px;
				line-height: 25px;
				color: #001a1a;
				margin-bottom: 2px;
			}

			strong {
				font-size: 13px;
				line-height: 17px;
				color: #686f78;
			}
		}
	`

	const SubjectAbout = styled.div`
		background: #fff;
		padding: 16px 18px;
		border-radius: 24px;
    mix-blend-mode
	`

	return (
		<PageWrapper>
			<Header />
			<div className='backLink'>
				<span></span>
				<a href='#'>Elective courses</a>
			</div>

			{/* COURSE INFO COMPONENT */}
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

			{/* TEACHER INFO COMPONENT */}
			<TeacherInfo>
				<div className='teacherTop'>
					<img src='./images/teacher_photo.png' alt='Teacher photo' />
					<div className='teacherName'>
						<h4>dr Lucasz Dwilewicz</h4>
						<strong>
							Professor, doctor of the College of Economic Analyzes
						</strong>
					</div>
				</div>
				<div className='teacherContacts'>
					<ul>
						<li>
							<a href='mailto:doro@sgh.waw.pl'>doro@sgh.waw.pl</a>
						</li>
						<li>
							<a href='mailto:doro@sgh.waw.pl'>
								slawomir.dorosiewicz@sgh.waw.pl009004{' '}
							</a>
						</li>
					</ul>
					<a href='#'>
						See all 18 reviews<span></span>
					</a>
				</div>
			</TeacherInfo>

			<SubjectAbout>
				<h4>About</h4>
				<p>
					Algebra - a major in the field of quantitative methods in economics
					and information systems, implemented during the studies of the first
					degree. The aim of the course is to complete t...
				</p>
				<a href='#'>Show all</a>

				<h5>Study plan</h5>
				<ol>
					<li>
						Algebra - a major in the field of quantitative methods in economics
						and
					</li>
					<li>information systems, implemented...</li>
				</ol>
				<a href='#'>Show all</a>

				<strong>minor</strong>
				<a href='#'>
					European Economic Integration Towards Global Challenges<span></span>
				</a>
			</SubjectAbout>
		</PageWrapper>
	)
}
