import { useState } from 'react';
import { Grid, Flex, Menu } from '@mantine/core';
import { useIntl } from 'react-intl';
import { ReactComponent as ChevronDown } from 'assets/images/svg/arrow-down.svg';
import { ReactComponent as Recent } from 'assets/images/svg/clock.svg';
import { ReactComponent as AlphabeticalAsc } from 'assets/images/svg/arrow-up.svg';
import { ReactComponent as AlphabeticalDesc } from 'assets/images/svg/arrow-down-circle.svg';
import { HeaderWrapper } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { SubjectsList } from 'redux-toolkit/reducer/SubjectsReducer';
export default function Header() {
	const { formatMessage } = useIntl();

	const dispatch = useDispatch();
	const [sortByButtonText, setSortByButtonText] = useState('A-Z');
	const [statusButtonText, setStatusButtonText] = useState('in progress ');
	const statusSubjects = useSelector((state: any) => state.SubjectsReducer);

	const handleSortByMenuItemClick = (newButtonText: string) => {
		setSortByButtonText(newButtonText);

		if (newButtonText == 'Recent') {
			dispatch(SubjectsList({ order: 'Recent' }));
		} else if (newButtonText == 'Alphabetical Asc. (A-Z)') {
			dispatch(SubjectsList({ order: 'A-Z' }));
		} else if (newButtonText == 'Alphabetical Dec. (Z-A)') {
			dispatch(SubjectsList({ order: 'Z-A' }));
		}
	};

	const handleStatusMenuItemClick = (newButtonText: string) => {
		setStatusButtonText(newButtonText);
		console.log(newButtonText);

		if (newButtonText == 'New') {
			dispatch(SubjectsList({ status: 'New' }));
		} else if (newButtonText == 'In progress') {
			dispatch(SubjectsList({ status: 'Progress' }));
		} else if (newButtonText == 'Completed') {
			dispatch(SubjectsList({ status: 'Completed' }));
		}
	};
	console.log(statusSubjects?.subjectsListData);

	return (
		<HeaderWrapper>
			<Grid>
				<Grid.Col xs={6}>
					<Flex align={'center'} gap={16} className="courses_info">
						<h3>{formatMessage({ id: 'Subjects' })}</h3>
						<span className="count">{statusSubjects?.subjectsListData?.subjects?.length}</span>
					</Flex>
				</Grid.Col>
				<Grid.Col xs={6}>
					<Flex className="filter_container" align={'center'} justify={'flex-end'} gap={32}>
						<Flex align={'center'} gap={8}>
							<p>{formatMessage({ id: 'SortBy' })}</p>
							<Menu shadow="md">
								<Menu.Target>
									<Flex gap={7} align={'center'}>
										<h4>{sortByButtonText}</h4>
										<ChevronDown />
									</Flex>
								</Menu.Target>

								<Menu.Dropdown>
									<Menu.Label>{formatMessage({ id: 'SortBy' })}</Menu.Label>
									<Menu.Item
										icon={<Recent />}
										onClick={() => handleSortByMenuItemClick(formatMessage({ id: 'Recent' }))}
									>
										{formatMessage({ id: 'Recent' })}
									</Menu.Item>
									<Menu.Item
										icon={<AlphabeticalAsc />}
										onClick={() => handleSortByMenuItemClick(formatMessage({ id: 'AlphabeticalAsc' }))}
									>
										{formatMessage({ id: 'AlphabeticalAsc' })}
									</Menu.Item>
									<Menu.Item
										icon={<AlphabeticalDesc />}
										onClick={() => handleSortByMenuItemClick(formatMessage({ id: 'AlphabeticalDesc' }))}
									>
										{formatMessage({ id: 'AlphabeticalDesc' })}
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</Flex>
						<Flex align={'center'} gap={8}>
							<p>{formatMessage({ id: 'Status' })}</p>
							<Menu shadow="md">
								<Menu.Target>
									<Flex gap={7} align={'center'}>
										<h4>{statusButtonText}</h4>
										<ChevronDown />
									</Flex>
								</Menu.Target>

								<Menu.Dropdown>
									<Menu.Label>{formatMessage({ id: 'Status' })}</Menu.Label>
									<Menu.Item icon={<Recent />} onClick={() => handleStatusMenuItemClick(formatMessage({ id: 'New' }))}>
										{formatMessage({ id: 'New' })}
									</Menu.Item>
									<Menu.Item
										icon={<AlphabeticalAsc />}
										onClick={() => handleStatusMenuItemClick(formatMessage({ id: 'InProgress' }))}
									>
										{formatMessage({ id: 'InProgress' })}
									</Menu.Item>
									<Menu.Item
										icon={<AlphabeticalDesc />}
										onClick={() => handleStatusMenuItemClick(formatMessage({ id: 'Completed' }))}
									>
										{formatMessage({ id: 'Completed' })}
									</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</Flex>
					</Flex>
				</Grid.Col>
			</Grid>
		</HeaderWrapper>
	);
}
