import shapes from 'assets/images/png/shapes.png';
import iol from 'assets/images/svg/Group_quiz.svg';
import quizes from 'assets/images/svg/Background_Complete.svg';
import Quiz from 'assets/images/svg/quiz.svg';
import Star from 'assets/images/svg/star.svg';
import man from 'assets/images/svg/background_quiz.svg';
import { Box, Button, Flex, Text } from '@mantine/core';
import PageHeader from '../../pageHeader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { quizDetails } from 'redux-toolkit/reducer/QuizReducer';
import { useNavigate, useParams } from 'react-router-dom';
export default function QuizDetails() {
    const { idQuiz } = useParams();
    const dispatch = useDispatch();
    const nagivate = useNavigate();
    const detailsQuiz = useSelector((state: any) => state.QuizReducer);
    useEffect(() => {
        dispatch(quizDetails(idQuiz));
    }, [dispatch]);

    return (
        // {detailsQuiz?.gamesDetailstData?.quize[0]?.title}
        <>
            <PageHeader title='' route="/learn" />
            <div className="bg-PaoloVeroneseGreen transition-all flex flex-col justify-start items-center relative">
                <img src={shapes} className="h-[0px] " alt="shapes" />
                <img src={iol} alt="logo" width={250} className=" md:block md:absolute bottom-0 right-0" />

                <div className="w-full h-[85vh] md:p-0 flex justify-center relative">
                    <img src={quizes} className="absolute" alt="" />
                    <Box>
                        <img src={man} alt="" className="mx-32" />

                        <div className="border border-Platinum bg-white w-[90%] p-5 md:p-10 flex flex-col justify-start items-center gap-6  rounded-[25px] shadow-custom-sm mx-2 ">
                            <Text className="font-bold text-lg text-DavysGrey">Interesting quiz awaits you</Text>
                            <Text className="text-gray">Play quizzes and get points to reach the next level</Text>
                            <Flex className="gap-5">
                                <Box className="border border-Platinum rounded-[15px] p-5 flex flex-col justify-start items-center ">
                                    <img src={Quiz} />
                                    <Text className="font-bold text-l">{detailsQuiz?.gamesDetailstData?.questions?.length}</Text>
                                    <Text className="text-gray text-xs">Total Question</Text>
                                </Box>
                                <Box className="border border-Platinum rounded-[15px] p-5 flex flex-col justify-start items-center ">
                                    <img src={Star} />
                                    <Text className="font-bold text-l">{ } points</Text>
                                    <Text className="text-gray text-xs">for each question</Text>
                                </Box>
                            </Flex>
                            <Button
                                type="submit"
                                className="bg-Sunglow hover:bg-Sunglow rounded-[15px] shadow-custom-sm-warning w-[100%]"
                                onClick={() => {
                                    nagivate(`/learn/quiz/${idQuiz}`)
                                }}
                            >
                                Start quiz
                            </Button>
                            <Button
                                type="submit"
                                className="text-EerieBlack border-Platinum hover:bg-white rounded-[15px] shadow-custom-sm w-[100%]"
                            >
                                Skip
                            </Button>
                        </div>
                    </Box>
                </div>
            </div>
        </>
    );
}
