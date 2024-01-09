import { Box, Flex, Text } from '@mantine/core';
import QuizIcon from '../../../../../assets/images/svg/quiz.svg';
import Star from '../../../../../assets/images/svg/star.svg';
import Clock from '../../../../../assets/images/svg/clock_color.svg';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

interface IInsight {
    indexQuestion: number;
    questions: any[]
}
export const Insight = ({ indexQuestion, questions }: IInsight) => {
    const detailsQuiz = useSelector((state: any) => state.QuizReducer);

    const Ref = useRef(null);

    // The state for our timer
    const [timer, setTimer] = useState("00:00:00");

    const getTimeRemaining = (e: any) => {
        const total =
            Date.parse(e) - Date.parse(new Date().toDateString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
        const hours = Math.floor(
            (total / 1000 / 60 / 60) % 24
        );
        return {
            total,
            hours,
            minutes,
            seconds,
        };
    };

    const startTimer = (e: any) => {
        let { total, hours, minutes, seconds } =
            getTimeRemaining(e);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : "0" + hours) +
                ":" +
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    // startTimer(10)
    return (
        <>
            <Box className="border-[1px] border-Platinum mr-2 mt-2 mb-2  rounded-[15px] w-1/4 gap-5 ">

                <Box className="font-semibold border-b-2 border-Platinum p-5" style={{ textAlign: 'center' }}>
                    Your insights
                </Box>
                <Flex className=" flex flex-col justify-center mt-20 items-center">
                    <Box className="border border-Platinum rounded-[15px] p-5 w-[150px] mb-5  mx-8 flex flex-col justify-center">
                        <img src={QuizIcon} className="h-[30px] " />
                        <Text className="text-bold m-auto">{indexQuestion} / {questions?.length}</Text>
                        <Text className="text-xs text-gray m-auto">Question answered</Text>
                    </Box>

                    <Box className="border border-Platinum rounded-[15px] p-5 w-[150px] mb-5 mx-8 flex flex-col justify-center">
                        <img src={Clock} className="h-[30px] " />
                        <Text className="text-bold m-auto">{timer}</Text>
                        <Text className="text-xs text-gray m-auto">Time elapsed</Text>
                    </Box>

                    <Box className="border border-Platinum rounded-[15px] p-5 w-[150px] mb-5 mx-8 flex flex-col justify-center">
                        <img src={Star} className="h-[30px] " />
                        <Text className="text-bold m-auto"> Points</Text>
                        <Text className="text-xs text-gray m-auto">Out of {detailsQuiz?.gamesDetailstData?.quize?.score_to_pass}</Text>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};
