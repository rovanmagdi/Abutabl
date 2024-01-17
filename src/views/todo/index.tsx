import { Box, Flex, Text, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ModuleView from "components/module-view";
import { useState } from "react";
import PageHeader from "views/learn/component/pageHeader";
import { types } from "views/profile/types";
import { ReactComponent as ChevronDown } from 'assets/images/svg/arrow-down.svg';
import { ReactComponent as Recent } from 'assets/images/svg/clock.svg';
import { ReactComponent as AlphabeticalAsc } from 'assets/images/svg/arrow-up.svg';
import { ReactComponent as AlphabeticalDesc } from 'assets/images/svg/arrow-down-circle.svg';


export default function Todo() {


    return (
        <>
            <PageHeader />
            <ModuleView>
                <>
                    <Flex className="items-center justify-between border-b-2 border-Cultured">

                        <Box className=" flex p-5 ">
                            <Text>

                                Assigments
                            </Text>
                            <Text className="rounded-full border border-gray mx-2 w-7 h-7 flex justify-center items-center" >6</Text>
                        </Box>
                        <Box className="p-5">
                            <Flex className="filter_container" align={'center'} justify={'flex-end'} gap={32}>
                                <Flex align={'center'} gap={8}>
                                    <p>SortBy</p>
                                    <Menu shadow="md">
                                        <Menu.Target>
                                            <Flex gap={7} align={'center'}>

                                                <ChevronDown />
                                            </Flex>
                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <Menu.Label>SortBy</Menu.Label>
                                            <Menu.Item
                                                icon={<Recent />}
                                            // onClick={() => handleSortByMenuItemClick(formatMessage({ id: 'Recent' }))}
                                            >
                                                Recent
                                            </Menu.Item>
                                            <Menu.Item
                                                icon={<AlphabeticalAsc />}
                                            // onClick={() => handleSortByMenuItemClick(formatMessage({ id: 'AlphabeticalAsc' }))}
                                            >
                                                {/* {formatMessage({ id: 'AlphabeticalAsc' })} */}
                                                AlphabeticalAsc
                                            </Menu.Item>

                                        </Menu.Dropdown>
                                    </Menu>
                                </Flex>

                            </Flex>
                        </Box>
                    </Flex>
                </>
                {/* <Text> Assigments</Text> */}

            </ModuleView>
        </>
    );
}
