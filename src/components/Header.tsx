import React from 'react'
import styled from 'styled-components'

export default function Header() {
	const HeaderWrapper = styled.header`
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 17px 16px;

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

			img {
				margin-right: 29px;
			}

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

		.languages {
			display: flex;
			align-items: center;
		}
	`

	return (
		<HeaderWrapper>
			<strong>
				<a href='#'>opensgh</a>
			</strong>
			<div className='supportBlock'>
				<img src='./images/icons/logo.svg' alt='opensgh logotype' />
				<div className='languages'>
					<button>Eng</button>
					<button>Pol</button>
				</div>
			</div>
		</HeaderWrapper>
	)
}
