import { Box, Text } from '@mantine/core'
import QuizIcon from '../../../../../assets/images/svg/quiz.svg';


export const Insight = () => {
    return (
        <>
            <Box className="border-[1px] border-Platinum mr-2 mt-2 mb-2  rounded-[15px] w-1/4 gap-5">
                <Text className="m-auto self-start p-5 mb-20 mx-12 font-semibold">Your Insights</Text>

                <Box className="border border-Platinum rounded-[15px] p-5  hover:bg-Lotion cursor-pointer  w-[90%] mb-5 mx-3">
                    <img src={QuizIcon} />
                    <Text className="text-bold m-auto">1 / 5</Text>
                    <Text className="text-sm text-gray m-auto">Question answered</Text>
                </Box>

                <Box className="border border-Platinum rounded-[15px] p-5  hover:bg-Lotion cursor-pointer m-auto w-[90%] mb-5 mx-3">
                    <img src={QuizIcon} />
                    <Text className="text-bold">1 / 5</Text>
                    <Text className="text-sm text-gray">Question answered</Text>
                </Box>

                <Box className="border border-Platinum rounded-[15px] p-5  hover:bg-Lotion cursor-pointer m-auto w-[90%] mb-5 mx-3">
                    <img src={QuizIcon} />
                    <Text className="text-bold">1 / 5</Text>
                    <Text className="text-sm text-gray">Question answered</Text>
                </Box>
            </Box>

        </>
    )
}
