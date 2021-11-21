import type { NextPage } from 'next';
import Head from 'next/head';
import Curso from '../../components/Curso/Curso';
import Layout from '../../components/Layout';


const CursoPage: NextPage = () => {
    return (
       <>
        <Head>
            <title>Manejo escolar</title>
            <meta name="description" content="Manejo escolar" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            <Curso/>
        </Layout>
       </>
    )
}

export default CursoPage;