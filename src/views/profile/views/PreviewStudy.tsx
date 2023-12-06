import PreviewHeader from '../components/PreviewHeader';
import Classification from '../components/Classification';
import StudyCard from '../components/StudyCard';
import { useIntl } from 'react-intl';

function PreviewStudy() {
	const { formatMessage } = useIntl();
	return (
		<div>
			<PreviewHeader title={formatMessage({ id: 'My-Progress' })} />
			<div className="p-8 flex flex-col gap-8">
				<Classification />
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<StudyCard
						background="#FAF8F4"
						pieColors={{ background: '#F9EFDC', color: '#E9D5AC' }}
						level="10/20"
						percentage={75}
						title={formatMessage({ id: 'Assessment-Finished' })}
					/>
					<StudyCard
						background="#F0FCF8"
						pieColors={{ background: '#CAEFE7', color: '#9DD1C4' }}
						level="10/20"
						percentage={55}
						title={formatMessage({ id: 'Total-Subjects' })}
					/>
					<StudyCard
						background="#FEF0FE"
						pieColors={{ background: '#F1DDF1', color: '#E6B5E6' }}
						level="10/20"
						percentage={90}
						title={formatMessage({ id: 'Questions-Solved' })}
					/>
					<StudyCard
						background="#FBF8F0"
						pieColors={{ background: '#F9EFDC', color: '#E9D5AC' }}
						level="10/20"
						percentage={44}
						title={formatMessage({ id: 'Homework-Finished' })}
					/>
				</div>
			</div>
		</div>
	);
}

export default PreviewStudy;
