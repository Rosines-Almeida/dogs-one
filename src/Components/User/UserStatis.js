import React from 'react';
import { UseFetch } from '../../Hooks/UseFetch';
import { Error } from '../Helper/Error';
import { Head } from '../Helper/Head';
import { Loading } from '../Helper/Loading';
import { STATS_GET } from '../../api';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

export const UserStatis = () => {
    const {
        data, error, loading, request,
    } = UseFetch();
    React.useEffect(() => {
        async function getData() {
            const { url, options } = STATS_GET();
            await request(url, options);
        }
        getData();
    }, [request]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (data) {
        return (
            <React.Suspense fallback={<div />}>
                <Head
                    title="Estatisticas"
                />
                <UserStatsGraphs data={data} />
            </React.Suspense>

        );
    }
    return null;
};
