import { theme } from 'global-styles';
import styled from 'styled-components';

export const HeaderWrapper = styled.section`
	 position: relative;
	background-color: ${theme.colours.PaoloVeroneseGreen};
	padding: 8px 0px 20px 0px;
	.wellcome_wrapper {
		color: ${theme.colours.white};
		h1 {
			font-size: 25px;
			font-family: ${theme.fonts.Bold};
		}
		p {
			font-size: 12px;
			font-family: ${theme.fonts.Medium};
		}
	}
	.search_wrapper {
		border: 2px solid ${theme.colours.Platinum};
	}
	.notification {
		background-color: ${theme.colours.white};
		width: 38px;
		height: 38px;
		border-radius: 12px;
		border: 2px solid ${theme.colours.Platinum};
	}
`;
