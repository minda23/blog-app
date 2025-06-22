import moment from "moment";
import HomePage from "./homePage";
import './app.css';




const App = async () => {
    const results = await fetch("http://localhost:1337/api/articles")
    const articles = await results.json()
    const convertedData = articles.data.map((item) => ({
        ...item,
        created_at: moment(item.created_at, "-----MM-DD-YYYY").toISOString(),
    }))
    const blogData = convertedData
    console.log(blogData)

    return (
        <HomePage blogData={blogData} />

    )


}

export default App