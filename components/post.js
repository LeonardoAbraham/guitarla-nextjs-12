import Image from "next/future/image";
import Link from "next/link";

const Post = ({post}) => {

    const { contenido, imagen, titulo, url, publishedAt } = post;
    return (
        <article>
            <Image 
                src={imagen.data.attributes.formats.medium.url}
                width={600}
                height={400}
                alt={`imagen blog $titulo`}
            />

            <div>
                <h3>{titulo}</h3>
                <p>{publishedAt}</p>
                <p>{contenido}</p>
                <Link href={`/blog/${url}`}>
                    <a>
                        Leer Post
                    </a>
                </Link>
            </div>
        </article>
    )
}

export default Post