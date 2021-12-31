import React from 'react'
import styled from 'styled-components'

export default function Header() {
	const Wrapper = styled.header`
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0 17px;

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
		<Wrapper>
			<strong>
				<a href='#'>opensgh</a>
			</strong>
			<div className='supportBlock'>
				<div className='languages'>
					<button>Eng</button>
					<button>Pol</button>
				</div>
			</div>
		</Wrapper>
	)
}
