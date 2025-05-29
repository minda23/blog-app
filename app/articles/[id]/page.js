import BlogPost from "@/app/components/blogPost";
import Header from "@/app/components/header"

import './page.css'

// SSR komponent server side rendering
const page = async (props) => {
    const awaitedParams = await props.params
    const results = await fetch("http://localhost:1337/api/articles/" + awaitedParams.id)
    const article = await results.json()

    return (
        <>
            <Header>
                <BlogPost blog={article.data} />
            </Header>
        </>
    )
}
export default page