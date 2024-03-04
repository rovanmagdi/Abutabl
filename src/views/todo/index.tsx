import { Box, Flex, Text, Menu, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ModuleView from 'components/module-view';
import { useEffect, useState } from 'react';
import PageHeader from 'views/learn/component/pageHeader';
import { types } from 'views/profile/types';
import { ReactComponent as Assign } from 'assets/images/svg/assign.svg';
import Man from 'assets/images/svg/man.svg';


import { useDispatch, useSelector } from 'react-redux';
import { todoList } from 'redux-toolkit/reducer/todoReducer';
import { useNavigate } from 'react-router-dom';
import EmptyComp from 'views/Empty';
import LoadingPartially from 'components/loading-partially';
import { CardsWrapper } from 'views/learn/styles';
import Header from './header/header';


export default function Todo() {
    const todoListData = useSelector((state: any) => state.todoReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(todoList());
    }, []);

    return (
        <>
            <PageHeader />

            <ModuleView header={<Header />}>
                <>
                    {todoListData?.loading && <CardsWrapper><LoadingPartially /></CardsWrapper>}
                    {todoListData?.todoListData?.allAssigns?.length == 0 ? (
                        <EmptyComp />
                    ) : (
                        <>
                            {' '}
                            {todoListData?.todoListData?.allAssigns?.map((item: { data: []; date: string }) => {
                                return (
                                    <>
                                        {item?.data?.length !== 0 && (
                                            <Flex className="align-center flex-wrap ">
                                                <Text className="mb-3 font-bold">{item?.date}</Text>
                                                {item?.data?.map(
                                                    (item: {
                                                        by: string;
                                                        status: string;
                                                        subject_name: string;
                                                        type: string;
                                                        date: string;
                                                        path: string;
                                                        subject_id: string;
                                                        unit_id: string
                                                    }) => {
                                                        return (
                                                            <Box className="border border-Platinum rounded-xl w-[100%] p-5 flex  justify-between mb-5">
                                                                <Flex>
                                                                    <Box className="bg-Cultured p-10 rounded-xl">
                                                                        <Text className="bg-New absolute top-3 right-3 text-sm px-3 text-TextNew">
                                                                            {item?.status}
                                                                        </Text>
                                                                        <Assign />
                                                                    </Box>
                                                                    <Box className="mx-5 gap-4 flex flex-col ">
                                                                        <Box>
                                                                            <Text className="text-LightSeaGreen">{item?.type}</Text>
                                                                            <Text>{item?.subject_name}</Text>
                                                                        </Box>

                                                                        <Box>
                                                                            <Text className="text-gray text-sm pl-1">Assigned by:</Text>
                                                                            <Text className="flex pt-3">
                                                                                {' '}
                                                                                <img src={Man} width={30} className="pr-1" />
                                                                                {item?.by}
                                                                            </Text>
                                                                        </Box>
                                                                    </Box>
                                                                </Flex>
                                                                <Box className="mt-3">
                                                                    <Text className="text-xs">
                                                                        <span className="text-gray">Due: </span>
                                                                        {item?.date}
                                                                    </Text>
                                                                    <Button
                                                                        type="submit"
                                                                        className=" bg-Sunglow  rounded-[15px] shadow-custom-sm-warning  hover:bg-Warning text-black mt-5"
                                                                        onClick={() => {
                                                                            {
                                                                                item.type == "subjects" || "lessons_contents" ? navigate(`/learn/${item?.subject_id}`)
                                                                                    : item.type == "lessons" ? navigate(`/learn/${item?.unit_id}/quiz/${item?.subject_id}`) :
                                                                                        ''
                                                                            }
                                                                            // navigate(item?.path);
                                                                        }}
                                                                    >
                                                                        View Assignment
                                                                    </Button>{' '}
                                                                </Box>
                                                            </Box>
                                                        );
                                                    }
                                                )}
                                            </Flex>
                                        )}
                                    </>
                                );
                            })}
                        </>
                    )}
                </>
            </ModuleView>
        </>
    );
}
