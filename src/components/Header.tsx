import React from 'react'
import styled from 'styled-components'

export default function Header() {
	const Wrapper = styled.header`
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 17px 0 27px;

		strong {
			a {
				color: #001a1a;
				font-weight: 600;
				font-size: 18px;
				line-height: 1;
			}
		}

		.supportBlock {
			display: flex;
			flex-wrap: wrap;

			button {
				background: none;
				border: none;
				padding: 0;
				margin: 0;

				& + button {
					margin-left: 24px;
				}
			}
		}

		.supportImg {
			cursor: pointer;
			margin-right: 25px;
		}

		.languages {
			display: flex;
			align-items: center;

			button {
				font-size: 14px;
				line-height: 1, 28571;

				&.active {
					font-weight: 600;
				}
			}
		}
	`

	return (
		<Wrapper>
			<strong>
				<a href='#'>opensgh</a>
			</strong>
			<div className='supportBlock'>
				<img
					className='supportImg'
					src='./images/icons/search.svg'
					alt='search'
				/>
				<div className='languages'>
					<button className='active'>Eng</button>
					<button>Pol</button>
				</div>
			</div>
		</Wrapper>
	)
}
