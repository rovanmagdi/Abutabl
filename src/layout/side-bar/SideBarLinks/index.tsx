import { useRoutesConst } from 'routes';
import SideBarItem from '../SideBarItem';
import { SideBarLinks } from '../styles';

export default function SideBarLinksSection() {
	const { ROUTES } = useRoutesConst();

	return (
		<SideBarLinks>
			<SideBarItem routes={ROUTES.learn || ROUTES.learnDetails} />
			<SideBarItem routes={ROUTES.profile} />
			<SideBarItem routes={ROUTES.support} />
		</SideBarLinks>
	);
}
