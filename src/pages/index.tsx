import dynamic from "next/dynamic";
import Head from "next/head";

import { Container, Main } from "components/sharedstyles";

const Cmmap = dynamic(() => import("components/cmmap/cmmap"), { ssr: false });

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Comunity Mapping:Food</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Cmmap />
      </Main>
    </Container>
  );
}
