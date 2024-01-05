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
import { gameDetails, gamesList } from 'redux-toolkit/reducer/GamesReducer';
const DetailsGames = () => {
    const dispatch = useDispatch();
    const nagivate = useNavigate();
    const statusGames = useSelector((state: any) => state.GamesReducer);

    const { id, idGame } = useParams();
    const [item, setItem] = useState<any>();
    const [contentArr, setContentArr] = useState<any>();
    const [activeId, setActiveId] = useState<any>();
    const [dataType, setDataType] = useState<any>('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            setLoading(true);
            await dispatch(gameDetails(idGame));
            await dispatch(gamesList({ id: id }));
            setLoading(false);
        })();
    }, [id, dispatch]);

    useEffect(() => {
        setItem(statusGames?.gamesDetailstData?.game);
        setActiveId(statusGames?.gamesDetailstData?.game?.id);
    }, [statusGames?.gamesDetailstData]);

    useEffect(() => {
        setContentArr(statusGames?.gamesListData?.games);
    }, [statusGames?.gamesListData?.games]);
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
                <Text className={`${show ? 'ms-5' : 'ms-48'} text-LightSeaGreen text-l font-semibold`}>{item?.name}</Text>
                <Flex className="justify-between ml-auto">
                    <button
                        className={`hover:font-semibold hover:text-base transition-all mx-5 ${contentArr?.findIndex((item: any) => {
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
                        onClick={async () => {
                            let index = contentArr?.findIndex((item: any) => {
                                return item.id == activeId;
                            });

                            if (typeof index === 'number' && index != -1) {

                                setActiveId(contentArr[index - 1]?.id);
                                setItem(contentArr[index - 1]);
                                setLoading(true);

                                await dispatch(gameDetails(contentArr[index - 1].id));

                                setLoading(false);
                            }
                        }}
                    >
                        <div className="mx-2 flex justify-center">
                            <div>Previous</div>
                        </div>
                    </button>

                    <button
                        onClick={async () => {
                            let index = contentArr?.findIndex((item: any) => {
                                return item.id == activeId;
                            });

                            if (typeof index === 'number' && index != -1) {

                                setActiveId(contentArr[index + 1]?.id);
                                setItem(contentArr[index + 1]);
                                setLoading(true);

                                await dispatch(gameDetails(contentArr[index + 1].id));

                                setLoading(false);
                            }
                        }}
                        className={` hover:font-semibold hover:text-base transition-all ${contentArr?.findIndex((item: any) => {
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

            <Flex>
                <Box className={`${show && 'hidden'} transition-all`}>
                    <Box className="accordionLessonContainer">
                        {statusGames?.gamesListData?.games?.map((game: { name: string; id: number; index: number }) => {
                            return (
                                <Box
                                    className={`cursor-pointer subLesson ${activeId == game?.id && 'activeLesson'}`}
                                    onClick={async () => {
                                        setActiveId(game.id)
                                        setLoading(true);
                                        setItem(game);
                                        await dispatch(gameDetails(game.id));

                                        setLoading(false);
                                    }}
                                >
                                    <Box className="accordionGames" key={id}>
                                        {game.name}
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
                <Box
                    className={`${show ? 'absoluteIconAfter' : 'absoluteIcon'} cursor-pointer`}
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    <Box>{show ? <img src={Arrow} alt="" /> : <img src={Arrow2} alt="" />}</Box>
                </Box>
                {loading ? (
                    <LoadingPartially />
                ) : (
                    <Box className="content w-full">
                        {item?.type == 'image' ? (
                            <div className="imageIframe">
                                <img src={item?.path} />
                            </div>
                        ) : item?.type == 'word' ? (
                            <iframe
                                title="Word and excel Viewer"
                                className="w-full h-full"
                                height={'100%'}
                                width={'100%'}
                                src={'https://view.officeapps.live.com/op/embed.aspx?src=' + item?.path}
                            ></iframe>
                        ) : (
                            <iframe src={item?.path} allowFullScreen style={{ width: '100%', height: '90vh' }} scrolling="no" />
                        )}
                    </Box>
                )}
            </Flex>
        </>
    );
};

export default DetailsGames;
