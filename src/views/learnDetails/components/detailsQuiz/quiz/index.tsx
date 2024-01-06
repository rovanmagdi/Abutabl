import PageHeader from '../../pageHeader';
import man from 'assets/images/svg/background_quiz.svg';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Flex, Text } from '@mantine/core';
import Reading from '../../../../../assets/images/svg/reading.svg';
import { useEffect, useRef, useState } from 'react';
export default function Quiz() {
    const [isActive, setIsActive] = useState(false);

    const [draggedItem, setDraggedItem] = useState(null);
    const [idItem, setIdItem] = useState(null);
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

    const [droppedItems, setDroppedItems] = useState<any>([]);

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
        setDroppedItems((index: any) => [...index, arr])
        console.log(droppedItems);


        const newItems = items.filter((_, index) => index !== draggedItem);

        // setItems(newItems);

        setDraggedItem(null);
    };

    useEffect(() => {
        console.log(mergeArrays(droppedItems));


    }, [droppedItems])
    return (
        <>
            <PageHeader title="" route="/learn" />

            <Box className="bg-white rounded-[15px] flex flex-col p-11 h-5/5">
                <Flex className="align-center justify-between">
                    <Text className="pb-2 text-gray text-sm">Your progress</Text>
                    <Text className="pb-2 text-black text-sm">Completed 80%</Text>
                </Flex>

                <Box className="bg-gray rounded-xl black">
                    <Box className="bg-gray rounded-xl ">
                        <div className="h-[15px] bg-Warning w-[80%] rounded-xl">
                            <div className="h-[4px] bg-Sunglow w-[98%] rounded-2xl absolute bottom-1 mx-1 "></div>
                        </div>
                    </Box>
                </Box>
                <Box className=" mt-5">
                    <img src={Reading} />
                    <Text className="font-semibold text-CharlestonGreen mt-2">Which one of these is “the apple”?</Text>
                    <Container className="m-5 mx-auto">
                        <Text className="text-gray text-sm ">Your Answer ( 10 points )</Text>
                        {/********************************************************* MCQ ************************************/}
                        {/* <Flex className='align-center justify-around mt-4 w-[100]'>
                            <Box className='border border-Platinum rounded-[30px] p-5 shadow-custom-sm hover:bg-Lotion cursor-pointer '

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
                        <Flex className="flex justify-between">
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

                                        {items.map((item, index) => (
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

                                        {mergeArrays(droppedItems).map((item: any, index: any) => (
                                            <Box
                                                className=" border-2 border-Platinum rounded-[30px] p-5 m-5  hover:bg-Lotion cursor-pointer h-[100px] w-[100px] text-xs text-gray"
                                                key={index}
                                            >
                                                {item}
                                            </Box>
                                        ))}
                                    </Box>
                                </Flex>
                                {/* //////////////////////// */}
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
                        </Flex>
                    </Container>
                </Box>
                <Button
                    type="submit"
                    className="text-EerieBlack border-Platinum hover:bg-white rounded-[15px] shadow-custom-sm w-[100px] self-end mt-auto"
                >
                    Check
                </Button>
            </Box>
        </>
    );
}
