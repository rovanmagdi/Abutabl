import ModuleView from 'components/module-view';
import { Grid } from '@mantine/core';
import iol from 'assets/images/png/iol.png';
import { useRecoilValue } from 'recoil';
import { langState } from 'store';
import Header from 'layout/header';
import { CardsWrapper } from 'views/learn/styles';
import PageHeader from './components/pageHeader';

import TabsComponent from './components/tabs/tabs';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SubjectDetails } from 'redux-toolkit/reducer/DetailsSubjectsReducer';
import { useParams } from 'react-router-dom';


export default function LearnDetails() {
    /* ------------------------------- Local State ------------------------------ */
    const langType = useRecoilValue(langState);
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(SubjectDetails(id))
    }, [])

    return (
        <>
            <PageHeader />
            <TabsComponent />

        </>
    );
}
