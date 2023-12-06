import { useRoutesConst } from 'routes';
import SideBarItem from '../SideBarItem';
import { SideBarLinks } from '../styles';

export default function SideBarLinksSection() {
	const { ROUTES } = useRoutesConst();

	return (
		<SideBarLinks>
			<SideBarItem routes={ROUTES.learn} />
			<SideBarItem routes={ROUTES.profile} />
			<SideBarItem routes={ROUTES.support} />
		</SideBarLinks>
	);
}
