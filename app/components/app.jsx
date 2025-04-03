"use client";
import { useState, useEffect } from "react";
import BlogCard from "./blogCard";
import BlogPost from "./blogPost";
import Menu from "./menu";
import moment from "moment";
import './app.css';
import Tags from "./Tags";
import Loader from "./Loader";



const app = () => {
    const [BlogData, setBlogData] = useState([]);
    const [selectedBlogId, setSelectedBlogId] = useState("");
    const [selectedTag, setSelectedBlogByTag] = useState("");
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false)

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

    // no dobre máme vyfiltrovany blog ale kde ho chcem použiť 
    // teraz musim posielať ako prop cely blog v blogCard ako tam pošlem
    // ten vyfiltrovany blog


    BlogData.sort((a, b) => {
        if (a.created_at > b.created_at) {
            return 1;
        } else if (a.created_at < b.created_at) {
            return -1;
        }
        return 0;
    })

    useEffect(() => {
        setIsLoading(true);
        fetch("https://jsonfakery.com/blogs")
            .then(response => response.json())
            .then(data => {
                // 1. chceme ukázať 10 blogov. blog[0] a blog[9]
                // 2. blog[10] blog[19].
                // 3. blog[20] blog[29].
                // 4. start = page * 10.

                // ako by sme mohli isť na druhu stránku ale nezavolať ten fetch
                // potrebujeme vedieť ktore blogy už vidime z fetchu ako sa načitala stránka.
                // Mohli by sme ukázať len časť blog dát 
                // Mohli by sme si vytvoriť novu premennu , ktorá by mala len tie slicenute data.
                // 

                // end of page :  1. 9,19,29,39,49,59
                // end =  (page + 1) * 10 = 10
                // second (page + 1) * 10 = 11
                // third  (page + 1) * 10 = 12



                const convertedData = data.map((item) => ({
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

    return (
        <div>
            <Menu />
            <div className="blog-section">
                {!!selectedBlogId && <BlogPost blog={emptyBlog} />}
                {!selectedBlogId && (
                    <div className="blogs-container">
                        <div className="all-tags-container">
                            {tags.map((tag) => (
                                <div className="tags-wrapper" key={tag}>
                                    <Tags tag={tag} setter={setSelectedBlogByTag} />

                                </div>
                            ))}
                        </div>
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
                    </div>
                )}
            </div>


            <div className="move-blog">
                <p onClick={() => { handlePrevious() }} className="previous">previous</p>
                <p className="numbers-pages">{page + 1} of {TotalPages}</p>
                <p onClick={() => { handleNext() }} className="next">next</p>
            </div>
        </div>
    );

}


export default app