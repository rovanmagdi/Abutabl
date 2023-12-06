import { Button, Divider, Flex } from '@mantine/core';
import Modal from 'components/modal';
import React from 'react';
import { useIntl } from 'react-intl';
import { FormProvider, useForm } from 'react-hook-form';
import { EditContainer } from '../styles';
type LogoutProps = {
	logoutModalOpened: boolean;
	setLogoutModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function Logout({ logoutModalOpened, setLogoutModalOpened }: LogoutProps) {
	const { formatMessage } = useIntl();

	const methods = useForm();
	const { handleSubmit } = methods;
	const onSubmit = (data: any) => {
		console.log(data);
		setLogoutModalOpened(false)
	};

	return (
		<Modal
			radius="8px"
			opened={logoutModalOpened}
			onClose={() => setLogoutModalOpened(false)}
			title={formatMessage({ id: 'Logout' })}
			size="xl"
			padding={32}
		>
			<EditContainer>
				<FormProvider {...methods}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<p>{formatMessage({ id: 'Logout-desc' })}</p>
						<Divider mt={32} size="xs" />
						<Flex
							className="action_container"
							direction={{ base: 'column', sm: 'row' }}
							gap={22}
							justify={'space-between'}
							align={'center'}
						>
							<Button type="submit">{formatMessage({ id: 'Logout' })}</Button>
							<Button onClick={() => setLogoutModalOpened(false)}>{formatMessage({ id: 'Discard' })}</Button>
						</Flex>
					</form>
				</FormProvider>
			</EditContainer>
		</Modal>
	);
}

export default Logout;
