import avatar from 'assets/images/png/avatar.png';
import badge from 'assets/images/png/badge.png';
import { theme } from 'global-styles';
import { useIntl } from 'react-intl';

function ProfileImg() {
	const { formatMessage } = useIntl();
	return (
		<div className="p-8 flex gap-6 flex-col justify-start items-center">
			<div className="w-[120px] h-[120px] flex justify-center relative items-center">
				<img
					className="absolute w-10 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 tra"
					src={badge}
					alt="badge"
				/>
				<img src={avatar} alt="avatar" className="w-[120]" />
			</div>
			<div>
				<h3 className="text-[20px]" style={{ fontFamily: `${theme.fonts.CommicBold}` }}>
					{JSON.parse(localStorage.getItem('user_info')!)?.name}
				</h3>
				<p className={`text-sm text-[#9C9B9B] `}>{formatMessage({ id: 'Student-Code' })}: 12345</p>
			</div>
		</div>
	);
}

export default ProfileImg;
