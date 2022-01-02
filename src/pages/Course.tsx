import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header'

export const Course: React.FC = () => {
	const PageWrapper = styled.div`
		padding: 0 16px 24px;

		.backLink {
			display: flex;
			align-items: center;
			margin: 0 0 24px 0;
			font-size: 14px;
			color: #686f78;

			img {
				margin-right: 9px;
			}
		}
	`
	const CourseInfoWrapper = styled.div`
		background: #fff;
		padding: 16px 18px 6px;
		border-radius: 24px;
		margin-bottom: 8px;

		h2 {
			font-size: 28px;
			font-weight: 600;
			line-height: 1.25;
			margin-bottom: 8px;
		}

		.feature {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			font-size: 14px;
			line-height: 18px;
			color: #686f78;
			margin-bottom: 11px;
		}

		.courseDesc_items {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 15px;

			li {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				font-size: 16px;
				color: #002222;
				line-height: 14px;
				padding-bottom: 5px;
				margin: 0 24px 5px 0;

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
			align-items: center;
			margin-bottom: 6px;

			strong {
				font-weight: 400;
				font-size: 14px;
			}

			.stars {
				margin-right: 24px;

				img + img {
					margin-left: 4px;
				}
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
		margin-bottom: 8px;
	`
	const Reviews = styled.div`
		background: #fff;
		padding: 16px 18px;
		border-radius: 24px;
		margin-bottom: 8px;
	`
	const OtherTeachers = styled.div`
		background: #fff;
		padding: 16px 18px;
		border-radius: 24px;
		margin-bottom: 8px;

		.teacherItemTop {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
		}

		.teacherItemInfo {
			display: flex;
			flex-wrap: wrap;
			align-items: center;

			img {
				margin-right: 8px;
			}
		}
	`

	return (
		<PageWrapper>
			<Header />

			<a className='backLink' href='#'>
				<img src='images/icons/arrow-left.svg' alt='arrow back' />
				Elective courses
			</a>

			{/* COURSE INFO COMPONENT */}
			<CourseInfoWrapper>
				<h2>International Business Transactions and Logistics Operations</h2>
				<div className='feature'>
					<span>121151</span>
					<span>
						<img src='./images/icons/save.svg' alt='' />
					</span>
				</div>
				<ul className='courseDesc_items'>
					<li>
						<span>
							<img src='./images/icons/globus.svg' alt='globus icon' />
						</span>
						Eng
					</li>
					<li>
						<span>
							<img src='./images/icons/circle.svg' alt='circle icon' />
						</span>
						Lecture + Exercises
					</li>
					<li>
						<span>
							<img src='./images/icons/diamond.svg' alt='diamond icon' />
						</span>
						6 credits
					</li>
					<li>
						<span>
							<img src='./images/icons/time.svg' alt='time icon' />
						</span>
						100 hours
					</li>
				</ul>
				<CourseRating>
					<ul>
						<li>
							<strong>How easy to pass</strong>
							<span className='stars'>
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-white.svg' alt='star white' />
							</span>
						</li>
						<li>
							<strong>Atmosphere in classes</strong>
							<span className='stars'>
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-white.svg' alt='star white' />
								<img src='./images/icons/star-white.svg' alt='star white' />
							</span>
						</li>
						<li>
							<strong>How clear explanations</strong>
							<span className='stars'>
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-black.svg' alt='star black' />
								<img src='./images/icons/star-white.svg' alt='star white' />
							</span>
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

			{/* REVIEWS BLOCK */}
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

			<Reviews>
				<h4>Reviews</h4>
				<span className='reviewsCounter'>18</span>

				{/* Sign/Log warning ==> Component */}
				<strong>Log in or sign up to write a review or a comment.</strong>
				<button>Log in</button>
				<button>Sign up</button>

				{/* Comment component */}

				<div className='userCommentInfo'>
					<img src='/images/user_photo.png' alt='User photo' />
					<strong>Giorgio Z</strong>
					<span className='userCommentTime'>50 min</span>
				</div>
				<div className='userRating'>
					<span>Overall</span>
					<span>4,5 ⭐</span>
				</div>

				<div className='commentContent'>
					<p>
						The course was very comprehensive and easy to understand. The
						instructors made sure that they are giving the information in a way
						that won't make me confused. Thank you so much for this great
						course!
					</p>
				</div>

				<div className='commentOptions'>
					<a href='#'>Reply</a>
					<div className='commentRating'>
						<button>👍</button>
						<button>👎</button>
					</div>
				</div>
			</Reviews>

			{/* OTHER_TEACHERS BLOCK */}
			<OtherTeachers>
				<h2>This course with other teachers</h2>

				<div className='teacherItems'>
					<div className='teacherItem'>
						<div className='teacherItemTop'>
							<div className='teacherItemInfo'>
								<img src='images/teacher-mini_photo.png' alt='Teacher photo' />
								<strong>dr Anna jarosz-Nojszewska</strong>
							</div>
							<div className='addToFavorite'>🔖</div>
						</div>
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
					</div>
				</div>
			</OtherTeachers>
		</PageWrapper>
	)
}
