import NavBar from "../components/NavBar"
import Head from "next/head"

export default function format( { children }){
    return (
        <>
            <Head>
                <title>Task Project</title>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="author" content="Din"/>
                <meta name="theme-color" content="#646464" />
                <meta name="description" content="This is symple project build with  nextJs,tailwind"/>
                <meta name="keyword" content="html-symple,template,tailwind,static project"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="Nextjs-Template"/>
                <meta property="og:title" content="NextJs | Template" />
                <meta property="og:url" content="https://nextjs-tailwind-ruddy.vercel.app/" />
                <meta property="og:image" content="https://html-project-three.vercel.app/public/project-img.png" />
            </Head>
            <NavBar></NavBar>
            <main>{children}</main>
        </>
    )
}