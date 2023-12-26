import React, { useEffect, useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './index.css';
import Article from 'assets/images/svg/article.svg';
import Video from 'assets/images/svg/demand_video.svg';
import Image from 'assets/images/svg/image.svg';
import Zip from 'assets/images/svg/zip.svg';

import Sheet from 'assets/images/svg/sheets.svg';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mantine/core';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { setLessonIds } from 'redux-toolkit/reducer/UnitsReducer';
import { SubjectDetails } from 'redux-toolkit/reducer/DetailsSubjectsReducer';

const AccordionComponent = () => {
    const subjectDetails = useSelector((state: any) => state.DetailsSubjectsReducer.subjectDetailsData);
    const { id } = useParams()
    const dispatch = useDispatch()
    const [htmlDesc, setHTMLDesc] = useState({ __html: '' });
    const [htmlPass, setHTMLPass] = useState({ __html: '' });
    useEffect(() => {
        {
            setHTMLDesc({ __html: subjectDetails?.basic_info?.des }),
                setHTMLPass({ __html: subjectDetails?.basic_info?.pass });
        }
    }, [subjectDetails]);
    return (
        <Box className='overviewAccordion'>


            <Accordion allowZeroExpanded>
                <AccordionItem uuid="first">
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ borderRadius: '20px 20px 0 0 ' }}>About course</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div dangerouslySetInnerHTML={htmlDesc} />
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem >
                    <AccordionItemHeading>
                        <AccordionItemButton>How to pass</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div dangerouslySetInnerHTML={htmlPass} />
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ borderRadius: '0 0 20px 20px ' }}>Syllabus</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        {subjectDetails?.units?.map(
                            (unit: { lessons: []; lessons_count: string; name: string; quizes_count: string }, index: number) => {
                                return (
                                    <div className="detailsUnit mt-2">
                                        <div className="flex justify-between items-center border-b-2 border-slate-200 p-6">
                                            <h3 className="text-black font-bold">
                                                {' '}
                                                Unit {index + 1}- {unit?.name}
                                            </h3>
                                            <div>
                                                {unit?.lessons_count} lessons - {unit?.quizes_count} Quiz
                                            </div>
                                        </div>
                                        <div className="pb-5">
                                            {unit?.lessons?.map(
                                                (lesson: { id: number, contents: { lessons_count: string; name: string; quizes_count: string }[] }) => {
                                                    return lesson?.contents.map((content: any) => {
                                                        return (
                                                            <Link to={`details/${lesson?.id}`} target="_blank" rel="noopener noreferrer" className='cursor-pointer' onClick={(event) => {

                                                                localStorage.setItem('id', content?.id)


                                                            }}>
                                                                <div className="flex justify-between items-center pb-0.5 px-5 pr-5  mt-5 "
                                                                >


                                                                    <div className="flex items-center justify-center">
                                                                        <img
                                                                            src={
                                                                                content?.type == 'video'
                                                                                    ? Video
                                                                                    : content?.type == 'pdf'
                                                                                        ? Sheet
                                                                                        : content?.type == 'word'
                                                                                            ? Article
                                                                                            : content?.type == 'image'
                                                                                                ? Image
                                                                                                : Zip
                                                                            }
                                                                            alt="Book"
                                                                            className="mr-2 color-#9C9B9B"
                                                                        />
                                                                        <div className="text-stone-400">
                                                                            {' '}
                                                                            {content?.type} : {content?.name}
                                                                        </div>
                                                                    </div>
                                                                    <div>{content?.period} </div>
                                                                </div>
                                                            </Link>
                                                        );
                                                    });
                                                }
                                            )}
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
};

export default AccordionComponent;
