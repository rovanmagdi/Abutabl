import ModuleView from 'components/module-view';
import { Grid } from '@mantine/core';
import iol from 'assets/images/png/iol.png';
import { useRecoilValue } from 'recoil';
import { langState } from 'store';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SubjectsList } from 'redux-toolkit/reducer/SubjectsReducer';
import EmptyComp from 'views/Empty';
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingPartially from 'components/loading-partially';
import { gamesList } from 'redux-toolkit/reducer/GamesReducer';
import CardItem from '../cardItem/cardItem';

export default function LearnDetailsGames() {
    /* ------------------------------- Local State ------------------------------ */
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const statusGames = useSelector((state: any) => state.GamesReducer);

    useEffect(() => {
        dispatch(gamesList({ id: id }));
    }, [dispatch]);
    const handleDetails = (item: { [key: string]: string }) => {
        navigate(`/learn/${id}/detailsGame/${item?.id}`);

    };

    return (
        <>
            {statusGames?.loading ? (
                <LoadingPartially />
            ) : (
                <>
                    {statusGames?.gamesListData?.games?.length == 0 ? (
                        <>
                            <EmptyComp />
                        </>
                    ) : (
                        <Grid gutter={32}>
                            {statusGames?.gamesListData?.games?.map((item: { [key: string]: string }) => {
                                const progressNumber: number = parseFloat(item?.progress);
                                return (
                                    <Grid.Col sm={6} md={4} lg={3} >
                                        <Link to={`/learn/${id}/detailsGame/${item?.id}`} target='_blank'>
                                            <CardItem image={item?.background} title={item?.name} progress={progressNumber} />
                                        </Link>
                                    </Grid.Col>
                                );
                            })}
                        </Grid>
                    )}
                </>
            )}
        </>
    );
}
