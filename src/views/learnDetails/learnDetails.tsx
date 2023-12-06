import ModuleView from 'components/module-view';
import { Grid } from '@mantine/core';
import iol from 'assets/images/png/iol.png';
import { useRecoilValue } from 'recoil';
import { langState } from 'store';
import Header from 'layout/header';
import { CardsWrapper } from 'views/learn/styles';
import PageHeader from './components/pageHeader';

import TabsComponent from './components/tabs/tabs';


export default function LearnDetails() {
    /* ------------------------------- Local State ------------------------------ */
    const langType = useRecoilValue(langState);

    return (
        <>
            <PageHeader />

            <TabsComponent />

        </>
    );
}
