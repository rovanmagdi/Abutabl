import { Box, Flex, Text, Menu, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ModuleView from 'components/module-view';
import { useState } from 'react';
import PageHeader from 'views/learn/component/pageHeader';
import { types } from 'views/profile/types';
import { ReactComponent as Assign } from 'assets/images/svg/assign.svg';
import Man from 'assets/images/svg/man.svg';

import Header from './header/header';

export default function Todo() {
    return (
        <>
            <PageHeader />
            <ModuleView header={<Header />}>
                <Flex className="align-center flex-wrap">
                    <Text className='mb-3 font-bold'>Today</Text>
                    <Box className="border border-Platinum rounded-xl w-[100%] p-5 flex  justify-between">
                        <Flex>
                            <Box className="bg-Cultured p-10 rounded-xl">
                                <Text className="bg-New absolute top-3 right-3 text-sm px-3 text-TextNew">New</Text>
                                <Assign />
                            </Box>
                            <Box className="mx-5 gap-4 flex flex-col ">
                                <Box>
                                    <Text className="text-LightSeaGreen">Mathematics</Text>
                                    <Text>Video: Get to know number 1 and sing along</Text>
                                </Box>
                                <Box >
                                    <Text className="text-gray text-sm pl-1">Assigned by:</Text>
                                    <Text className='flex pt-3'> <img src={Man} width={30} className='pr-1' />Mr. Ahmed Mealy</Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Box className="mt-3">
                            <Text className="text-xs">
                                <span className="text-gray">Due:</span>
                                15 jan 2023 - 11:00 AM
                            </Text>
                            <Button
                                type="submit"
                                className=" bg-Sunglow  rounded-[15px] shadow-custom-sm-warning  hover:bg-Warning text-black mt-5"
                                onClick={() => {
                                    // navigate('/learn')
                                }}
                            >
                                View Assignment
                            </Button>{' '}
                        </Box>
                    </Box>
                </Flex>
            </ModuleView>
        </>
    );
}
