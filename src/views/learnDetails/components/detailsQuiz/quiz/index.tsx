import PageHeader from '../../pageHeader';
import Sound from 'assets/images/svg/sound.svg';
import SoundMute from 'assets/images/svg//soundMute.svg';
import Writting from 'assets/images/svg/Skill.svg';

import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { Box, Button, Container, Flex, Input, Text } from '@mantine/core';
import Reading from '../../../../../assets/images/svg/reading.svg';
import { useEffect, useRef, useState } from 'react';
import Progress from 'components/Progress';
import { Insight } from './insight';
import { quizDetails } from 'redux-toolkit/reducer/QuizReducer';
import CorrectAnswer from './CorrectAnswer';
import InCorrectAnswer from './InCorrectAnswer';
import LoadingPartially from 'components/loading-partially';

export default function Quiz() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { idQuiz } = useParams();
	const [isActive, setIsActive] = useState<any>();
	const [loading, setLoading] = useState<boolean>();
	const [indexQuestion, setIndexQuestion] = useState<number>(0);
	const [draggedItem, setDraggedItem] = useState(null);
	const [idItem, setIdItem] = useState(null);
	const [droppedItems, setDroppedItems] = useState<any>([]);
	const [droppedItemsLeft, setDroppedItemsLeft] = useState<any>([]);
	const [questions, setQuestions] = useState([]);
	const [questionActive, setQuestionActive] = useState<any>({});
	const [items, setItems] = useState<any[]>([]);
	const [questionMain, setQuestionMain] = useState<any>();
	const [questionAudio, setQuestionAudio] = useState<{ text: string; ext: string }>();
	//-----------------------------TF-------------------
	const [reason, setReason] = useState<string>('');

	// -------------------------------Result------------
	const [checkResult, setCheckResult] = useState<boolean>();
	const [showAnswer, setShowAnswer] = useState<string>('');
	const [checkResultTF, setCheckResultTF] = useState<string>('');
	//------------------------------------SHN-------------------
	const [answserSHN, setAnswerSHN] = useState<string>('');
	const detailsQuiz = useSelector((state: any) => state.QuizReducer);

	//------------------------------------Matching-------------------

	const [resultMatching, setResultMatching] = useState<string[]>([]);
	const [resultMatchingCorrect, setResultMatchingCorrect] = useState<string[]>([]);
	const [checkMatching, setCheckMatching] = useState<boolean>(true);

	//----------------------------------MCQ--------------------------

	const [selectedItems, setSelectedItems] = useState<any[]>([]);
	const [score, setScore] = useState(0);

	// **************************************side effect************
	useEffect(() => {
		(async () => {
			setLoading(true);
			await dispatch(quizDetails(idQuiz));
			setLoading(false);
		})();
	}, [dispatch]);
	useEffect(() => {
		if (
			Array.isArray(detailsQuiz?.gamesDetailstData?.questions) &&
			detailsQuiz?.gamesDetailstData?.questions.length > 0
		) {
			setQuestions(detailsQuiz?.gamesDetailstData?.questions);
			setQuestionActive(detailsQuiz?.gamesDetailstData?.questions[indexQuestion]);
			setQuestionMain(detailsQuiz?.gamesDetailstData?.questions[indexQuestion]?.info?.question?.lines);
			setQuestionAudio(detailsQuiz?.gamesDetailstData?.questions[indexQuestion]?.info?.question?.lines[1]);
			setItems(detailsQuiz?.gamesDetailstData?.questions[indexQuestion]?.info?.answer);
		}
	}, [detailsQuiz, indexQuestion]);

	useEffect(() => {
		console.log(mergeArrays(droppedItems));
	}, [droppedItems]);

	// ********************************************Functions********************

	const handleNext = () => {


		if (indexQuestion == detailsQuiz?.gamesDetailstData?.questions?.length - 1) {
			// setSearchParam(`score=${score.toString()}`)
			navigate(`result/${score}`);
		} else {
			setIndexQuestion(indexQuestion + 1);
			setCheckResult(false);
			setShowAnswer('');
		}
	};
	//***************************** */ Matching
	const handleDragStart = (index: any, e: any) => {
		console.log(index);

		setDraggedItem(index);
		e.dataTransfer.setData('text/plain', index);
	};

	const handleDragOver = (e: any, index: any) => {
		e.preventDefault();
		setIdItem(index);
	};

	const mergeArrays = (arrays: any) => {
		const maxLength = Math.max(...arrays.map((arr: any) => arr.length));

		const combinedArray = Array.from({ length: maxLength }, (_, index) => {
			return arrays.map((arr: any) => arr[index]).find((item: any) => item !== undefined);
		});

		return combinedArray;
	};

	function mergeArraysLeft(arrays: any) {
		const mergedArray = arrays[0]?.map((item: any, index: any) => {
			for (let i = 1; i < arrays.length; i++) {
				if (arrays[i][index] == '') {
					return arrays[i][index];
				}
			}
			return item;
		});

		return mergedArray;
	}

	const handleDrop = (index: number, item: string) => {
		if (draggedItem === null) return;
		const newVlue = `${Number(draggedItem) + 1}|${index + 1}`;
		setResultMatching((index: any) => [...index, newVlue]);
		const draggedItemContent = items[draggedItem];
		const lengthQuestions: number = questionActive?.info?.answer?.length - 1;
		const arr: any = new Array(lengthQuestions);
		arr.splice(idItem, 0, draggedItemContent);
		setDroppedItems((index: any) => [...index, arr]);
		const arr2: any = [...items];
		arr2[draggedItem] = '';
		setDroppedItemsLeft((index: any) => [...index, arr2]);
		setDraggedItem(null);
	};
	// **********************************MCQ*************************

	const handleCheckboxChange = (event: any) => {
		const { value, checked } = event.target;

		if (checked) {
			setSelectedItems((prevItems: any) => [...prevItems, value]);
		} else {
			setSelectedItems((prevItems) => prevItems.filter((item) => item !== value));
		}
	};

	// ***********************************Next***********************
	const handleCheck = () => {
		// --------------------------TF------------------------------
		if (questionActive?.info?.type == 'TF') {
			if (
				questionActive?.info?.corAnswer == isActive
				// &&
				// reason.length > 0 &&
				// questionActive?.info?.reason_is_required == '1'
			) {
				setCheckResultTF('');
				setShowAnswer('correct');
				setCheckResult(true);
				setScore((prev: number) => prev + Number(questionActive?.score));
			} else {
				setShowAnswer('incorrect');
				setScore((prev: number) => prev);

				if (questionActive?.info?.corAnswer == true) {
					setCheckResultTF('T');
				} else {
					setCheckResultTF('F');
				}
				// questionActive?.info?.corAnswer == false && setCheckResultF('T')
			}
		}

		// --------------------------SHN------------------------------

		if (questionActive?.info?.type == 'SHN') {
			if (answserSHN.length > 0) {
				setCheckResult(true);
				setShowAnswer('correct');
				setScore((prev: number) => prev + Number(questionActive?.score));
			} else {
				setCheckResult(false);
				setShowAnswer('incorrect');
				setScore((prev: number) => prev);
			}
		}
		// --------------------------Matching------------------------------
		if (questionActive?.info?.type == 'Matching') {
			const isEqual =
				resultMatching.length === questionActive?.info?.corAnswer.length &&
				resultMatching.every((value: string, index: number) => value === questionActive?.info?.corAnswer[index]);

			if (isEqual) {
				setCheckResult(true);
				setShowAnswer('correct');
				setScore((prev: number) => prev + Number(questionActive?.score));

				setCheckMatching(true);
			} else {
				setCheckMatching(false);
				setCheckResult(false);
				setShowAnswer('incorrect');
				setScore((prev: number) => prev);
				if (resultMatching.length > 0) {
					setResultMatchingCorrect(resultMatching);
				} else {
					setResultMatchingCorrect(questionActive?.info?.corAnswerCol1);
				}
			}
		}
		//---------------------------MCQ---------------------------------
		if (questionActive?.info?.type == 'MCQ') {


			const b = selectedItems?.map(function (item: any) {
				return parseInt(item, 10);
			});

			if (JSON.stringify(b) == JSON.stringify(questionActive?.info?.corAnswer)) {
				console.log(selectedItems);
				setCheckResult(true);
				setShowAnswer('correct');
				setScore((prev: number) => prev + Number(questionActive?.score));
			} else {
				console.log(selectedItems);
				setCheckResult(false);
				setShowAnswer('incorrect');
				setScore((prev: number) => prev);
			}
		}
	};
	const b = selectedItems?.map(function (item: any) {
		return parseInt(item, 10);
	});

	console.log(JSON.stringify(b) == JSON.stringify(questionActive?.info?.corAnswer), b, questionActive?.info?.corAnswer, "isEqual");




	const audioRef = useRef<any>(null);
	const [isPlaying, setIsPlaying] = useState<Boolean>(false);
	const togglePlay = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	console.log(questionActive?.info?.answers_type, "questionActive?.info?.answers_type ");

	return (
		<>
			<PageHeader title="" route="/learn" />

			{loading ? (
				<Flex className="bg-white  h-auto p-3">
					<LoadingPartially />
				</Flex>
			) : (
				<>
					<Flex className="bg-PaoloVeroneseGreen  w-100 h-[800px] p-3">
						<Box className="bg-white flex flex-col p-11  rounded-[15px] border-[1px]  border-Platinum m-2  h-[auto]  w-3/4">
							{/*********************************** Progress ***********************************/}
							<Progress number={indexQuestion} length={detailsQuiz?.gamesDetailstData?.questions?.length} />
							{/*********************************** Questions ***********************************/}
							<Box className=" mt-5">
								{questionActive?.info?.type == 'Matching' || 'MCQ' ? <img src={Reading} /> : <img src={Writting} />}

								<Text className="font-semibold text-CharlestonGreen mt-2">
									{questionMain?.map((a: any) => {
										return (
											<>

												{a.type == 'file' && a.ext == 'image' && <img src={a.text} className="w-[100px] h-[100px]" />}

												{a.type == 'text' && <>{a?.text}</>}

												{a.type == 'file' && a.ext == 'audio' && (
													<>
														{' '}
														<audio ref={audioRef} src={a.text} />
														<img onClick={togglePlay} src={isPlaying ? Sound : SoundMute} />
													</>
												)}

												{a.type == 'file' && a.ext == 'pdf' && (
													<>
														<iframe src={a.text} className='h-[200px] w-[500px]' />
													</>
												)}
											</>
										);
									})}
								</Text>
								<Container className="m-5 mx-auto">
									{/* <Box className="flex gap-2">
										<Text className="text-gray text-sm ">Your Answer ( {questionActive?.score} points )</Text>
										{ }
										{questionAudio?.ext == 'image' ? (
											<img src={questionAudio?.text} className="w-[200px]" />
										) : questionAudio?.ext == 'audio' ? (
											<img
												src={Sound}
												className="cursor-pointer"
												onClick={() => {
													// console.log(questionAudio);

													new Audio(questionAudio?.text).play();
												}}
											/>
										) : (
											<></>
										)}
									</Box> */}
									{/***********************************************TF*********************************/}

									{questionActive?.info?.type == 'TF' ? (
										<>
											<Flex className="align-center justify-around mt-14 mb-14 w-100 gap-2">
												<Text
													className={`border border-Platinum rounded-[18px] p-5 shadow-custom-sm  cursor-pointer inline w-3/4 
                                        ${isActive == true && 'bg-blue shadow-custom-sm-blue'}
                                         ${checkResult == true &&
														isActive == true &&
														'bg-Lotion shadow-custom-sm-green'
														}
                                        ${checkResultTF.length != 0 &&
														`${checkResultTF == 'F'
															? 'bg-error shadow-custom-sm-red'
															: 'bg-Lotion shadow-custom-sm-green'
														}`
														}
                                               
                                        `}
													onClick={() => {
														setIsActive(true);
													}}
												>
													True
												</Text>
												<Text
													className={`border border-Platinum rounded-[18px] p-5 shadow-custom-sm  cursor-pointer inline w-3/4
                                         ${isActive == false && 'bg-blue shadow-custom-sm-blue'}
                                            
                                            ${checkResult == true &&
														isActive == false &&
														'bg-Lotion shadow-custom-sm-green'
														}
                                            ${checkResultTF.length != 0 &&
														`${checkResultTF == 'F'
															? 'bg-Lotion shadow-custom-sm-green'
															: 'bg-error shadow-custom-sm-red'
														}`
														}
                                        `}
													onClick={() => {
														setIsActive(false);
													}}
												>
													False
													{/* {checkResult == true ?checkResultTF == 'F' ? <>green</> : <>red</>} */}
												</Text>
											</Flex>
											<Text>
												{' '}
												Reason{' '}
												<span className={`${questionActive?.info?.reason_is_required == 1 && 'text-red-500'}`}>
													(requried)
												</span>
											</Text>
											<Box
												className={`${(showAnswer == 'correct' || showAnswer == 'incorrect') &&
													reason.length == 0 &&
													questionActive?.info?.reason_is_required == '1'
													? ' bg-error shadow-custom-sm-red '
													: 'bg-white'
													}border border-Platinum rounded-[18px] p-5 shadow-custom-sm  mt-1`}
											>
												<input
													className={`${(showAnswer == 'correct' || showAnswer == 'incorrect') &&
														reason.length == 0 &&
														questionActive?.info?.reason_is_required == '1'
														? ' bg-error '
														: 'bg-white'
														} outline-none`}
													name="reason"
													onChange={(e) => {
														setReason(e.target.value);
													}}
													placeholder={'Enter your answer'}
												/>
											</Box>
										</>
									) : (
										<>
											{/***********************************************SHN*********************************/}

											{questionActive?.info?.type == 'SHN' ? (
												<>
													<Box className="border border-Platinum rounded-[18px] p-5 shadow-custom-sm  mt-5 ">
														<Input
															className="outline-none"
															name="code"
															onChange={(e) => {
																setAnswerSHN(e.target.value);
															}}
															placeholder={'Enter your answer'}
														/>
													</Box>
												</>
											) : (
												<>
													{/***********************************************Matching*********************************/}

													{questionActive?.info?.type == 'Matching' ? (
														<>
															<Flex className="flex justify-between">
																<Box className="gap-3">
																	{mergeArraysLeft([...droppedItemsLeft]) == undefined ? (
																		<>
																			{items?.map((item: any, index: number) => (
																				<>
																					{questionActive?.info?.answers_type == 'text' && (
																						<Box
																							className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm hover:bg-Lotion cursor-pointer h-[100px] w-[100px]"
																							key={index}
																							draggable
																							onDragStart={(e: any) => handleDragStart(index, e)}
																						>
																							{item}
																						</Box>
																					)}
																					{questionActive?.info?.answers_type == 'image' && (
																						<Box
																							className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm hover:bg-Lotion cursor-pointer h-[100px] w-[100px]"
																							key={index}
																							draggable
																							onDragStart={(e: any) => handleDragStart(index, e)}
																						>
																							<img src={item} className="h-[100px] w-[100px]" />
																						</Box>
																					)}
																				</>
																			))}
																		</>
																	) : (
																		<>
																			{mergeArraysLeft([...droppedItemsLeft])?.map((item: any, index: number) => (
																				<>
																					{questionActive?.info?.answers_type == 'text' && (
																						<Box
																							className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm hover:bg-Lotion cursor-pointer h-[100px] w-[100px]"
																							key={index}
																							draggable
																							onDragStart={(e: any) => handleDragStart(index, e)}
																						>
																							{item}
																						</Box>
																					)}
																					{questionActive?.info?.answers_type == 'image' && (
																						<Box
																							className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm hover:bg-Lotion cursor-pointer h-[100px] w-[100px]"
																							key={index}
																							draggable
																							onDragStart={(e: any) => handleDragStart(index, e)}
																						>
																							<img src={item} className="h-[100px] w-[100px]" />
																						</Box>
																					)}
																				</>
																			))}
																		</>
																	)}
																</Box>
																{resultMatchingCorrect?.length > 0 && (
																	<Box className="flex-col justify-between">
																		{resultMatchingCorrect?.map((item: any, index: number) => (
																			<>
																				{questionActive?.info?.answers_type == 'text' && (
																					<Box
																						className="border border-Platinum rounded-[30px] p-5 m-5  hover:bg-Lotion cursor-pointer h-[100px] w-[100px] bg-Lotion shadow-custom-sm-green"
																						key={index}
																						draggable
																						onDragStart={(e: any) => handleDragStart(index, e)}
																					>
																						{item}
																					</Box>
																				)}
																				{questionActive?.info?.answers_type == 'image' && (
																					<Box
																						className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm hover:bg-Lotion cursor-pointer h-[100px] w-[100px]"
																						key={index}
																						draggable
																						onDragStart={(e: any) => handleDragStart(index, e)}
																					>
																						<img src={item} className="h-[100px] w-[100px]" />
																					</Box>
																				)}
																			</>
																		))}
																	</Box>
																)}

																<Flex className="justify-around gap-8">
																	<Flex className="gap-3">
																		<Box className="gap-3">
																			{mergeArrays(droppedItems).length == 0 &&
																				questionActive?.info?.answer.map((item: any, index: number) => (
																					<Box
																						onDragOver={(e: any) => handleDragOver(e, index)}
																						onDrop={() => handleDrop(index, item)}
																						className="border-dashed border-2 border-Platinum rounded-[30px] p-5 m-5  cursor-pointer h-[100px] w-[100px] text-xs text-gray"
																						key={index}
																					>
																						Drag your answer here
																					</Box>
																				))}
																		</Box>
																		<Box>
																			<Box>
																				{checkMatching == true ? (
																					<>
																						{mergeArrays(droppedItems).map((item: any, index: any) => (
																							<>
																								{' '}
																								{item == undefined ? (
																									<Box
																										onDrop={() => handleDrop(index, item)}
																										onDragOver={(e: any) => handleDragOver(e, index)}
																										className={`border-dashed border-2 border-Platinum rounded-[30px] p-5 m-5  cursor-pointer h-[100px] w-[100px] text-xs text-gray `}
																										key={index}
																									>
																										Drag your answer here
																									</Box>
																								) : (
																									<Box
																										onDrop={() => handleDrop(index, item)}
																										className={`border-2 border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm  cursor-pointer h-[100px] w-[100px] text-xs text-gray ${showAnswer == 'correct' && 'bg-Lotion shadow-custom-sm-green'
																											} 
																										`}
																										key={index}
																									>
																										{item}
																									</Box>
																								)}
																							</>
																						))}
																					</>
																				) : (
																					<>
																						{droppedItems.map((item: any, index: any) => (
																							<>
																								{' '}
																								{item == undefined ? (
																									<Box
																										onDrop={() => handleDrop(index, item)}
																										onDragOver={(e: any) => handleDragOver(e, index)}
																										className="border-dashed border-2 border-Platinum rounded-[30px] p-5 m-5  cursor-pointer h-[100px] w-[100px] text-xs text-gray"
																										key={index}
																									>
																										Drag your answer here
																									</Box>
																								) : (
																									<Box
																										onDrop={() => handleDrop(index, item)}
																										className={`border-2 border-Danger  rounded-[30px] p-5 m-5  cursor-pointer h-[100px] w-[100px] text-xs text-gray bg-error shadow-custom-sm-red
																										`}
																										key={index}
																									>
																										{console.log(item)}
																										{item}
																									</Box>
																								)}
																							</>
																						))}
																					</>
																				)}
																			</Box>
																		</Box>
																	</Flex>

																	<Box>
																		{questionActive?.info?.answer2?.map((item: any, index: number) => (
																			<>
																				{questionActive?.info?.answers_type2
																					== 'text' && (
																						<Box
																							className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm  cursor-pointer h-[100px] w-[100px]"
																							key={index}
																							draggable
																							onDragStart={(e: any) => handleDragStart(index, e)}
																						>
																							{item}
																						</Box>
																					)}
																				{questionActive?.info?.answers_type2
																					== 'image' && (
																						<Box
																							className="border border-Platinum rounded-[30px] p-5 m-5 shadow-custom-sm  cursor-pointer h-[100px] w-[100px]"
																							key={index}
																							draggable
																							onDragStart={(e: any) => handleDragStart(index, e)}
																						>
																							<img src={item} className="h-[50px] w-[100px]" />
																						</Box>
																					)}
																			</>
																		))}
																	</Box>
																</Flex>
															</Flex>
														</>
													) : (
														<>
															{questionActive?.info?.type == 'MCQ' && (
																<Flex>
																	{items?.map((item: any, index: number) => (
																		<>
																			{questionActive?.info?.answers_type == 'text' && (
																				<>
																					<input
																						type="checkbox"
																						value={index + 1}
																						name="vehicle1"
																						onChange={handleCheckboxChange}
																					/>

																					<Box
																						className={`border border-Platinum rounded-[30px] p-5 m-5 cursor-pointer${showAnswer.length == 0 && 'shadow-custom-sm'
																							}  h-[100px] w-[100px]
																					${questionActive?.info?.corAnswer?.map((a: any) => {
																								return (
																									a == index + 1 &&
																									(showAnswer == 'correct' || showAnswer == 'incorrect') &&
																									' bg-Lotion  shadow-custom-sm-green '
																								);
																							})}
																					
																							${showAnswer == 'incorrect' &&
																							questionActive?.info?.corAnswer.includes(index + 1) &&
																							' bg-error  shadow-custom-sm-red '
																							}


																					
																						`}
																						key={index}
																					>
																						{item}
																					</Box>
																				</>
																			)}
																			{questionActive?.info?.answers_type == 'image' && (
																				<>
																					<input
																						type="checkbox"
																						value={index + 1}
																						name="vehicle1"
																						onChange={handleCheckboxChange}
																					/>
																					<Box
																						className={`border border-Platinum rounded-[30px] p-5 m-5 cursor-pointer${showAnswer.length == 0 && 'shadow-custom-sm'
																							}  h-[100px] w-[100px]
																					${questionActive?.info?.corAnswer?.map((a: any) => {
																								return (
																									a == index + 1 &&
																									(showAnswer == 'correct' || showAnswer == 'incorrect') &&
																									' bg-Lotion  shadow-custom-sm-green '
																								);
																							})}
																					
																							${showAnswer == 'incorrect' &&
																							questionActive?.info?.corAnswer.includes(index + 1) &&
																							' bg-error  shadow-custom-sm-red '
																							}


																					
																						`}
																						key={index}
																					>
																						<img src={item} className="h-[60px] w-[100px]" />
																					</Box>
																				</>
																			)}

																			{questionActive?.info?.answers_type == 'audio' && (
																				<>
																					<input
																						type="checkbox"
																						value={index + 1}
																						name="vehicle1"
																						onChange={handleCheckboxChange}
																					/>
																					<Box
																						className={`border border-Platinum rounded-[30px] p-5 m-5 cursor-pointer${showAnswer.length == 0 && 'shadow-custom-sm'
																							}  h-[100px] w-[100px]
																					${questionActive?.info?.corAnswer?.map((a: any) => {
																								return (
																									a == index + 1 &&
																									(showAnswer == 'correct' || showAnswer == 'incorrect') &&
																									' bg-Lotion  shadow-custom-sm-green '
																								);
																							})}
																					
																							${showAnswer == 'incorrect' &&
																							questionActive?.info?.corAnswer.includes(index + 1) &&
																							' bg-error  shadow-custom-sm-red '
																							}


																					
																						`}
																						key={index}
																					>
																						{/* <img src={item} className="h-[60px] w-[100px]" /> */}

																						<img
																							src={Sound}
																							className="cursor-pointer"
																							onClick={() => {
																								// console.log(questionAudio);

																								new Audio(item).play();
																							}}
																						/>
																					</Box>
																				</>
																			)}
																		</>
																	))}
																</Flex>
															)}
														</>
													)}
												</>
											)}
										</>
									)}
								</Container>
							</Box>
							{/*********************************** Check button ***********************************/}
							{showAnswer.length == 0 && (
								<Box className="border-t-[1px] border-Platinum flex pt-8 mt-auto">
									<Button
										type="submit"
										className="text-EerieBlack bg-Sunglow  rounded-[15px] shadow-custom-sm-warning w-[100px]  m-auto hover:bg-Warning mb-5"
										onClick={() => {
											handleCheck();
										}}
									>
										Check
									</Button>{' '}
								</Box>
							)}

							{showAnswer.length !== 0 && (
								<>
									{showAnswer == 'correct' ? (
										<CorrectAnswer handleNext={handleNext} handleEmpty={() => { setSelectedItems([]); setIsActive(null) }} />
									) : (
										<InCorrectAnswer handleNext={handleNext} handleEmpty={() => {
											setSelectedItems([]);
											setIsActive(null);
										}} />
									)}
								</>
							)}
						</Box>{' '}
						<Insight indexQuestion={indexQuestion} questions={questions || []} score={score} />
					</Flex>
				</>
			)}

			{/*********************************** Insights ***********************************/}
		</>
	);
}
