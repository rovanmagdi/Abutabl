import { CardWrapper, Details, ImgWrapper, Title, Unit, Persentage } from '../styles';
import { Flex, Grid, Progress } from '@mantine/core';
import { theme } from 'global-styles';
import { ISubject } from '../type/subject.type';
const CardItem: React.FC<ISubject> = ({
	image,
	title,
	units,
	lesson,
	progress,
}) => {
	return (
		<CardWrapper className='cursor-pointer'>
			<Flex justify="center" align="center" gap={'xl'} direction={'column'}>
				<ImgWrapper>
					<img src={image} alt="Book" />
				</ImgWrapper>
				<Details>
					<Flex justify="center" align="start" gap={8} direction={'column'}>

						<Title className="title">{title}</Title>
						{units && <Unit>
							{units} units - {lesson} lessons
						</Unit>}

						<Grid align="center" style={{ width: '100%' }}>
							<Grid.Col span={10}>
								<Progress color={theme.colours.Warning} h={4} value={progress} />
							</Grid.Col>
							<Grid.Col span={2}>
								<Persentage>{progress}%</Persentage>
							</Grid.Col>
						</Grid>
					</Flex>
				</Details>
			</Flex>
		</CardWrapper>
	);
}

export default CardItem