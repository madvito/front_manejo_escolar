import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';


const Home: NextPage = () => {
    return (
       <>
        <Head>
            <title>Manejo escolar</title>
            <meta name="description" content="Manejo escolar" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            Home
        </Layout>
       </>
    )
}

export default Home;