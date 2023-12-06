import { useEffect } from 'react';
import { Button, Checkbox, Flex } from '@mantine/core';
import { useIntl } from 'react-intl';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { FORM_REGEX_VALIDATORS } from 'app-constants/form-validations';
import Input from 'components/input';
import InputPassword from 'components/inputPassword';
import { LoginWrapper } from '../styles';
import { useRecoilState } from 'recoil';
import langIcon from 'assets/images/svg/translate-green.svg';
import { ReactComponent as LogoImage } from 'assets/images/svg/logo-aboutabl-dark 2.svg';
import Cookies from 'js-cookie';
import { COOKIES_KEYS } from 'app-constants/constants';
import { langState } from 'store';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux-toolkit/reducer/LoginReducer';
import { Ilogin } from '../types/login.type';

function Login() {
	const { formatMessage } = useIntl();
	const navigate = useNavigate();
	const methods = useForm<Ilogin>();
	const { handleSubmit } = methods;
	const dispatch = useDispatch();
	const onSubmit = async (data: Ilogin) => {
		let a = await dispatch(loginUser(data));
		if (localStorage.getItem('api_token')) {
			navigate('/learn');
		}
	};

	const getLangSelected = Cookies.get(COOKIES_KEYS.LanguageAdded);
	const [lang, setLang] = useRecoilState(langState);

	const switchLang = () => {
		if (lang === 'ar') {
			setLang('en');
			Cookies.set(COOKIES_KEYS.LanguageAdded, 'en');
		}
		if (lang === 'en') {
			setLang('ar');
			Cookies.set(COOKIES_KEYS.LanguageAdded, 'ar');
		}
	};

	useEffect(() => {
		if (!getLangSelected) return;
		setLang(getLangSelected as 'ar' | 'en');
	}, [getLangSelected, setLang]);

	return (
		<>
			<div className="flex flex-col md:flex-row gap-3 justify-between items-center w-full">
				<LogoImage />
				<button
					onClick={switchLang}
					className="flex justify-center items-center gap-2 text-sm text-LightSeaGreen font-medium"
				>
					<img src={langIcon} alt="translate" />
					{formatMessage({ id: 'Switch-to' })}
				</button>
			</div>
			<LoginWrapper>
				<div className={`w-full`}>
					<FormProvider {...methods}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Flex direction={'column'} gap={8} className="wellcome_wrapper">
								<h1>{formatMessage({ id: 'Welcome-back' })}</h1>
								<h3>{formatMessage({ id: 'Login-and-learn' })}</h3>
							</Flex>
							<Input
								name="code"
								label={formatMessage({ id: 'StudentCode' })}
								placeholder={formatMessage({ id: 'StudentCode' })}
								registerOptions={{
									required: {
										value: true,
										message: 'requiredField',
									},
									pattern: {
										value: FORM_REGEX_VALIDATORS.numbersOnly,
										message: formatMessage({ id: 'numberOnly' }),
									},
								}}
							/>
							<InputPassword
								name="password"
								label={formatMessage({ id: 'Password' })}
								placeholder={formatMessage({ id: 'Password' })}
								registerOptions={{
									required: {
										value: true,
										message: 'requiredField',
									},
								}}
							/>

							<div className="text-sm flex justify-between items-center">
								<Checkbox label={formatMessage({ id: 'Remember-me' })} />
								<Link to="verifyEmail" className="text-LightSeaGreen font-medium">
									{formatMessage({ id: 'Forget-password' })}
								</Link>
							</div>
							<Button
								type="submit"
								className="bg-LightSeaGreen hover:bg-LightSeaGreen rounded-2xl shadow-custom-sm-green"
								px={32}
								py={16}
								size="xl"
							>
								<span className="text-Lotion font-medium">{formatMessage({ id: 'Login' })}</span>
							</Button>
						</form>
					</FormProvider>
				</div>
			</LoginWrapper>
		</>
	);
}

export default Login;
