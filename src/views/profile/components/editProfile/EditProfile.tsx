import Modal from 'components/modal';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { Button, Divider, Flex, Grid, FileInput } from '@mantine/core';
import DatePickerInput from 'components/date-picker';
import Input from 'components/input';
import Select from 'components/select';
import { FORM_REGEX_VALIDATORS } from 'app-constants/form-validations';
import avatar from 'assets/images/png/avatar.png';
import { useState } from 'react';
import { ReactComponent as CameraIcon } from 'assets/images/svg/camera.svg';
import { ReactComponent as ProfileIcon } from 'assets/images/svg/profileIcon.svg';
import { ReactComponent as EmailIcon } from 'assets/images/svg/sms.svg';
import { ReactComponent as MobileIcon } from 'assets/images/svg/mobile.svg';
import { ReactComponent as BirthDayIcon } from 'assets/images/svg/cake.svg';
import { ReactComponent as GenderIcon } from 'assets/images/svg/user-octagon.svg';
import { ReactComponent as SchoolIcon } from 'assets/images/svg/courthouse.svg';
import { ReactComponent as GradeIcon } from 'assets/images/svg/teacher.svg';
import { ReactComponent as GovernorateIcon } from 'assets/images/svg/map.svg';
import { ReactComponent as CityIcon } from 'assets/images/svg/building.svg';
import { ReactComponent as AddressIcon } from 'assets/images/svg/location.svg';
import { EditContainer } from './../styles';

type EditProfileProps = {
	opened: boolean;
	close: () => void;
};

function EditProfile({ opened, close }: EditProfileProps) {
	const { formatMessage } = useIntl();
	const [uploadedLogoImage, setUploadedLogoImage] = useState<string | null>(null); // State to hold the uploaded logo image
	const handleImageLogoUpload = (e: File | null) => {
		if (e) {
			setUploadedLogoImage(URL.createObjectURL(e));
		}
	};
	const methods = useForm({
		defaultValues: {
			logo: null,
			user_name: 'Ahmed Mealy',
			Email: 'ahmed.mealy@gmail.com',
			MobileNumber: '01123456789',
			Gender: 'Male',
			School: 'Deyaa eldieen school',
			Governorate: 'Ahmed Mealy',
			Grade: 'KG1',
			City: 'ahmed.mealy@gmail.com',
			Addres: 'Male',
		},
	});
	const { handleSubmit, control } = methods;

	const onSubmit = (data: any) => {
		console.log(data);
		close();
	};

	return (
		<div>
			<Modal radius="8px" opened={opened} onClose={close} title="Edit profile" size="xl" padding={32}>
				<EditContainer>
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Flex direction={'column'} className="change_image" align={'center'} justify={'center'} gap={16} mb={24}>
								<div className="upload_container">
									{uploadedLogoImage ? (
										<img className="uploadded_image" src={uploadedLogoImage} alt="UploadedLogo" />
									) : (
										<img src={avatar} alt="avatar" className="w-[120]" />
									)}
								</div>
								<div className="file_input_container">
									<Controller
										control={control}
										name="logo"
										render={({ field: { value } }) => (
											<FileInput
												label={
													<Flex gap={8} align={'center'}>
														<CameraIcon /> <p>{formatMessage({ id: 'ChangePicture' })}</p>
													</Flex>
												}
												accept="image/png,image/jpeg"
												onChange={(e) => handleImageLogoUpload(e)}
												value={value}
											/>
										)}
									/>
								</div>
							</Flex>
							<Grid gutter={32}>
								<Grid.Col m={0} py={0} xs={12}>
									<h4>1. {formatMessage({ id: 'PersonalInfo' })}</h4>
								</Grid.Col>
								<Grid.Col xs={12} md={6}>
									<Input
										icon={<ProfileIcon />}
										name="user_name"
										label={formatMessage({ id: 'StudentName' })}
										placeholder={formatMessage({ id: 'StudentName' })}
										registerOptions={{
											required: {
												value: true,
												message: 'requiredField',
											},
											pattern: {
												value: FORM_REGEX_VALIDATORS.textOnly,
												message: formatMessage({ id: 'textOnly' }),
											},
										}}
									/>
								</Grid.Col>
								<Grid.Col xs={12} md={6}>
									<Input
										icon={<EmailIcon />}
										name="Email"
										label={formatMessage({ id: 'Email' })}
										placeholder={formatMessage({ id: 'Email' })}
										registerOptions={{
											required: {
												value: true,
												message: 'requiredField',
											},
											pattern: {
												value: FORM_REGEX_VALIDATORS.email,
												message: formatMessage({ id: 'emailOnly' }),
											},
										}}
									/>
								</Grid.Col>
								<Grid.Col xs={12} md={6}>
									<Input
										icon={<MobileIcon />}
										name="MobileNumber"
										label={formatMessage({ id: 'MobileNumber' })}
										placeholder={formatMessage({ id: 'MobileNumber' })}
										registerOptions={{
											required: {
												value: true,
												message: 'requiredField',
											},
										}}
									/>
								</Grid.Col>
								<Grid.Col xs={12} md={6}>
									<DatePickerInput icon={<BirthDayIcon />} name="Birthday" label={formatMessage({ id: 'Birthday' })} />
								</Grid.Col>{' '}
								<Grid.Col xs={12} md={6}>
									<Controller
										control={control}
										name="Gender"
										render={({ field: { onChange, value } }) => (
											<Select
												icon={<GenderIcon />}
												name="Gender"
												label={formatMessage({ id: 'Gender' })}
												placeholder={formatMessage({ id: 'Gender' })}
												data={[
													{ value: 'male', label: 'Male' },
													{ value: 'female', label: 'Female' },
												]}
												onChange={onChange}
												value={value as string}
											/>
										)}
									/>
								</Grid.Col>
							</Grid>
							<Grid gutter={32}>
								<Grid.Col m={0} pt={24} xs={12}>
									<h4>2. {formatMessage({ id: 'Education' })}</h4>
								</Grid.Col>
								<Grid.Col xs={12} md={6}>
									<Input
										disabled
										icon={<SchoolIcon />}
										name="School"
										label={formatMessage({ id: 'School' })}
										placeholder={formatMessage({ id: 'School' })}
										registerOptions={{
											required: {
												value: true,
												message: 'requiredField',
											},
											pattern: {
												value: FORM_REGEX_VALIDATORS.textOnly,
												message: formatMessage({ id: 'textOnly' }),
											},
										}}
									/>
								</Grid.Col>
								<Grid.Col xs={12} md={6}>
									<Controller
										control={control}
										name="Grade"
										render={({ field: { onChange, value } }) => (
											<Select
												disabled
												icon={<GradeIcon />}
												name="Grade"
												label={formatMessage({ id: 'Grade' })}
												placeholder={formatMessage({ id: 'Grade' })}
												data={[
													{ value: 'KG1', label: 'KG1' },
													{ value: 'KG2', label: 'KG2' },
												]}
												onChange={onChange}
												value={value as string}
											/>
										)}
									/>
								</Grid.Col>
							</Grid>
							<Grid gutter={32}>
								<Grid.Col m={0} pt={24} xs={12}>
									<h4>3. {formatMessage({ id: 'Address' })}</h4>
								</Grid.Col>
								<Grid.Col xs={12} md={6}>
									<Input
										icon={<GovernorateIcon />}
										name="Governorate"
										label={formatMessage({ id: 'Governorate' })}
										placeholder={formatMessage({ id: 'Governorate' })}
										registerOptions={{
											required: {
												value: true,
												message: 'requiredField',
											},
											pattern: {
												value: FORM_REGEX_VALIDATORS.textOnly,
												message: formatMessage({ id: 'textOnly' }),
											},
										}}
									/>
								</Grid.Col>
								<Grid.Col xs={12} md={6}>
									<Input
										icon={<CityIcon />}
										name="City"
										label={formatMessage({ id: 'City' })}
										placeholder={formatMessage({ id: 'City' })}
										registerOptions={{
											required: {
												value: true,
												message: 'requiredField',
											},
											pattern: {
												value: FORM_REGEX_VALIDATORS.textOnly,
												message: formatMessage({ id: 'textOnly' }),
											},
										}}
									/>
								</Grid.Col>
								<Grid.Col xs={12} md={6}>
									<Input
										icon={<AddressIcon />}
										name="Address"
										label={formatMessage({ id: 'Address' })}
										placeholder={formatMessage({ id: 'Address' })}
										registerOptions={{
											required: {
												value: true,
												message: 'requiredField',
											},
											pattern: {
												value: FORM_REGEX_VALIDATORS.textOnly,
												message: formatMessage({ id: 'textOnly' }),
											},
										}}
									/>
								</Grid.Col>
							</Grid>
							<Divider mt={32} size="xs" />
							<Flex
								className="action_container"
								direction={{ base: 'column', sm: 'row' }}
								gap={22}
								justify={'space-between'}
								align={'center'}
							>
								<Button type="submit">{formatMessage({ id: 'SaveChanges' })}</Button>
								<Button onClick={close}>{formatMessage({ id: 'Discard' })}</Button>
							</Flex>
						</form>
					</FormProvider>
				</EditContainer>
			</Modal>
		</div>
	);
}

export default EditProfile;
