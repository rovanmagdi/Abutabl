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






	return (
		<HeaderWrapper>
			<Grid>
				<Grid.Col xs={6}>
					<Flex align={'center'} gap={16} className="courses_info">
						<h3>{formatMessage({ id: 'Assigments' })}</h3>
						<span className="count">5</span>
					</Flex>
				</Grid.Col>
				<Grid.Col xs={6}>
					<Flex className="filter_container" align={'center'} justify={'flex-end'} gap={32}>
						<Flex align={'center'} gap={8}>
							<p>{formatMessage({ id: 'Status' })}</p>
							<Menu shadow="md">
								<Menu.Target>
									<Flex gap={7} align={'center'}>
										{/* <h4>{sortByButtonText}</h4> */}
										All
										<ChevronDown />
									</Flex>
								</Menu.Target>

								<Menu.Dropdown>
									<Menu.Label>{formatMessage({ id: 'All' })}</Menu.Label>
									<Menu.Item
										icon={<Recent />}
									// onClick={() => handleSortByMenuItemClick(formatMessage({ id: 'Recent' }))}
									>
										{formatMessage({ id: 'Recent' })}
									</Menu.Item>

								</Menu.Dropdown>
							</Menu>
						</Flex>
						<Flex align={'center'} gap={8}>
							<p>{formatMessage({ id: 'Filter' })}</p>
							<Menu shadow="md">
								<Menu.Target>
									<Flex gap={7} align={'center'}>
										{/* <h4>{statusButtonText}</h4> */}
										All
										<ChevronDown />
									</Flex>
								</Menu.Target>

								<Menu.Dropdown>
									<Menu.Label>{formatMessage({ id: 'Status' })}</Menu.Label>
									<Menu.Item icon={<Recent />}
									//  onClick={() => handleStatusMenuItemClick(formatMessage({ id: 'New' }))}
									>
										{formatMessage({ id: 'New' })}
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
