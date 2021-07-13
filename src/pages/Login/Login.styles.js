import { Link } from 'react-router-dom';
import { COLOR } from 'src/constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
	& > h2 {
		font-size: 28px;
		margin-bottom: 40px;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		flex-wrap: wrap;
		span {
			font-size: 14px;
			font-weight: 400;
			a {
				margin-left: 5px;
				text-decoration: underline;
			}
		}
	}
	& > h3 {
		margin-top: 50px;
		margin-bottom: 20px;
		font-size: 20px;
	}
	form button[type='submit'] {
		margin-top: 20px;
	}
`;

export const LostPass = styled(Link)`
	display: block;
	width: max-content;
	font-size: 20px;
	margin-top: 30px;
	&:not(:hover) {
		color: ${COLOR.YELLOW};
	}
`;

export const Socials = styled.div`
	display: flex;
	column-gap: 30px;
	font-size: 30px;
`;

export const FormGroup = styled.div`
	position: relative;
	padding-bottom: 20px;
	margin-bottom: 20px;
	span {
		bottom: -5px;
		position: absolute;
	}
`;
