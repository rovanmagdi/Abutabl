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
import { Box, Flex, Text } from '@mantine/core';
import Video from 'assets/images/svg/demand_video.svg';
import Image from 'assets/images/svg/image.svg';
import Zip from 'assets/images/svg/zip.svg';
import Audio from 'assets/images/svg/audio.svg';
import Article from 'assets/images/svg/article.svg';

import Sheet from 'assets/images/svg/sheets.svg';
import { lessonContent } from 'redux-toolkit/reducer/UnitsReducer';
import LoadingPartially from 'components/loading-partially';
import './index.css';
import CircleProgress from 'components/CircleProgress';
import { useParams } from 'react-router-dom';
import { SubjectDetails } from 'redux-toolkit/reducer/DetailsSubjectsReducer';
const DetailsUnit = () => {
  const dispatch = useDispatch();
  const subjectDetails = useSelector((state: any) => state.DetailsSubjectsReducer);
  const lessonContentList = useSelector((state: any) => state.UnitsReducer);
  const { id, idUnit } = useParams();
  const [item, setItem] = useState<any>();
  useEffect(() => {
    const l = dispatch(lessonContent(id));

    dispatch(SubjectDetails(idUnit));
  }, [id, dispatch]);

  useEffect(() => {
    lessonContentList?.lessonContentData?.contents?.map((lesson: any, index: number) => {
      if (index === 0) {
        setItem(lesson);
        console.log(lesson, 'firstElement');
      }
    });

    lessonContentList?.lessonContentData?.contents?.map((item: any) => {
      if (item?.id == lessonContentList?.lessonId) {
        setItem(item);
      }
    });
  }, [lessonContentList?.lessonContentData?.contents]);

  console.log(subjectDetails, 'hhhh');

  return (
    <Flex>
      <Box className="flex justify-between unitsAccordion">
        <>
          <Box className=" mr-5">
            <Box className="contentCourse">
              Course content
              <Text className="text-stone-400">{subjectDetails?.subjectDetailsData?.units?.length} units</Text>
            </Box>
            <Accordion className="accordionLessonContainer">
              {subjectDetails?.subjectDetailsData?.units?.map(
                (unit: { lessons: []; lessons_count: string; name: string; quizes_count: string }, index: number) => {
                  return (
                    <AccordionItem className="accordionLesson">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          <Box className="flex justify-between ">
                            <Box className="px-5">
                              {index + 1} Unit - {unit?.name}
                              <Text className="text-stone-400 ">
                                {unit?.lessons_count} Lessons - {unit?.quizes_count} Quiz
                              </Text>
                            </Box>
                          </Box>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel className="accordionLesson">
                        <Box>
                          {unit?.lessons?.map((lesson: { name: string; id: number; contents: [] }, index: number) => {
                            return (
                              <
                                // className={`flex  mt-1 px-5 ${idData === lesson?.name && 'activeLesson'}`}
                                // onClick={async (event: any) => {
                                //     setIdData(event.target.innerText);
                                //     setLoading(true);
                                //     await dispatch(lessonContent(lesson?.id));
                                //     setLoading(false);
                                // }}
                                >
                                <Accordion>
                                  <AccordionItem>
                                    <AccordionItemHeading>
                                      <AccordionItemButton className="box_accordion">
                                        {/* {item.heading} */}
                                        <Box className="flex items-center " key={index}>
                                          <img src={BookMark} alt="Book" className="mr-2 color-#9C9B9B" />
                                          <Text className="text-stone-900 mb-2">{lesson?.name}</Text>
                                        </Box>
                                      </AccordionItemButton>
                                    </AccordionItemHeading>
                                    {lesson?.contents?.map((content: { name: string; type: string; path: string }) => {
                                      return (
                                        <>
                                          <AccordionItemPanel className="">
                                            <Flex
                                              className="subLesson"
                                              onClick={() => {
                                                setItem({ path: content?.path, name: content?.name });
                                              }}
                                            >
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
                                                          : content?.type == 'audio'
                                                            ? Audio
                                                            : Zip
                                                }
                                                alt="Book"
                                                className="mr-2 color-#9C9B9B"
                                              />
                                              <div className="text-stone-400">
                                                {' '}
                                                {content?.type} : {content?.name}
                                              </div>
                                            </Flex>
                                          </AccordionItemPanel>
                                        </>
                                      );
                                    })}
                                  </AccordionItem>
                                </Accordion>

                                {/* </Box> */}
                              </>
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
        </>
      </Box>

      <Box>
        {/* <Text
          onClick={() => {
            console.log(lessonContentList?.lessonContentData?.contents[2]);
          }}
        >
          next
        </Text> */}

        <Text>{item?.name}</Text>
        <Box style={{ overflow: 'hidden' }}>
          {item?.type == 'image' ? (
            <img src={item?.path} />
          ) : (
            <iframe src={item?.path} style={{ height: '93vh', width: '68vw', border: 'none' }} />
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default DetailsUnit;
