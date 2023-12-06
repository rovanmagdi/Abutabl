import { ReactComponent as VectorOne } from 'assets/images/svg/Vector1.svg';
import { ReactComponent as VectorTwo } from 'assets/images/svg/Vector2.svg';
import { ReactComponent as VectorThree } from 'assets/images/svg/Vector3.svg';
import { ReactComponent as VectorFour } from 'assets/images/svg/Vector4.svg';
import { ReactComponent as VectorFife } from 'assets/images/svg/Vector5.svg';
import { ReactComponent as GroupOne } from 'assets/images/svg/Group1.svg';
import { ReactComponent as GroupTwo } from 'assets/images/svg/Group2.svg';
import { ReactComponent as GroupThree } from 'assets/images/svg/Group3.svg';
import { VectorWrapper } from './styles';

export default function VectorImage() {
	return (
		<VectorWrapper>
			<VectorOne className="vector_one" />
			<VectorTwo className="vector_two" />
			<VectorThree className="vector_three" />
			<VectorFour className="vector_four" />
			<VectorFife className="vector_fife" />
			<GroupOne className="group_one" />
			<GroupTwo className="group_two" />
			<GroupThree className="group_three" />
		</VectorWrapper>
	);
}
