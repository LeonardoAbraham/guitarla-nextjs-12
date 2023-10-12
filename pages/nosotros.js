import Image from "next/future/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
    return (
        <Layout
            title={'Nosotros'}
            description={'Sobre nosotros, guitarLA, tienda de música'}
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image src={"/img/nosotros.jpg"} width={1000} height={800} alt="Imagen sobre nosotros"/>
                    <div>
                        <p>
                            Pellentesque consectetur dapibus lectus, eu scelerisque erat. Donec sollicitudin nibh tortor, non fringilla tortor auctor ut. 
                            Nulla eu ipsum sit amet risus pellentesque laoreet. Etiam tincidunt risus vel tellus eleifend mollis. Nulla molestie sem id vehicula consequat. 
                            Duis placerat eleifend lectus quis dignissim. Aliquam sed mi molestie, blandit ligula imperdiet, molestie tortor. Vestibulum vitae felis efficitur, 
                            finibus augue eget, vulputate eros. Nulla congue fermentum nisl, vitae malesuada purus mattis et. Suspendisse consequat elit id sapien tempor auctor.
                        </p>

                        <p>
                            Nulla sollicitudin bibendum purus fermentum tempus. Aliquam tincidunt porttitor ipsum, at tincidunt nibh tempus eget. Donec ultrices rutrum nisl, 
                            non fermentum lectus luctus at. Morbi in tortor quis lacus aliquet consectetur eget nec sapien. Nam finibus, ex ut lacinia vulputate, neque 
                            nibh suscipit est, vel sodales nisl purus et odio. Integer convallis pharetra consectetur. Integer fringilla hendrerit nisi vitae sollicitudin.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>

    )
}

export default Nosotros