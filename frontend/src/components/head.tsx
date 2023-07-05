import Head from 'next/head';

export function PageHead() {
  return (
    <Head>
      <title>Factored</title>
      <meta
        name="Factored Technical tests"
        content="this app was created for factored to show off technical expertise"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
