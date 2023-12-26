import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import BookMark from 'assets/images/svg/bookmark.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Text } from '@mantine/core';
import Video from 'assets/images/svg/demand_video.svg';
import Image from 'assets/images/svg/image.svg';
import Zip from 'assets/images/svg/zip.svg';
import Audio from 'assets/images/svg/audio.svg';
import Sheet from 'assets/images/svg/sheets.svg';
import { lessonContent } from 'redux-toolkit/reducer/UnitsReducer';
import LoadingPartially from 'components/loading-partially';
import './index.css';
import CircleProgress from 'components/CircleProgress';
import { Link, useParams } from 'react-router-dom';
const Units = () => {
    const dispatch = useDispatch();
    const { id } = useParams()
    const subjectDetails = useSelector((state: any) => state.DetailsSubjectsReducer);
    const lesson = useSelector((state: any) => state.UnitsReducer);
    const [idData, setIdData] = useState<any>();
    const [loading, setLoading] = useState(false);




    return (
        <>
            <Box className="flex justify-between unitsAccordion">
                <>


                    <Box className="w-2/5 mr-5 ">
                        <Box className="contentCourse">
                            Course content
                            <Text className="text-stone-400">{subjectDetails?.subjectDetailsData?.units?.length} units</Text>
                        </Box>
                        <Accordion allowZeroExpanded>
                            {subjectDetails?.subjectDetailsData?.units?.map(
                                (unit: { lessons: []; lessons_count: string; name: string; quizes_count: string, id: number }, index: number) => {
                                    return (
                                        <AccordionItem key={id}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <Box className="flex justify-between mx-5">
                                                        <Box className="px-5">
                                                            {index + 1} Unit - {unit?.name}
                                                            <Text className="text-stone-400 ">
                                                                {unit?.lessons_count} Lessons - {unit?.quizes_count} Quiz
                                                            </Text>
                                                        </Box>
                                                        <CircleProgress childern="20" />
                                                    </Box>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <Box >
                                                    {unit?.lessons?.map((lesson: { name: string; id: number }, index: number) => {
                                                        return (
                                                            <Box
                                                                className={`flex  mt-1 px-5 ${idData === lesson?.name && 'activeLesson'}`}
                                                                onClick={async (event: any) => {
                                                                    setIdData(event.target.innerText);
                                                                    setLoading(true);
                                                                    await dispatch(lessonContent(lesson?.id));
                                                                    setLoading(false);
                                                                }}
                                                            >
                                                                <Box className="flex items-center p-4" key={index}>
                                                                    <img src={BookMark} alt="Book" className="mr-2 color-#9C9B9B" />
                                                                    <Text className="text-stone-900 mb-2"> {lesson?.name}</Text>
                                                                </Box>
                                                            </Box>
                                                        );
                                                    })}
                                                </Box>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    );
                                }
                            )}
                        </Accordion>
                    </Box>
                    <Box className="w-3/5 ">
                        {loading ? (
                            <Box style={{ marginTop: '120px' }}>
                                <LoadingPartially />
                            </Box>
                        ) : (
                            <>
                                <Text className="headerLesson p-2">
                                    {lesson?.lessonContentData?.lesson?.name}
                                    {/* Lesson 2 content */}
                                </Text>
                                <Box className="flex w-200 flex-wrap">
                                    {lesson?.lessonContentData?.contents?.map((lesson: any) => {
                                        return (
                                            <Link to={`details/${lesson?.id}`} target='_blank' onClick={() => {

                                                localStorage.setItem('id', lesson?.id)


                                            }}>
                                                <Box className="contentLesson">
                                                    <Box className="contentIcons">
                                                        {lesson?.type == 'video' ? (
                                                            <img src={Video} alt="imag" />
                                                        ) : lesson?.type == 'scrom' ? (
                                                            <img src={Zip} alt="imag" />
                                                        ) : lesson?.type == ('word' || 'pdf') ? (
                                                            <img src={Sheet} alt="imag" />
                                                        ) : lesson?.type == 'audio' ? (
                                                            <img src={Audio} alt="imag" />
                                                        ) : (
                                                            lesson?.type == 'image' ?
                                                                <img src={Image} alt="imag" /> :
                                                                <img src={Sheet} alt="imag" />
                                                        )}
                                                    </Box>
                                                    <Text>{lesson?.name}</Text>
                                                    <Text className="text-stone-400">{lesson?.period}</Text>
                                                </Box>
                                            </Link>
                                        );
                                    })}
                                </Box>
                            </>
                        )}
                    </Box>
                </>
            </Box>
        </>
    );
};

export default Units;
