import BlogPost from "@/app/components/blogPost";
import Header from "@/app/components/header"
import './page.css'


// "use client" sa použiva na dynamicke generovanie obsahu zo servra
// generateStaticParams sa použiva na staticke generovanie obsahu.

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:1337/api/articles");
    const json = await res.json();

    return json.data.map((article) => ({ id: article.documentId })); // example: [{id: "23"}, {id: "232"}, {id: "23145"}]
};
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