import { theme } from 'global-styles';
import styled from 'styled-components';

export const HeaderWrapper = styled.section`
	position: relative;
	background-color: ${theme.colours.PaoloVeroneseGreen};
	padding: 32px 0;
	.wellcome_wrapper {
		color: ${theme.colours.white};
		h1 {
			font-size: 32px;
			font-family: ${theme.fonts.Bold};
		}
		p {
			font-size: 14px;
			font-family: ${theme.fonts.Medium};
		}
	}
	.search_wrapper {
		border: 2px solid ${theme.colours.Platinum};
	}
	.notification {
		background-color: ${theme.colours.white};
		width: 56px;
		height: 56px;
		border-radius: 16px;
		border: 2px solid ${theme.colours.Platinum};
	}
`;
