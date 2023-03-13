import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Body } from "../components/ui/Body";

import { api } from "@/utils/api";

import { MainLayout } from "@/components/Layout/main";
import { ReactElement } from "react";

import { NextPageWithLayout } from "@/pages/_app";

const Home: NextPageWithLayout = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="flex flex-col items-center gap-2">
            <Button>Teste</Button>
            <Button href="/home" size={"sm"}>
              Teste
            </Button>
            <Button intent="secondary">Teste</Button>
            <Button intent="destructive">Teste</Button>
            <Heading size="xl" className={"text-white"}>
              Teste
            </Heading>
            <Heading size="lg" className={"text-white"}>
              Teste
            </Heading>
            <Heading size="md" className={"text-white"}>
              Teste
            </Heading>
            <Heading size="sm" className={"text-white"}>
              Teste
            </Heading>

            <Body size="lg" className={"text-white"}>
              Teste
            </Body>
            <Body size="md" className={"text-white"}>
              Teste
            </Body>

            {/* <AuthShowcase /> */}
          </div>
        </div>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
