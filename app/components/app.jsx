"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/header"
import BlogCard from "./blogCard";
import BlogPost from "./blogPost";
import Menu from "./menu";
import moment from "moment";
import './app.css';
import Tag from "./Tag";
import Loader from "./Loader";
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const App = () => {

    const [BlogData, setBlogData] = useState([]);
    const [selectedBlogId, setSelectedBlogId] = useState("");
    const [selectedTag, setSelectedBlogByTag] = useState("");
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const textWithNameCode = BlogData.filter((element) => element.code === true);
    //- [ ]  ked sa klikne next gombik tak zobrazi ine blogy ako aktualne
    //  ked sa klikne na previous tak sa zobrazia predošle blogy
    //  mali by sme state kde by sme mali premennu a funkciu ktora by menila tie strany že ideme z jednej na dalšiu kde su ine blogy
    //  potrebovali by sme novu premmennu alebo state kde su len tie blogy ktore su na aktualnej stránke
    //  potrebujem to využiť ten slice že ukazujem podľa toho čisla stranky ine blogy.

    // takže čo máme rozdeliť na strany ?
    // no rozdeliť máme vlastne tie blogPosty a momentalne ich mám 10 a chcem aby na každej stranke boli len po 5
    // ako to spravim, 

    function handleNext() {
        setPage(page + 1)
    }


    function handlePrevious() {
        setPage(page - 1)

    }

    let emptyBlog = {};

    if (selectedBlogId !== "") {
        const blogfull = BlogData.find((element) => element.id === selectedBlogId)
        emptyBlog = blogfull;
    }

    let filteredBlogByTag = BlogData; // vzdy ked mi vypisuje hodnotu undefined treba console.log že čo tam je vlaste či 
    // to čo očakávam.  // 47 mame všetky blogy
    if (selectedTag !== "") { // ked je tag selectovany tak sa vyfiltruju blogy ktore k nemu patria.
        let emptyTag1 = BlogData.filter((element) => element.category === selectedTag)
        // čo je vlastne emptyTag tie BlogData filtrujeme na zaklade kategorie a ukladáme do premennej
        // že ked sa kategoria nachádza v blogdata a rovna se selectovanemu tagu ale čo s tym teraz ?
        filteredBlogByTag = emptyTag1;

    }

    // teraz filtrujem koľko mam kategorii v blog data 
    // ale chcem že koľko člankov obsahuje jedna kategoria
    // čiže mam objekt category a v nom moje tagy a hodnotu koľko ich je.
    // Dobrý deň, no není to zlý nápad tak manuálne listovať tie kategórie, 
    // táto časť môže byť 👍 Potom dalej (riadok 79+) 
    // vám bude treba dvojitu funkciu: forEach aj filter.
    //  Niejak musíte s tým forEachom prejsť cez všetky kategórie, a
    // potom použiť ten filter aby ste každú spočítali.
    //  Aktulani filter ktorý máte porovná element proti sebe, čo vlastne by nič nerobilo.
    const categoryCounts = {
        "React": 0,
        "Vanilla js": 0,
    };

    const changecategory = Object.entries(categoryCounts).map((categoryArray) => {
        const AllBlogsInThisCategory = BlogData.filter((item) => item.category === categoryArray[0])
        const NumberOfBlogsInThisCategory = AllBlogsInThisCategory.length

        return [NumberOfBlogsInThisCategory, categoryArray[0]] // to prve je dlžka a ten druhy parameter je nazov string napr. "food & drink"

    }
    )

    BlogData.sort((a, b) => {
        if (a.created_at > b.created_at) {
            return 1;
        } else if (a.created_at < b.created_at) {
            return -1;
        }
        return 0;
    })
    // dynamicky komponent
    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:1337/api/articles")
            .then(response => response.json())
            .then(data => {

                const convertedData = data.data.map((item) => ({
                    ...item,
                    created_at: moment(item.created_at, "-----MM-DD-YYYY"),
                }))
                setBlogData(convertedData)
                setIsLoading(false);



            }).catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);

            });
    },
        []);

    const start = page * 10;
    const end = (page + 1) * 10;
    const sliceData = filteredBlogByTag.slice(start, end);
    const TotalBlogs = filteredBlogByTag.length;
    const TotalPages = Math.ceil(TotalBlogs / 10); // ceiling znamena strop 

    // chceme dostať všetky tagy z BlogData
    const mySet1 = new Set();

    BlogData.forEach((blog) => mySet1.add(blog.category)) // for each iteruje cez zoznam spravi niečo z hodnotu 
    // ale nevracia nam niečo čo by sme mohli zobraziť.

    const tags = Array.from(mySet1); // array from vytvori pole zo setu.

    if (isLoading) {
        return <Loader />
    }

    else {
        return (
            <Header>
                <div className="blog-cards">

                    {sliceData.map((blog) => (
                        <div className="blog-container" key={blog.id}>
                            <BlogCard
                                setter={setSelectedBlogId}
                                blog={blog}
                            />

                        </div>

                    ))}
                </div>

            </Header>

        );


    }
}




export default App