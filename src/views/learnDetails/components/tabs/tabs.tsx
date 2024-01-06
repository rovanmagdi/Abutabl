import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ReactComponent as Eye } from '../../../../assets/images/svg/eye.svg';
import { ReactComponent as EyeInactive } from '../../../../assets/images/svg/iconsGray.svg';
import { ReactComponent as Video } from '../../../../assets/images/svg/video-play.svg';
import { ReactComponent as VideoInactive } from '../../../../assets/images/svg/videoGray.svg';
import { ReactComponent as Game } from '../../../../assets/images/svg/game.svg';
import { ReactComponent as GameInactive } from '../../../../assets/images/svg/gameGray.svg';
import 'react-tabs/style/react-tabs.css';
import './index.css';
import Overview from './overview';
import LoadingPartially from 'components/loading-partially';
import { useSelector } from 'react-redux';

import Units from '../units';

import LearnDetailsGames from '../games';

const TabsComponent = (loading: { loading: boolean }) => {
    const [index, setIndex] = useState(0);
    const subjectDetails = useSelector((state: any) => state.SubjectsReducer);

    const handleTabSelect = (index: any) => {
        setIndex(index);
    };
    console.log(loading, "loading");


    return (
        <Tabs style={{ display: 'block' }} onSelect={handleTabSelect}>
            <TabList>
                <Tab>
                    {' '}
                    {index == 0 ? <Eye style={{ marginRight: '10px' }} /> : <EyeInactive style={{ marginRight: '10px' }} />}{' '}
                    <span>Overview</span>
                </Tab>
                <Tab>
                    {' '}
                    {index == 1 ? (
                        <Video style={{ marginRight: '10px' }} />
                    ) : (
                        <VideoInactive style={{ marginRight: '10px' }} />
                    )}{' '}
                    Units
                </Tab>
                <Tab>
                    {index == 2 ? <Game style={{ marginRight: '10px' }} /> : <GameInactive style={{ marginRight: '10px' }} />}{' '}
                    Games
                </Tab>
            </TabList>
            {loading.loading ? (
                <TabPanel>
                    <LoadingPartially />
                </TabPanel>
            ) : (
                <>
                    <TabPanel>
                        <Overview />
                    </TabPanel>
                    <TabPanel>
                        <Units />
                    </TabPanel>
                    <TabPanel>
                        <LearnDetailsGames />
                    </TabPanel>
                </>
            )}
        </Tabs>
    );
};

export default TabsComponent;
