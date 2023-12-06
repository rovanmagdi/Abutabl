import { Menu } from '@mantine/core';
import avatar from 'assets/images/png/avatar.png';
import badge from 'assets/images/png/badge.png';
import progress from 'assets/images/png/icon.png';
import editIcon from 'assets/images/png/edit.svg';
import lockIcon from 'assets/images/png/lock.png';
import logoutIcon from 'assets/images/png/logoutIcon.png';
import { types } from './../types';
import { useIntl } from 'react-intl';
import { BiArrowFromBottom, BiChevronDown, BiMenu } from 'react-icons/bi';
import { BurgerMenu } from 'layout/header/styles';
import { CiMenuKebab } from 'react-icons/ci';

type ComponentProps = {
	setActive: React.Dispatch<React.SetStateAction<types>>;
	active: types;
	open: () => void;
	setPasswordModalOpened?: React.Dispatch<React.SetStateAction<boolean>>;
	setLogoutModalOpened?: React.Dispatch<React.SetStateAction<boolean>>;
};

function ProfileNav({ setActive, active, open, setPasswordModalOpened, setLogoutModalOpened }: ComponentProps) {
	const { formatMessage } = useIntl();
	const handleModuleClick = (type: string) => {
		console.log({ type });

		if (setActive) {
			if (type == 'progress') setActive('progress');
			else if (type == 'assignments') setActive('assignments');
		}
		if (open) {
			if (type == 'edit') open();
		}
		if (setPasswordModalOpened) {
			if (type == 'password') setPasswordModalOpened(true);
		}
		if (setLogoutModalOpened) {
			if (type == 'logout') setLogoutModalOpened(true);
		}
	};
	const data = [
		{ type: 'progress', label: formatMessage({ id: 'My-Progress' }), icon: progress },
		{ type: 'assignments', label: formatMessage({ id: 'My-assignments' }), icon: progress },
	];
	const profileData = [
		{ type: 'edit', label: formatMessage({ id: 'Edit-profile' }), icon: editIcon },
		{ type: 'password', label: formatMessage({ id: 'Change-password' }), icon: lockIcon },
		{ type: 'logout', label: formatMessage({ id: 'Logout' }), icon: logoutIcon },
	];
	return (
		<div className="lg:hidden border border-LightSeaGreen px-8 py-2 flex justify-start">
			<Menu shadow="md">
				<div className="flex justify-center items-center gap-5">
					<div className="w-[60px] h-[60px] flex justify-center relative items-center">
						<img
							className="absolute w-5 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 tra"
							src={badge}
							alt="badge"
						/>
						<img src={avatar} alt="avatar" className="w-[60px]" />
					</div>
					<Menu.Target>
						<div className="user-name flex flex-row-reverse gap-2 justify-center items-center">
							<BiChevronDown className="text-lg" />
							<div>
								<h3 className="text-[20px] font-bold">Ahmed Mealy</h3>
								<p className={`text-sm text-[#9C9B9B] `}>{formatMessage({ id: 'Student-Code' })}: 12345</p>
							</div>
						</div>
					</Menu.Target>
				</div>

				<Menu.Dropdown>
					<Menu.Label>{formatMessage({ id: 'My-study' })}</Menu.Label>
					{data.map((el) => {
						return (
							<Menu.Item
								key={el.type}
								onClick={() => handleModuleClick(el.type)}
								className={`focus:bg-[#f3fffa] ${
									el.type == active ? 'border-l-4 border-l-LightSeaGreen bg-[#f3fffa]' : ''
								} `}
								icon={<img src={el.icon} />}
							>
								<p className="pr-2">{el.label}</p>
							</Menu.Item>
						);
					})}

					<Menu.Divider />

					<Menu.Label>Settings</Menu.Label>
					{profileData.map((el) => {
						return (
							<Menu.Item key={el.type} onClick={() => handleModuleClick(el.type)} icon={<img src={el.icon} />}>
								<p className="pr-2">{el.label}</p>
							</Menu.Item>
						);
					})}
				</Menu.Dropdown>
			</Menu>
		</div>
	);
}

export default ProfileNav;
