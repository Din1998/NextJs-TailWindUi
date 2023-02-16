import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Head from "next/head"

export default function format( { children }){
    return (
        <>
            <Head>
                <title>Task Project</title>
            </Head>

            <NavBar></NavBar>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}