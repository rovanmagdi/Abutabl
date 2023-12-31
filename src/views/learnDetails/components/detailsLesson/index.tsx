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
import Arrow from 'assets/images/svg/arrow.svg';
import Arrow2 from 'assets/images/svg/arrow2.svg';
import ArrowCursor from 'assets/images/svg/arrowCursor.svg';
import { useNavigate } from 'react-router-dom';

import Sheet from 'assets/images/svg/sheets.svg';
import { lessonContent } from 'redux-toolkit/reducer/UnitsReducer';
import LoadingPartially from 'components/loading-partially';
import './index.css';
import { ReactComponent as LogoImage } from 'assets/images/svg/logo-aboutabl-dark 2.svg';

import { useParams } from 'react-router-dom';
import { SubjectDetails } from 'redux-toolkit/reducer/DetailsSubjectsReducer';
const DetailsUnit = () => {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const subjectDetails = useSelector((state: any) => state.DetailsSubjectsReducer);
  const lessonContentList = useSelector((state: any) => state.UnitsReducer);
  const { id, idUnit } = useParams();
  const [item, setItem] = useState<any>(localStorage.getItem('id'));
  const [contentArr, setContentArr] = useState<any>();
  const [activeId, setActiveId] = useState<any>(localStorage.getItem('id'));
  const [dataType, setDataType] = useState<any>('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(lessonContentList, "1");


    (async () => {
      setLoading(true);
      await dispatch(lessonContent(idUnit));
      await dispatch(SubjectDetails(id));
      setLoading(false);
    })();
  }, [id, dispatch]);

  useEffect(() => {
    localStorage.setItem('id', activeId);


  }, [activeId]);


  useEffect(() => {
    const arr: any = [];
    subjectDetails?.subjectDetailsData?.units?.map((unit: { lessons: [] }) => {
      unit?.lessons?.map((lesson: { contents: [] }) => {
        lesson?.contents?.map((content: any) => {
          if (content?.id == localStorage.getItem('id')) {


            setItem(content);
            setActiveId(content.id);


          }
          arr.push(content);
        });
      });
    });
    setContentArr(arr);
  }, [subjectDetails]);

  return (
    <>
      <Box className="flex items-center mx-5 w-100 mt-3 mb-3">
        <Box
          className="cursor-pointer mx-5"
          onClick={() => {
            nagivate('/learn');
          }}
        >
          <LogoImage width={80} />
        </Box>
        <Text className={`${show ? "ms-5" : "ms-48"} text-LightSeaGreen text-l font-semibold`}>{item?.name}</Text>
        <Flex className="justify-between ml-auto">
          <button
            className={`hover:font-black hover:text-lg transition-all mx-5 ${contentArr?.findIndex((item: any) => {
              return item.id == activeId;
            }) == 0 || activeId == ''
              ? 'text-gray'
              : 'text-LightSeaGreen'
              }`}
            disabled={
              contentArr?.findIndex((item: any) => {
                return item.id == activeId;
              }) == 0 || activeId == ''
            }
            onClick={() => {
              let index = contentArr?.findIndex((item: any) => {
                return item.id == activeId;
              });

              if (typeof index === 'number' && index != -1) {
                setDataType(contentArr[index - 1]?.type);
                setActiveId(contentArr[index - 1]?.id);
                setItem(contentArr[index - 1]);
              }
            }}
          >
            <div className="mx-2 flex justify-center">

              <div>

                Previous
              </div>
            </div>
          </button>

          <button
            onClick={() => {
              let index = contentArr?.findIndex((item: any) => {
                return item.id == activeId;
              });

              if (typeof index === 'number' && index != -1) {
                setDataType(contentArr[index + 1]?.type);
                setActiveId(contentArr[index + 1]?.id);
                setItem(contentArr[index + 1]);
              }
            }}
            className={` hover:font-black hover:text-lg transition-all ${contentArr?.findIndex((item: any) => {
              return item.id == activeId;
            }) ==
              contentArr?.length - 1 || activeId == ''
              ? 'text-gray'
              : 'text-LightSeaGreen'
              } `}
            disabled={
              contentArr?.findIndex((item: any) => {
                return item.id == activeId;
              }) ==
              contentArr?.length - 1 || activeId == ''
            }
          >
            Next
            <span className="mx-2">{/* <KeyboardBackspaceIcon className="rotate-180" /> */}</span>
          </button>
        </Flex>
      </Box>

      {loading ? (
        <Box className="mt-48">
          <LoadingPartially />
        </Box>
      ) : (
        <Flex>


          <Box className={`${show && 'hidden'} transition-all`}>
            <Accordion className="accordionLessonContainer" allowZeroExpanded>
              {subjectDetails?.subjectDetailsData?.units?.map(
                (unit: { lessons: []; lessons_count: string; name: string; quizes_count: string, id: number }, index: number) => {
                  return (
                    <AccordionItem className="accordionLesson" key={unit.id}>
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
                      <AccordionItemPanel className="accordionLesson" >
                        <Box>
                          {unit?.lessons?.map((lesson: { name: string; id: number; contents: [] }, index: number) => {
                            return (

                              <Accordion allowZeroExpanded>
                                <AccordionItem key={index}>
                                  <AccordionItemHeading>
                                    <AccordionItemButton>
                                      <Box className="flex justify-between ">
                                        {/* {item.heading} */}
                                        <Box className="flex items-center " key={index}>
                                          <img src={BookMark} alt="Book" className="mr-2 color-#9C9B9B" />
                                          <Text className="text-stone-900 mb-2">{lesson?.name}</Text>
                                        </Box>
                                      </Box>
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel className="accordionLesson" >
                                    {lesson?.contents?.map(
                                      (content: { name: string; type: string; path: string; id: number }) => {
                                        return (
                                          <>
                                            <Flex
                                              className={`cursor-pointer subLesson ${activeId == content?.id && 'activeLesson'
                                                }`}
                                              onClick={() => {


                                                setActiveId(content?.id);
                                                setItem({ path: content?.path, name: content?.name, type: content?.type });

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
                                          </>
                                        );
                                      }
                                    )}
                                  </AccordionItemPanel>
                                </AccordionItem>
                              </Accordion>


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
          <Box
            className={`${show ? 'absoluteIconAfter' : 'absoluteIcon'} cursor-pointer`}
            onClick={() => {
              setShow(!show);
            }}
          >
            <Box>{show ? <img src={Arrow} alt="" /> : <img src={Arrow2} alt="" />}</Box>
          </Box>
          <Box className="content w-full">

            {item?.type == "image" ?
              <div className="imageIframe">
                <img src={item?.path}
                />

              </div>


              :
              item?.type == "word" ?
                <iframe
                  title="Word and excel Viewer"
                  className="w-full h-full"
                  height={"100%"}
                  width={"100%"}
                  src={
                    "https://view.officeapps.live.com/op/embed.aspx?src=" +
                    item?.path
                  }
                >

                </iframe>
                :
                <iframe src={item?.path} allowFullScreen
                  style={{ width: "100%", height: "90vh" }} scrolling="no" />

            }

          </Box>
        </Flex>
      )}
    </>
  );
};

export default DetailsUnit;


