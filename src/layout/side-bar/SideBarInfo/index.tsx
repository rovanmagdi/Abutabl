import { ReactComponent as Logo } from 'assets/images/svg/logo.svg';
import { SideBarInfo } from '../styles';

export default function SideBarInfoSection() {

	return (
		<SideBarInfo>
			<div className="LogoWrapper">
				<Logo />
			</div>
		</SideBarInfo>
	);
}
