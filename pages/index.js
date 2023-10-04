import Link from "next/link"

export default function Home() {
    return (
        <>
            <h1>
                Hola mundo en next
            </h1>

            <Link href={"/nosotros"}>Nosotros</Link>
        </>
        
    )
}
