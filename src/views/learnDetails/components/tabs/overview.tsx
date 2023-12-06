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

const Overview = () => {
    const contant = [
        { image: Video, label: '65 hours on demand videos' },
        { image: Download, label: '49 downloadable resources' },
        { image: Article, label: ' 86 Article' },
        { image: Quiz, label: ' 50 Quiz' },
        { image: Game, label: ' 14 games' },
        { image: Sheet, label: '14 Work sheets' },
        { image: Certifaction, label: 'Certificate of completion' },
    ];
    return (
        <Box className="flex justify-between">
            <Box className="w-2/5 mr-5 overview">
                <img src={book} alt="Book" className="m-auto" />
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
