import BlogPost from "@/app/components/blogPost";
import Menu from "@/app/components/menu"
import Tags from "@/app/components/Tags"
import styles from './page.module.css'



// SSR komponent server side rendering
const page = async (props) => {
    const awaitedParams = await props.params

    const results = await fetch("http://localhost:1337/api/articles/" + awaitedParams.id)
    // articles je staticka cesta
    // [id] je dynamicka cesta 
    // a keby tam mame articles/[mojeId] tak potom by sa urobili awaitedParams.mojeId


    const article = await results.json()

    console.log(article)

    return (
        <>

            <div className={styles.menuWrapper}>


                <Menu />
            </div>
            <div className={styles.articlePost}>

                <div>
                    <BlogPost blog={article.data} />
                </div>
            </div>
            <div>
                <Tags />
            </div>

        </>
    )
}

export default page