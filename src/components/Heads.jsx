import Head from "next/head";



export function Heads(props){
    return(
        <Head>
            <title>timelyne | {props.title} </title>
            <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
    )
}