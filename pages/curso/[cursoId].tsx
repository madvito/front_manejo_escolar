import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import CursoInfo from '../../components/Curso/CursoInfo';


const CursoPage: NextPage = () => {
    return (
       <>
        <Head>
            <title>Manejo escolar</title>
            <meta name="description" content="Manejo escolar" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <CursoInfo/>
        </Layout>
       </>
    )
}

export default CursoPage;