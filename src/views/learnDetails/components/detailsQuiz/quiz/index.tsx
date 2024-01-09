import PageHeader from '../../pageHeader';
import Sound from 'assets/images/svg/sound.svg';
import Writting from 'assets/images/svg/Skill.svg';

import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Flex, Input, Text } from '@mantine/core';
import Reading from '../../../../../assets/images/svg/reading.svg';
import { useEffect, useRef, useState } from 'react';
import Progress from 'components/Progress';
import { Insight } from './insight';
import { quizDetails } from 'redux-toolkit/reducer/QuizReducer';
import CorrectAnswer from './CorrectAnswer';
import InCorrectAnswer from './InCorrectAnswer';
import { useIntl } from 'react-intl';
import { InputWrapper } from 'components/input/styles';
import LoadingPartially from 'components/loading-partially';

export default function Quiz() {
    const dispatch = useDispatch();
    const { formatMessage } = useIntl();

    const { idQuiz } = useParams();
    const [isActive, setIsActive] = useState<boolean>();
    const [loading, setLoading] = useState<boolean>();
    const [indexQuestion, setIndexQuestion] = useState<number>(0);
    const [draggedItem, setDraggedItem] = useState(null);
    const [idItem, setIdItem] = useState(null);
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [droppedItems, setDroppedItems] = useState<any>([]);
    const [questions, setQuestions] = useState([]);
    const [questionActive, setQuestionActive] = useState<any>({});
    const [questionMain, setQuestionMain] = useState<any>({});
    const [questionAudio, setQuestionAudio] = useState<{ text: string; ext: string }>();
    // -------------------------------Result------------
    const [checkResult, setCheckResult] = useState<boolean>();
    const [showAnswer, setShowAnswer] = useState<string>('');
    const [checkResultTF, setCheckResultTF] = useState<string>('');
    //------------------------------------SHN-------------------
    const [answserSHN, setAnswerSHN] = useState<string>('');
    const detailsQuiz = useSelector((state: any) => state.QuizReducer);

    //***************************** */ Matching
    const handleDragStart = (index: any, e: any) => {
        console.log(index);

        setDraggedItem(index);
        e.dataTransfer.setData('text/plain', index);
    };

    const handleDragOver = (e: any, index: any) => {
        e.preventDefault();
        setIdItem(index);
        console.log(index, 'oooo');
    };

    const mergeArrays = (arrays: any) => {
        const maxLength = Math.max(...arrays.map((arr: any) => arr.length));

        const combinedArray = Array.from({ length: maxLength }, (_, index) => {
            return arrays.map((arr: any) => arr[index]).find((item: any) => item !== undefined);
        });

        return combinedArray;
    };
    const handleDrop = (e: any) => {
        if (draggedItem === null) return;

        const draggedItemContent = items[draggedItem];

        const arr: any = new Array(2);

        arr.splice(idItem, 0, draggedItemContent);

        // arr.push(draggedItemContent)
        setDroppedItems((index: any) => [...index, arr]);
        console.log(droppedItems);

        const newItems = items.filter((_, index) => index !== draggedItem);

        setItems(newItems);

        setDraggedItem(null);
    };

    // **************************************side effect************
    useEffect(() => {
        (async () => {
            setLoading(true)
            await dispatch(quizDetails(idQuiz));
            setLoading(false)
        })()
    }, [dispatch]);
    useEffect(() => {
        console.log(mergeArrays(droppedItems));
    }, [droppedItems]);

    useEffect(() => {
        if (
            Array.isArray(detailsQuiz?.gamesDetailstData?.questions) &&
            detailsQuiz?.gamesDetailstData?.questions.length > 0
        ) {
            setQuestions(detailsQuiz?.gamesDetailstData?.questions);
            setQuestionActive(detailsQuiz?.gamesDetailstData?.questions[indexQuestion]);
            setQuestionMain(detailsQuiz?.gamesDetailstData?.questions[indexQuestion]?.info?.question?.lines[indexQuestion]);
            setQuestionAudio(detailsQuiz?.gamesDetailstData?.questions[indexQuestion]?.info?.question?.lines[1]);
        }
    }, [detailsQuiz, indexQuestion]);

    // ********************************************Functions

    const handleNext = () => {
        setIndexQuestion(indexQuestion + 1);
        setCheckResult(false);
        setShowAnswer('');
    };
    console.log(questionActive);
    const handleCheck = () => {
        console.log(questionActive?.info?.type == 'SHN');

        // --------------------------TF------------------------------
        if (questionActive?.info?.type == 'TF') {
            if (questionActive?.info?.corAnswer == isActive) {
                setCheckResultTF('');
                setShowAnswer('correct');
                setCheckResult(true);
            } else {
                setShowAnswer('incorrect');
                if (questionActive?.info?.corAnswer == true) {
                    setCheckResultTF('T');
                } else {
                    setCheckResultTF('F');
                }
                // questionActive?.info?.corAnswer == false && setCheckResultF('T')
            }
        }
        if (questionActive?.info?.type == 'SHN') {
            console.log('hhhh');

            if (answserSHN.length > 0) {
                setCheckResult(true);
                setShowAnswer('correct');
            } else {
                setCheckResult(false);
                setShowAnswer('incorrect');
            }
        }
    };

    return (
        <>
            <PageHeader title="" route="/learn" />

            {loading ? (
                <Flex className="bg-white rounded-[15px] h-full">
                    <LoadingPartially />

                </Flex>
            ) : (
                <>
                    <Flex className="bg-white rounded-[15px] w-100 h-full">
                        <Box className="bg-white flex flex-col p-11 h-5/5 rounded-[15px] border-[1px] border-Platinum ml-2 mt-2 mb-2 w-3/4">
                            {/*********************************** Progress ***********************************/}
                            <Progress />
                            {/*********************************** Questions ***********************************/}
                            <Box className=" mt-5">
                                {questionActive?.info?.type == 'TF' ? <img src={Reading} /> : <img src={Writting} />}

                                <Text className="font-semibold text-CharlestonGreen mt-2">{questionMain?.text}</Text>
                                <Container className="m-5 mx-auto">
                                    <Box className="flex gap-2">
                                        <Text className="text-gray text-sm ">Your Answer ( {questionActive?.score} points )</Text>
                                        { }
                                        {questionAudio?.ext == 'image' ? (
                                            <img src={questionAudio?.text} className="w-[200px]" />
                                        ) : (
                                            <img
                                                src={Sound}
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    console.log(questionAudio);

                                                    new Audio(questionAudio?.text).play();
                                                }}
                                            />
                                        )}
                                    </Box>

                                    {questionActive?.info?.type == 'TF' ? (
                                        <>
                                            <Flex className="align-center justify-around mt-14 mb-14 w-100 gap-2">
                                                <Text
                                                    className={`border border-Platinum rounded-[18px] p-5 shadow-custom-sm  cursor-pointer inline w-3/4 
                                        ${isActive == true && 'bg-blue shadow-custom-sm-blue'}
                                         ${checkResult == true &&
                                                        isActive == true &&
                                                        'bg-Lotion shadow-custom-sm-green'
                                                        }
                                        ${checkResultTF.length != 0 &&
                                                        `${checkResultTF == 'F'
                                                            ? 'bg-error shadow-custom-sm-red'
                                                            : 'bg-Lotion shadow-custom-sm-green'
                                                        }`
                                                        }
                                               
                                        `}
                                                    onClick={() => {
                                                        setIsActive(true);
                                                    }}
                                                >
                                                    True
                                                </Text>
                                                <Text
                                                    className={`border border-Platinum rounded-[18px] p-5 shadow-custom-sm  cursor-pointer inline w-3/4
                                         ${isActive == false && 'bg-blue shadow-custom-sm-blue'}
                                            
                                            ${checkResult == true &&
                                                        isActive == false &&
                                                        'bg-Lotion shadow-custom-sm-green'
                                                        }
                                            ${checkResultTF.length != 0 &&
                                                        `${checkResultTF == 'F'
                                                            ? 'bg-Lotion shadow-custom-sm-green'
                                                            : 'bg-error shadow-custom-sm-red'
                                                        }`
                                                        }
                                        `}
                                                    onClick={() => {
                                                        setIsActive(false);
                                                    }}
                                                >
                                                    False
                                                    {/* {checkResult == true ?checkResultTF == 'F' ? <>green</> : <>red</>} */}
                                                </Text>
                                            </Flex>
                                            {/* <Box className="text-Danger">
                                        Reason{questionActive?.info?.reason_is_required == '1' && <span>*</span>}: <input type="text" name="fname" className="border border-gray rounded-[10px] p-2" onChange={(e) => {
                                            // setReason(e.target.value)
                                        }} />

                                    </Box> */}
                                        </>
                                    ) : (
                                        <>
                                            {' '}
                                            {questionActive?.info?.type == 'SHN' ? (
                                                <>
                                                    <Box className="border border-Platinum rounded-[18px] p-5 shadow-custom-sm  mt-5 mb-28">
                                                        <Input
                                                            className="outline-none"
                                                            name="code"
                                                            onChange={(e) => {
                                                                setAnswerSHN(e.target.value);
                                                            }}
                                                            placeholder={'Enter your answer'}
                                                            defaultValue="54415"
                                                        />
                                                    </Box>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </>
                                    )}
                                    {/********************************************************* MCQ ************************************/}
                                    {/* <Flex className='align-center justify-around mt-4 w-[100]'>
                            <input type="checkbox" checked={isChecked} />
        
                            <Box className='border border-Platinum rounded-[30px] p-5 shadow-custom-sm hover:bg-Lotion cursor-pointer inline'

                                style={{
                                    backgroundColor: isActive ? 'white' : '#c8c7c5',
                                }}
                                onClick={() => {
                                    setIsActive(currentState => {
                                        return !currentState;
                                    });
                                }}>
                                <img src={man} className='w-[100px]' />
                            </Box>
                            <Box className='border border-Platinum rounded-[30px] p-5 shadow-custom-sm'>
                                <img src={man} className='w-[100px]' />
                            </Box>
                            <Box className='border border-Platinum rounded-[30px] p-5 shadow-custom-sm'>
                                <img src={man} className='w-[100px]' />
                            </Box>
                        </Flex> */}
                                    {/***********************************************Matching*********************************/}
                                    {/* <Flex className="flex justify-between">
                                <Box className="gap-3">
                                    {items.map((item, index) => (
                                        <Box
                                            className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm hover:bg-Lotion cursor-pointer h-[100px] w-[100px]"
                                            key={index}
                                            draggable
                                            onDragStart={(e: any) => handleDragStart(index, e)}
                                        >
                                            {item}
                                        </Box>
                                    ))}
                                </Box>
                                <Flex className="justify-around gap-8">
                                    <Flex className="gap-3">
                                        <Box className="gap-3" onDrop={(e: any) => handleDrop(e)}>
                                            {mergeArrays(droppedItems).length == 0 &&
                                                items.map((item, index) => (
                                                    <Box
                                                        onDragOver={(e: any) => handleDragOver(e, index)}
                                                        className="border-dashed border-2 border-Platinum rounded-[30px] p-5 m-5 hover:bg-Lotion cursor-pointer h-[100px] w-[100px] text-xs text-gray"
                                                        key={index}
                                                    >
                                                        Drag your answer here
                                                    </Box>
                                                ))}
                                        </Box>
                                        <Box>
                                            <Box onDrop={(e: any) => handleDrop(e)}>
                                                {mergeArrays(droppedItems).map((item: any, index: any) => (
                                                    <>
                                                        {' '}
                                                        {item == undefined ? (
                                                            <Box
                                                                onDragOver={(e: any) => handleDragOver(e, index)}
                                                                className="border-dashed border-2 border-Platinum rounded-[30px] p-5 m-5 hover:bg-Lotion cursor-pointer h-[100px] w-[100px] text-xs text-gray"
                                                                key={index}
                                                            >
                                                                Drag your answer here
                                                            </Box>
                                                        ) : (
                                                            <Box
                                                                className=" border-2 border-Platinum rounded-[30px] p-5 m-5  hover:bg-Lotion cursor-pointer h-[100px] w-[100px] text-xs text-gray"
                                                                key={index}
                                                            >
                                                                {console.log(item)}
                                                                {item}
                                                            </Box>
                                                        )}
                                                    </>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Flex>
                                   
                                    <Box>
                                        <Box className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm hover:bg-Lotion cursor-pointer h-[100px] w-[100px]">
                                            1
                                        </Box>
                                        <Box className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm hover:bg-Lotion cursor-pointer h-[100px] w-[100px] ">
                                            1
                                        </Box>
                                        <Box className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm hover:bg-Lotion cursor-pointer h-[100px] w-[100px] ">
                                            1
                                        </Box>
                                    </Box>
                                </Flex>
                            </Flex> */}
                                    {/***********************************************SHN*********************************/}

                                    {/* <Box>

                                <Input
                                    name="answer"
                                    label={formatMessage({ id: 'Answer' })}
                                    placeholder={formatMessage({ id: 'Answer' })}
                                    // registerOptions={{
                                    //     required: {
                                    //         value: true,
                                    //         message: 'requiredField',
                                    //     },

                                    // }}
                                    defaultValue="54415"
                                />
                            </Box> */}
                                </Container>
                            </Box>
                            {/*********************************** Check button ***********************************/}
                            {showAnswer.length == 0 && (
                                <Box className="border-t-[1px] border-Platinum flex justify-start pt-5 mt-12">
                                    <Button
                                        type="submit"
                                        className="text-EerieBlack bg-Sunglow  rounded-[15px] shadow-custom-sm-warning w-[100px] self-end m-auto hover:bg-Warning"
                                        onClick={() => {
                                            handleCheck();
                                        }}
                                    >
                                        Check
                                    </Button>{' '}
                                </Box>
                            )}

                            {showAnswer.length !== 0 && (
                                <>
                                    {showAnswer == 'correct' ? (
                                        <CorrectAnswer handleNext={handleNext} />
                                    ) : (
                                        <InCorrectAnswer handleNext={handleNext} />
                                    )}
                                </>
                            )}
                        </Box>{' '}
                        <Insight indexQuestion={indexQuestion} questions={questions || []} />
                    </Flex>
                </>
            )}

            {/*********************************** Insights ***********************************/}
        </>
    );
}
