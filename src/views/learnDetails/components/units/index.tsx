import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
// import './index.css';
import Article from 'assets/images/svg/gameGray.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text } from '@mantine/core';
import AccordionComponent from '../accordion/accordion';
import { UnitsList } from 'redux-toolkit/reducer/UnitsReducer';

const Units = () => {
    const subjectDetails = useSelector((state: any) => state.DetailsSubjectsReducer.subjectDetailsData);
    const [htmlDesc, setHTMLDesc] = useState({ __html: '' });
    const [htmlPass, setHTMLPass] = useState({ __html: '' });

    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(UnitsList())
    }, [dispatch]);

    return (
        <>
            <Box className="flex justify-between">
                <Box className="w-2/5 mr-5 ">
                    {subjectDetails?.units?.map(
                        (unit: { lessons: []; lessons_count: string; name: string; quizes_count: string }, index: number) => {
                            return (
                                <Accordion allowMultipleExpanded>
                                    <AccordionItem>
                                        <AccordionItemHeading>
                                            <AccordionItemButton >
                                                {index + 1} Unit - {unit?.name}
                                                <Text className="text-stone-400 mx-2">
                                                    {unit?.lessons_count} Lessons - {unit?.quizes_count
                                                    } Quiz
                                                </Text>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            {subjectDetails?.units?.map(
                                                (
                                                    unit: { lessons: []; lessons_count: string; name: string; quizes_count: string },
                                                    index: number
                                                ) => {
                                                    return (
                                                        <Box className="">
                                                            {unit?.lessons?.map((lesson: { name: string }) => {
                                                                return (
                                                                    <Box className="flex justify-between items-center pb-0.5 px-5 pr-5  mt-1">
                                                                        <Box className="flex items-center justify-center">
                                                                            <img src={Article} alt="Book" className="mr-2 color-#9C9B9B" />
                                                                            <Text className="text-stone-400"> {lesson?.name}</Text>
                                                                        </Box>
                                                                    </Box>
                                                                );
                                                            })}
                                                        </Box>
                                                    );
                                                }
                                            )}
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Accordion>
                            );
                        }
                    )}
                </Box>
                <Box className="w-3/5 ">
                    <img src="" alt="Book" className="m-auto" />
                    <Text className="mt-10">This course include</Text>
                </Box>
            </Box>
        </>
    );
};

export default Units;
