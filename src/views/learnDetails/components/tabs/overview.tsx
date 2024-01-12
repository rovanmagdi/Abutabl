import book from 'assets/images/png/Book.png';
import Article from 'assets/images/svg/article.svg';
import Video from 'assets/images/svg/demand_video.svg';
import Download from 'assets/images/svg/download.svg';
import Quiz from 'assets/images/svg/quiz.svg';
import Game from 'assets/images/svg/gameColor.svg';
import Sheet from 'assets/images/svg/sheets.svg';
import Certifaction from 'assets/images/svg/certificate.svg';
import AccordionComponent from 'views/learnDetails/components/tabs/accordion/accordion';
import { Box, Text } from '@mantine/core';
import { useSelector } from 'react-redux';


const Overview = () => {
    const subjectDetails = useSelector((state: any) => state.SubjectsReducer.subjectDetailsData);
    console.log(subjectDetails);

    const contant = [
        // { image: Video, label: '65 hours on demand videos' },
        // { image: Download, label: '49 downloadable resources' },
        {
            image: Article,
            label: <> {subjectDetails?.basic_info?.lessons_count} Lessons</>

        },
        {
            image: Quiz,
            label: <> {subjectDetails?.basic_info?.quizes_count} Quizes </>
        },
        {
            image: Game,
            label: <>{subjectDetails?.basic_info?.games_count} Games</>,
        },
        {
            image: Sheet,
            label: <>{subjectDetails?.basic_info?.lessons_count} Lessons</>,
        },
        // { image: Certifaction, label: 'Certificate of completion' },
    ];


    return (
        <Box className="flex justify-between m-5 h-full">
            <Box className="w-2/5 mr-5 overview ">
                <img
                    src={subjectDetails?.basic_info?.photo}
                    alt="Book"
                    className="m-auto heightImg"


                />
                <Text className="mt-10">This course include</Text>
                {contant.map((item: { [key: string]: string | JSX.Element }) => {
                    return (
                        <Box className="flex mt-5 items-center">
                            <img src={item.image.toString()} alt="Book" className="mr-2 color-#9C9B9B" />
                            <Box className="text-stone-400"> {item.label}</Box>
                        </Box>
                    );
                })}
            </Box>
            <Box className="w-3/5 ">
                <AccordionComponent />
            </Box>
        </Box>
    );
};

export default Overview;
