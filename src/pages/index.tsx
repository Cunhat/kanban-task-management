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

import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center bg-gradient-to-b ">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 "></div>
      </main>
    </>
  );
};

Home.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
