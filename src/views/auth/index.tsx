import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import shapes from 'assets/images/png/shapes.png';
import iol from 'assets/images/svg/ioe.svg';
import lines from 'assets/images/png/Background_Complete.png';
import LoadingPartially from 'components/loading-partially';
export default function AuthSections() {
	return (
		<div className="bg-PaoloVeroneseGreen transition-all flex flex-col justify-start items-center relative min-h-full">
			<img src={shapes} className="h-[60px] lg:h-[100px]" alt="shapes" />
			<img src={iol} alt="logo" width={250} className="hidden md:block md:absolute bottom-0 right-0" />
			<div className="w-full lg:w-[750px] h-[calc(100vh-100px)] md:p-0 flex justify-center overflow-hidden items-center relative">
				<img src={lines} className="absolute w-full" alt="" />
				<div className="border border-Platinum bg-white w-[95%] md:w-2/3 lg:w-[648px] p-5 md:p-10 flex flex-col justify-start items-center gap-6 md:gap-[72px] rounded-[36px] shadow-custom-sm">
					<Suspense >
						<Outlet />
					</Suspense>
				</div>
			</div>
		</div>
	);
}
