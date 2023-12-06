import{s as n,t}from"./index-5d5ec1ef.js";const i=n.div`
	width: 100%;
	form {
		display: flex;
		flex-direction: column;
		gap: 24px;
		.wellcome_wrapper {
			h1 {
				font-family: ${t.fonts.Bold};
				font-weight: 700;
				font-size: 32px;
			}
			h3 {
				color: ${t.colours.SpanishGray};
				font-family: ${t.fonts.Bold};
				font-weight: 700;
				font-size: 20px;
			}
			p {
				color: ${t.colours["Grey-body"]};
				font-family: ${t.fonts.Regular};
				font-weight: 400;
				font-size: 14px;
			}
		}
		label {
			p {
				left: unset;
				top: unset;
				padding: 0 12px;
				padding-top: 8px;
				&:lang(ar) {
					right: unset;
				}
			}
			.mantine-PasswordInput-input {
				input {
					&:lang(ar) {
						padding-right: 12px;
					}
				}
			}
			.mantine-Input-rightSection {
				&:lang(ar) {
					left: 0;
					right: unset;
				}
			}
			input {
				&:lang(ar) {
					text-align: right;
				}
			}
		}
		.mantine-Checkbox-body{
			gap: 4px;
		}
	}
`;export{i as L};
