import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import {getSession} from "next-auth/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home({session} : any)  {

    if(!session) return <Login></Login>

  return (
      <div className="h-screen bg-gray-100 overflow-hidden">
          <Head>
              <title>Facebook But Not Really</title>
              <link  rel="icon" href="https://links.papareact.com/5me" />
          </Head>

          <Header></Header>


          <main className="flex">
              {/** Sidebar **/}
              <Sidebar></Sidebar>
              <Feed></Feed>
              <Widgets></Widgets>
          </main>

      </div>
  )
}

export async function  getServerSideProps(context: any) {
    // Get the user
    const session = await  getSession(context);

    return {
        props: {
            session
        }
    }
}
