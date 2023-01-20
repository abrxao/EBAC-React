import Head from 'next/head';
import Request from './components/Teste/request';

export default function Home() {
  return (
    <>
      <Head>
        <title>FIPE Search</title>
        <meta name="description" content="Consultar Tabela FIPE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Request/>
      </main>
    </>
  )
}
