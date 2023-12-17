import { Grid, Flex } from '@mantine/core';
import Wellcomeimage from 'assets/images/png/hi.png';
import { ReactComponent as Notification } from 'assets/images/svg/notification.svg';
import SearchAutoComplete from 'components/searchComponent';
import VectorImage from 'components/vectorImage';
import { HeaderWrapper } from './styles';

export default function PageHeader() {


	return (
		<HeaderWrapper>
			<Grid mr={0} align={'center'} justify={'space-between'}>
				<Grid.Col xs={12} md={6}>
					<Flex direction={'column'} align={'flex-start'} gap={8} className="wellcome_wrapper">
						<Flex gap={16} align={'center'}>
							<h1>Hi, {JSON.parse(localStorage.getItem('user_info')!)?.name}</h1>
							<img src={Wellcomeimage} />
						</Flex>
						<p>Let’s Learn something new today!</p>
					</Flex>
				</Grid.Col>
				<Grid.Col xs={12} md={6}>
					<Flex gap={32} align={'center'}>
						<SearchAutoComplete className="platinum_shadow" placeholder="search" data={['test']} />
						<Flex align={'center'} justify={'center'} className="notification platinum_shadow">
							<Notification />
						</Flex>
					</Flex>
				</Grid.Col>
			</Grid>

			<VectorImage />
		</HeaderWrapper>
	);
}
