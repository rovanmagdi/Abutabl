import { Box, Flex, Text } from '@mantine/core'
import React from 'react'

const Progress = () => {
    return (
        <>
            <Flex className="align-center justify-between">
                <Text className="pb-2 text-gray text-sm">Your progress</Text>
                <Text className="pb-2 text-black text-sm">Completed 80%</Text>
            </Flex>

            <Box className="bg-gray rounded-xl black ">
                <Box className="bg-gray rounded-xl ">
                    <div className="h-[15px] bg-Warning w-[80%] rounded-xl">
                        <div className="h-[4px] bg-Sunglow w-[98%] rounded-2xl absolute bottom-1 mx-1 "></div>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default Progress