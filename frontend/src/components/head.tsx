import Head from 'next/head';

export function PageHead() {
  return (
    <Head>
      <title>Test Questions</title>
      <meta
        name="description"
        content="Testquestions is the app that helps you to easily create or use tests for any purpose"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
