import moment from "moment";
import Header from "./header";
import HomePage from "./homePage";
import './app.css';

// nastavenie: revalidate: 100000ms = 100s

// 18:34:00 -> fetch("http://localhost:1337/api/articles", { next: { revalidate: 100 } }) -> nove vysledok (v1)
// 18:34:10 -> fetch("http://localhost:1337/api/articles", { next: { revalidate: 100 } }) -> stary vysledok  (v1)
// 18:34:20 -> fetch("http://localhost:1337/api/articles", { next: { revalidate: 100 } }) -> stary vysledok  (v1)
// 18:34:30 -> fetch("http://localhost:1337/api/articles", { next: { revalidate: 100 } }) -> stary vysledok  (v1)
// preslo 4m30s, revalidate dosiel
// 18:39:00 -> fetch("http://localhost:1337/api/articles", { next: { revalidate: 100 } }) -> novy vysledok (v2)
// 18:39:10 -> fetch("http://localhost:1337/api/articles", { next: { revalidate: 100 } }) -> stary vysledok (v2)

const App = async () => {

    const results = await fetch("http://localhost:1337/api/articles", { next: { revalidate: 100 } }) // 100ms = 0.1s
    const articles = await results.json()
    const convertedData = articles.data.map((item) => ({
        ...item,
        created_at: moment(item.created_at, "-----MM-DD-YYYY").toISOString(),
    }))
    const blogData = convertedData
    console.log(blogData)

    return (
        <Header>
            <HomePage blogData={blogData} />
        </Header>


    )


}

export default App