import Head from 'next/head'
import { Header, Nav, Results } from '../components'
import requests from '../utils/requests'

export default function Home({ results }) {
    return (
        <>
            <Head>
                <title>Hulu 2.0</title>
                <meta name="description" content="Hulu 2.0"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header />
            <Nav />
            <Results results={results} />
        </>
    )
}
export const getServerSideProps = async (context) => {
    const genre = context.query.genre

    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
        .then((res) => res.json())
        .catch(err => console.log(err))
    return {
        props: {
            results: request.results
        }
    }
}

