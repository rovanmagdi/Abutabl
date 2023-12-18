import { Grid, Flex } from '@mantine/core';
import Wellcomeimage from 'assets/images/png/hi.png';
import { ReactComponent as ArrowBack } from 'assets/images/svg/Icon_After.svg';
import SearchAutoComplete from 'components/searchComponent';
import VectorImage from 'components/vectorImage';
import { HeaderWrapper } from './styles';
import { Progress } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function PageHeader() {
	const navigate = useNavigate()
	const subjectDetails = useSelector((state: any) => state?.DetailsSubjectsReducer?.subjectDetailsData
	)


	return (
		<HeaderWrapper>
			<Grid mr={0} align={'center'} justify={'space-between'}>
				<Grid.Col xs={12} md={6}>
					<Flex direction={'column'} align={'flex-start'} gap={8} className="wellcome_wrapper">
						<Flex gap={16} align={'center'} onClick={() => {
							navigate('/learn')
						}}>
							<Flex align={'center'} justify={'center'} className="notification platinum_shadow">
								<ArrowBack />
							</Flex>
							{subjectDetails?.basic_info?.name
							}
						</Flex>

					</Flex>
				</Grid.Col>
				<Grid.Col xs={12} md={6}>
					<Flex gap={32} align={'center'}>
						<Progress value={50} color="orange" />

					</Flex>
				</Grid.Col>
			</Grid>

			<VectorImage />
		</HeaderWrapper>
	);
}
