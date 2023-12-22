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
import { useDispatch, useSelector } from 'react-redux';
import { SubjectDetails } from 'redux-toolkit/reducer/DetailsSubjectsReducer';
import { useParams } from 'react-router-dom';


export default function LearnDetails() {
    /* ------------------------------- Local State ------------------------------ */
    const langType = useRecoilValue(langState);
    const dispatch = useDispatch()
    const { id } = useParams()
    const subjectDetails = useSelector((state: any) => state.DetailsSubjectsReducer);


    useEffect(() => {
        dispatch(SubjectDetails(id))
    }, [dispatch])

    console.log(subjectDetails);


    return (
        <>
            <PageHeader title={subjectDetails?.subjectDetailsData?.basic_info?.name} route='/learn' />
            <TabsComponent />

        </>
    );
}
