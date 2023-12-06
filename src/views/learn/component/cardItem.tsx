import { CardWrapper, Details, ImgWrapper, Title, Unit, Persentage } from '../styles';
import { Flex, Grid, Progress } from '@mantine/core';
import { theme } from 'global-styles';
export default function CardItem({
	image,
	title,
	units,
	lesson,
	progress,
}: {
	image: string;
	title: string;
	units: string;
	lesson: string;
	progress: number;
}) {
	return (
		<CardWrapper>
			<Flex justify="center" align="center" gap={'xl'} direction={'column'}>
				<ImgWrapper>
					<img src={image} alt="Book" />
				</ImgWrapper>
				<Details>
					<Flex justify="center" align="start" gap={8} direction={'column'}>
						<Title className="title">{title}</Title>
						<Unit>
							{units} units - {lesson} lessons
						</Unit>
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
