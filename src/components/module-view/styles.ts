import { theme } from 'global-styles';
import styled from 'styled-components';

export const ModuleViewWrapper = styled.div`
	margin-top: 11px;
	height: 100%;
	width: 100%;
	display: inline-block;
	display: flex;
	flex-direction: column;
`;

export const ModuleHeaderWrapper = styled.div`
	width: 100%;
	background-color: ${theme.colours.BrightGray};
	border-top-right-radius: 36px;
	border-top-left-radius: 36px;
	height: 60px;
	line-height: 60px;
	padding: 0 32px;
	border-bottom: 1px solid #fcfcfc;
`;
export const ModuleViewBodyWrapper = styled.div`
	width: 100%;
	padding: 32px;
	overflow: hidden;
	background-color: ${theme.colours.white};
	border-bottom-right-radius: 36px;
	border-bottom-left-radius: 36px;
	&.no_header {
		min-height: calc(100% - 136px);
		padding: 0;
		border-top-right-radius: 36px;
		border-top-left-radius: 36px;
	}
`;
