import ModuleView from 'components/module-view';
import { Grid } from '@mantine/core';
import iol from 'assets/images/png/iol.png';
import { useRecoilValue } from 'recoil';
import { langState } from 'store';
import Header from 'layout/header';
import { CardsWrapper } from 'views/learn/styles';
import PageHeader from './components/pageHeader';

import TabsComponent from './components/tabs/tabs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { SubjectDetails } from 'redux-toolkit/reducer/SubjectsReducer';


export default function LearnDetails() {
    /* ------------------------------- Local State ------------------------------ */
    const dispatch = useDispatch()
    const { id } = useParams()
    const subjectDetails = useSelector((state: any) => state.SubjectsReducer);

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            await dispatch(SubjectDetails(id))
            setLoading(false)

        })()
    }, [dispatch])

    console.log(subjectDetails, "dispatch(SubjectDetails(id))");


    return (
        <>
            <PageHeader title={subjectDetails?.subjectDetailsData?.basic_info?.name} route='/learn' />
            <TabsComponent loading={loading} />

        </>
    );
}
