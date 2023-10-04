import Head from "next/head"

function Layout({children, title = '', description = ''}) {
    return (
        <>
            <Head>
                <title>{`GuitarLA - ${title}`}</title>
                <meta name="description" content={description} />
            </Head>
            <h1>Desde Layout</h1>
            {children}
        </>
    )
}

export default Layout