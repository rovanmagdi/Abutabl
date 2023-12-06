import React from 'react';
import PreviewStudy from '../views/PreviewStudy';
import { types } from '../types';
import Assignments from '../views/Assignments';

type PreviewProps = {
	setActive: React.Dispatch<React.SetStateAction<types>>;
	active: types;
};

function preview({ active, setActive }: PreviewProps) {
	return <div className="w-full lg:w-2/3">{active == 'progress' ? <PreviewStudy /> : <Assignments />}</div>;
}

export default preview;
