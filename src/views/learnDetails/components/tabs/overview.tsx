import book from 'assets/images/png/Book.png';
import Article from 'assets/images/svg/article.svg';
import Video from 'assets/images/svg/demand_video.svg';
import Download from 'assets/images/svg/download.svg';
import Quiz from 'assets/images/svg/quiz.svg';
import Game from 'assets/images/svg/gameColor.svg';
import Sheet from 'assets/images/svg/sheets.svg';
import Certifaction from 'assets/images/svg/certificate.svg';
import AccordionComponent from 'views/learnDetails/components/accordion/accordion';
import { Box, Text } from '@mantine/core';
import { useSelector } from 'react-redux';
import { RootState } from 'redux-toolkit/store/store';
import { ISubjectDetails } from 'views/learnDetails/types/SubjectDetails.type';

const Overview = () => {
    const subjectDetails = useSelector((state: any) => state.DetailsSubjectsReducer.subjectDetailsData);

    const contant = [
        // { image: Video, label: '65 hours on demand videos' },
        // { image: Download, label: '49 downloadable resources' },
        {
            image: Article,
            label: subjectDetails?.basic_info?.map((basic: { [key: string]: string }) => {
                return <>{basic?.lessons_count} Lessons</>;
            }),
        },
        {
            image: Quiz,
            label: subjectDetails?.basic_info?.map((basic: { [key: string]: string }) => {
                return <>{basic?.games_count} Quiz</>;
            }),
        },
        {
            image: Game,
            label: subjectDetails?.basic_info?.map((basic: { [key: string]: string }) => {
                return <>{basic?.games_count} Games</>;
            }),
        },
        {
            image: Sheet,
            label: subjectDetails?.basic_info?.map((basic: { [key: string]: string }) => {
                return <>{basic?.work_sheets_count} Work sheet</>;
            }),
        },
        // { image: Certifaction, label: 'Certificate of completion' },
    ];
    // console.log(
    //     subjectDetails?.basic_info?.map((basic: { [key: string]: string }) => { return { basic } })
    // );

    return (
        <Box className="flex justify-between">
            <Box className="w-2/5 mr-5 overview">
                <img
                    src={subjectDetails?.basic_info?.map((basic: { [key: string]: string }) => {
                        {
                            basic?.photo;
                        }
                    })}
                    alt="Book"
                    className="m-auto"
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
