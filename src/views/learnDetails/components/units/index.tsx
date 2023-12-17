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
import { useSelector } from 'react-redux';

const AccordionComponent = () => {
    const subjectDetails = useSelector((state: any) => state.DetailsSubjectsReducer.subjectDetailsData);
    const [htmlDesc, setHTMLDesc] = useState({ __html: '' });
    const [htmlPass, setHTMLPass] = useState({ __html: '' });
    useEffect(() => {
        {
            subjectDetails?.basic_info?.map((basic: { [key: string]: string }) => {
                return setHTMLDesc({ __html: basic?.des }), setHTMLPass({ __html: basic?.pass });
            });
        }
    }, [subjectDetails]);
    return (
        <Accordion allowMultipleExpanded>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton style={{ borderRadius: '20px 20px 0 0 ' }}>About course</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div dangerouslySetInnerHTML={htmlDesc} />
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem>
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
                    <div className="detailsUnit">
                        <div className="flex justify-between items-center border-b-2 border-slate-200 p-6">
                            <h3 className="text-black font-bold">Unit 1 - Introduction to mathematics</h3>
                            <div>3 lessons - 1 Quiz</div>
                        </div>
                        <div className="pb-5">
                            <div className="flex justify-between items-center pb-0.5 px-5 pr-5  mt-5">
                                <div className="flex items-center justify-center">
                                    <img src={Article} alt="Book" className="mr-2 color-#9C9B9B" />
                                    <div className="text-stone-400">Video: Get to know number 1 and sing along</div>
                                </div>
                                <div>3 min</div>
                            </div>
                            <div className="flex justify-between items-center pb-0.5 px-5 pr-5 mt-5 ">
                                <div className="flex items-center">
                                    <img src={Article} alt="Book" className="mr-2 color-#9C9B9B" />
                                    <div className="text-stone-400">Video: Get to know number 1 and sing along</div>
                                </div>
                                <div>3 min</div>
                            </div>{' '}
                            <div className="flex justify-between items-center pb-0.5 px-5 pr-5  mt-5">
                                <div className="flex  items-center">
                                    <img src={Article} alt="Book" className="mr-2 color-#9C9B9B" />
                                    <div className="text-stone-400">Video: Get to know number 1 and sing along</div>
                                </div>
                                <div>3 min</div>
                            </div>{' '}
                            <div className="flex justify-between items-center pb-0.5 px-5 pr-5  mt-5">
                                <div className="flex  items-center">
                                    <img src={Article} alt="Book" className="mr-2 color-#9C9B9B" />
                                    <div className="text-stone-400">Video: Get to know number 1 and sing along</div>
                                </div>
                                <div>3 min</div>
                            </div>{' '}
                            <div className="flex justify-between items-center pb-0.5 px-5 pr-5  mt-5">
                                <div className="flex  items-center">
                                    <img src={Article} alt="Book" className="mr-2 color-#9C9B9B" />
                                    <div className="text-stone-400">Video: Get to know number 1 and sing along</div>
                                </div>
                                <div>3 min</div>
                            </div>
                        </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionComponent;
