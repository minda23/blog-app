import HeaderPage from "./headerPage";
import moment from "moment";
import './app.css';

const Header = async ({ children }) => {
    const results = await fetch("http://localhost:1337/api/articles")
    const articles = await results.json()
    const convertedData = articles.data.map((item) => ({
        ...item,
        created_at: moment(item.created_at, "-----MM-DD-YYYY").toISOString(),
    }))
    const blogData = convertedData
    console.log(blogData)
    return (
        <div>
            <HeaderPage data={blogData} children={children} />
        </div>
    );
};

export default Header; 