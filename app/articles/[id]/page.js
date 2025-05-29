import BlogPost from "@/app/components/blogPost";
import Menu from "@/app/components/menu"
import Tag from "@/app/components/Tag"
import './page.css'

// SSR komponent server side rendering
const page = async (props) => {
    const awaitedParams = await props.params
    const results = await fetch("http://localhost:1337/api/articles/" + awaitedParams.id)
    const article = await results.json()

    return (
        <>
            <div className={"menu-wrapper"}>
                <Menu />
            </div>

            <div>
                <BlogPost blog={article.data} />
            </div>

            <div>
                <Tag />
            </div>

        </>
    )
}
export default page