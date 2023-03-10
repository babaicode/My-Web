
import { trpc } from "@/src/utils/trpc";
import { NextPage } from "next";
import Head from "next/head";

const Chillin: NextPage = () => {

  const {data, error, isLoading} = trpc.useQuery(['posts.posts'])

  if(isLoading){
    return <p>Loading...</p>
  }
  if (error){
    return <div>{JSON.stringify(error)}</div>
  }
  return (
    <>
    <div>{JSON.stringify(data)}</div>
    <Head>
      <title>Chillin</title>
    </Head>
    <div >
      <h1>Chillin</h1>
    </div>
    </>
  )
}
export default Chillin;