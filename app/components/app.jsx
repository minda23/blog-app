import moment from "moment";
import Header from "./header";
import HomePage from "./homePage";
import './app.css';


const App = async () => {
    const results = await fetch("http://localhost:1337/api/articles", { next: { revalidate: 100 } }) // 100ms = 0.1s
    const articles = await results.json()
    const convertedData = articles.data.map((item) => ({
        ...item,
        momentDate: new Date(item.dataofpublishing),
    }))
    const blogData = convertedData
    console.log(blogData)

    const sortBlogPost = blogData.sort((a, b) => b.momentDate - a.momentDate);
    
    return (
        <Header>
            <HomePage blogData={sortBlogPost} />
        </Header>
    )
}
export default App