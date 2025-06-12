{
    "data": [
        {
            "id": 44,
            "documentId": "q5y5jayb4wcorfh2p841ucwk",
            "title": "Blog app",
            "description": "My own blog about my front-end development journey\n\n",
            "slug": null,
            "createdAt": "2025-05-10T16:46:28.641Z",
            "updatedAt": "2025-06-08T08:45:18.396Z",
            "publishedAt": "2025-06-08T08:45:18.428Z",
            "Body": [
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Aplikácia môjho blogu ",
                            "bold": true
                        }
                    ],
                    "level": 2
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Na začiatku som si vytvoril stav, do ktorého uložím blogové články:"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  const [BlogData, setBlogData] = useState([]);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Dáta načítavam zo Strapi API pomocou fetch vo vnútri useEffect:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Najprv sme napišali ten kod :  "
                        },
                        {
                            "type": "text",
                            "text": "useEffect(() => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        setIsLoading(true);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        fetch(\"http://localhost:1337/api/articles\")",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            .then(response => response.json())",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            .then(data => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": " const convertedData = data.data.map((item) => ({"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    ...item,",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    created_at: moment(item.created_at, \"-----MM-DD-YYYY\"),",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                }))",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                setBlogData(convertedData)",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                setIsLoading(false);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "}).catch(error => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                console.error('Error fetching data:', error);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                setIsLoading(false);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "});",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    },",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        []);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Čo tento kód robí:"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Po načítaní komponentu nastaví isLoading na true."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Zavolá Strapi API a získa články."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Pre každý článok sa pokúsi preformátovať dátum."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Uloží články do stavu BlogData."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V prípade chyby ju vypíše do konzoly."
                        }
                    ]
                },
                {
                    "type": "heading",
                    "level": 3,
                    "children": [
                        {
                            "type": "text",
                            "text": "2. Zobrazenie článkov"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " {sliceData.map((blog) => (",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "   <div className=\"blog-container\" key={blog.id}>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "       <BlogCard setter={setSelectedBlogId}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "         blog={blog}/>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " </div>       ))}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "Nasledne som chcel triediť tie članky podľa dátumu :",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "BlogData.sort((a, b) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        if (a.created_at > b.created_at) {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            return 1;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        } else if (a.created_at < b.created_at) {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            return -1;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        }",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        return 0;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    })",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "3. Triedenie článkov podľa dátumu"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Použil som metódu .sort():"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "BlogData.sort((a, b) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    if (a.created_at > b.created_at) {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        return 1;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    } else if (a.created_at < b.created_at) {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        return -1;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    }",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    return 0;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "});",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": " filtrovanie článkov podľa kategórie"
                        }
                    ],
                    "level": 2
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ďalším krokom bolo filtrovanie článkov podľa kategórie. Každý článok má svoju kategóriu zapísanú vo vlastnosti category. Chcel som, aby si používateľ mohol zobraziť len články z konkrétnej kategórie. Aby som získal jedinečný zoznam všetkých kategórií, použil som Set, čo je špeciálna dátová štruktúra, ktorá automaticky odstráni duplicity. Prešiel som každý článok, pridal jeho kategóriu do Set-u, a potom som tento set prekonvertoval na bežné pole pomocou Array.from()."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Z tohto poľa som vykreslil filtre – napríklad tlačidlá, ktoré zobrazujú počet článkov v danej kategórii. Keď používateľ klikne na niektorú kategóriu, zobrazia sa mu len články z tejto kategórie."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " const categoryCounts = {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        \"React\": 0,",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "        \"Vanilla js\": 0,"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    };",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " const changecategory = Object.entries(categoryCounts).map((categoryArray) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        const AllBlogsInThisCategory = BlogData.filter((item) => item.category === categoryArray[0])",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        const NumberOfBlogsInThisCategory = AllBlogsInThisCategory.length",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": " return [NumberOfBlogsInThisCategory, categoryArray[0]] // to prve je dlžka a ten druhy parameter je nazov string napr. \"food & drink\" })"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Tento kód slúži na zistenie, koľko blogových článkov patrí do každej z dvoch kategórií: React a Vanilla JS"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Na začiatku si vytváram objekt, v ktorom sú tieto kategórie zapísané s nulovou hodnotou. Táto hodnota však zatiaľ nič nerobí – slúži len ako základ na vytvorenie zoznamu kategórií."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Pomocou funkcie Object.entries() tento objekt prevediem na pole, kde má každá kategória svoj vlastný záznam vo forme dvojice: názov kategórie a jej hodnota (napr. [\"React\", 0]). Následne pre každú kategóriu prefiltrujem všetky články a zistím, koľko z nich do danej kategórie patrí. To robím tak, že porovnávam hodnotu category v každom blogu s názvom aktuálnej kategórie."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Počet článkov, ktoré patria do tejto kategórie, potom vrátim spolu s názvom kategórie ako dvojicu údajov – počet a názov. Výsledkom celého procesu je pole, ktoré obsahuje informácie o tom, koľko článkov sa nachádza v každej kategórii."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Napríklad: 4 články patria do kategórie React a 2 do kategórie Vanilla JS."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Tento výstup môžem ďalej využiť na zobrazovanie štatistík, filtrov alebo na vizualizáciu rozdelenia obsahu."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    const mySet1 = new Set();",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    BlogData.forEach((blog) => mySet1.add(blog.category)) ",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    const tags = Array.from(mySet1); ",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Tento kód slúži na získanie unikátnych kategórií (tzv. tagov) zo všetkých článkov, ktoré sa nachádzajú v premennej BlogData. Každý článok má svoju kategóriu uloženú vo vlastnosti category."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Keďže sa tie isté kategórie môžu opakovať vo viacerých článkoch, bolo potrebné získať iba jedinečné hodnoty – teda každú kategóriu len raz."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Na tento účel som použil Set, čo je špeciálny dátový typ v jazyku JavaScript, ktorý automaticky odstraňuje duplicitné hodnoty. Vytvoril som nový Set s názvom mySet1 a pomocou metódy forEach som postupne prechádzal všetky blogy. V každom kroku som pridal hodnotu blog.category do tohto setu."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Výsledkom bol zoznam kategórií, z ktorého boli automaticky odstránené všetky duplicitné záznamy."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Keďže Set nie je klasické pole a nedá sa priamo použiť v používateľskom rozhraní (napr. pri vykresľovaní pomocou map()), prekonvertoval som ho pomocou funkcie Array.from() na bežné pole s názvom tags."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Toto pole potom obsahuje všetky unikátne kategórie, ktoré sa nachádzajú v článkoch, a dá sa pohodlne použiť pri filtrovaní alebo zobrazovaní tagov v UI."
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Blog s preklikom na detail článku a nemenným hlavičkovým layoutom",
                            "bold": true
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V mojej aplikácii pracujem so systémom blogových článkov. Každý článok má svoj nadpis (title), a keď naň používateľ klikne, presmeruje ho to na komponent BlogPost, kde sa zobrazí detail článku. Toto presmerovanie je zabezpečené pomocou routingu v Next.js, konkrétne pomocou dynamickej cesty (napr. /blog/[id]). Dáta pre blogový post sa načítavajú buď server-side (SSR) alebo sú staticky generované vopred (SSG), čo zabezpečuje rýchle načítanie a dobré SEO."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Okrem toho používam moderný spôsob práce s props, kde komponent Header používa children – teda všetok obsah, ktorý sa má zobrazovať vo vnútri hlavičky, sa posúva ako vnútorné komponenty. Header komponent je vložený v App.js alebo v layout súbore, takže je vždy zobrazený na rovnakej pozícii v aplikácii. Nemení sa jeho štruktúra ani pozícia – zmení sa len jeho obsah podľa toho, ktorý článok je práve zobrazený."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Pri prechode na konkrétny článok sa teda nemení celá stránka, ale len obsah v children, kde sa zobrazuje aktuálny nadpis článku a jeho hlavný text. Výsledkom je plynulé prepínanie medzi článkami v rovnakom vizuálnom rozložení, čo vytvára príjemný a konzistentný používateľský zážitok."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "     "
                        },
                        {
                            "type": "text",
                            "text": " <div className=\"container\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                <div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    <Menu />",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    <div className=\"blog-section\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        {!!selectedBlogId && <BlogPost blog={emptyBlog} />}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        {!selectedBlogId && (",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                            <div className=\"blogs-container\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                <div className=\"all-tags-container\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                    {changecategory.map(([count, tag]) => (",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                        <div className=\"tags-wrapper\" key={tag}>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                            <Tag tag={tag} blogCount={count} setter={setSelectedBlogByTag} />",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                        </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                    ))}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                <Highlight className='language-name-of-snippet'>  {children}</Highlight>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                            </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        )}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            </div >",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V tomto kóde zobrazujem opis članku a texty članku z databázy Strapi.",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "return (",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        <>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            <div className=\"post\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                <p>{blog.description}</p>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            <div className={\"article-post\"}>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                {!!blog.Body && blog.Body.map((BodyPart) => ( // ked blog body je vybraty tak vtedy sa zobrazi",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    BodyPart.children.map((child, key) => (",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        <div className=\"body-text\" key={key}>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                            <p>{child.text}</p>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    ))",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                ))}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            </div >",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        </>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    );",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "                                                                           "
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                             ",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                        ",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                ",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                }
            ],
            "Category2": "Vanilla Js"
        },
        {
            "id": 45,
            "documentId": "k0hunzcwdlguqouid5ewnzds",
            "title": "Music app",
            "description": "Audio app \n",
            "slug": null,
            "createdAt": "2025-05-10T16:47:05.327Z",
            "updatedAt": "2025-06-08T09:03:27.641Z",
            "publishedAt": "2025-06-08T09:03:27.679Z",
            "Body": [
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Spotify Projekt"
                        }
                    ],
                    "level": 2
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V Spotify projekte som sa snažil implementovať základy Reactu a zároveň si zlepšiť svoje vedomosti o tejto technológii."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Začal som základmi backendu, konkrétne tým, že som sa učil používať Fetch API na získavanie dát z dummy servera."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/server_spotify_35bd47003b.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "http://localhost:1337/uploads/server_spotify_35bd47003b.png"
                                }
                            ]
                        },
                        {
                            "text": "",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Keď sme úspešne získali dáta, musíme si vytvoriť nový stav aplikácie (tzv. state)."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Následne pomocou funkcie map iterujeme cez albumy zo servera, ktoré potom zobrazíme na obrazovke ako prvé."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/albums_b10e49bd22.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "http://localhost:1337/uploads/albums_b10e49bd22.png"
                                }
                            ]
                        },
                        {
                            "text": "",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ďalším krokom pri práci s touto aplikáciou je naučiť sa používať useReducer.",
                            "bold": true,
                            "underline": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ako funguje useReducer:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Hook useReducer prijíma dva hlavné argumenty:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "reducer funkciu – definuje, ako sa má stav meniť na základe prijatej akcie."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "initialState – počiatočný stav aplikácie."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Vracia pole s dvoma hodnotami:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "state – aktuálny stav."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "dispatch – funkcia, pomocou ktorej posielate akcie na zmenu stavu."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "základna syntax : Const [state, dispatch] = useReducer(reducer, initialState);",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "najprv si musime definovať počiatočny state "
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  "
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "const initialState = {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "albums: [],",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "audios: [],",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "selectedAlbum: null,",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "selectedAudio: null,",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "isModalOpen: false, // toto je boolean",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "isPremiumModalOpen: false,",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "modalSong: null, // ak incializujeme zakladny state kde je datova typ objekt davame null(prazdny objekt)",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "};",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ďalším krokom bude napríklad výber albumu:",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "case \"SELECT_ALBUM\":",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "//const removeSelectedAudio = state.albums.filter((item) => item != state.selectedAudio)",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "return {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "...state,",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "selectedAlbum: dispatchedAction.value,",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "selectedAudio: null,",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "selectedAudio: dispatchedAction.value,",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "};",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Práca so stavom a useReducer v mojej aplikácii"
                        }
                    ],
                    "level": 2
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Keď pracujeme s useReducer, vždy si musíme definovať názov akcie (typ akcie) v reduceri a zároveň to, čo táto akcia vráti – teda ako upraví stav aplikácie."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Najprv skopírujeme celý aktuálny stav pomocou ... (tzv. spread operátor). Ten nám umožňuje vytvoriť kópiu existujúceho objektu alebo poľa."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Krok 1 – Výber albumu",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Prvý krok je prepísať selectedAlbum na hodnotu dispatchedAction.value."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "dispatchedAction.value je hodnota, ktorá prichádza z iného komponentu – napríklad po kliknutí na album, ktorý si používateľ vybral."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Krok 2 – Pridávanie nových albumov",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V tomto kroku som pridal možnosť vytvoriť nový album. Pomocou spread operátora som znovu skopíroval celý stav a prepísal základný albums state tak, aby obsahoval aj nový album."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Krok 3 – Presúvanie audia medzi albumami",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Aplikácia umožňuje pridávať pesničky z jedného albumu do druhého."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Postup:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Použil som funkciu filter():"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Prejde všetky prvky v poli."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Zavolá callback funkciu pre každý prvok."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ak funkcia vráti true, prvok sa zahrnie do nového poľa."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ak false, tak sa nezahrnie."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Výsledkom je nové pole obsahujúce len tie prvky, ktoré spĺňajú podmienku."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V našom prípade som filtroval tak, že ak sa album.id rovná kliknutej hodnote, vráti true."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ďalej:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Vytvoril som premennú, do ktorej som uložil pesničku a ID albumu, kam ju chcem pridať."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Skopíroval som celý stav aplikácie."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Prepísal som selectedAlbum stav."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Pridal som novú pesničku do zoznamu pesničiek tohto albumu."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " Výsledok: Pridali sme jednu novú pesničku do albumu."
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Práca s props v Reacte"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Props (skratka pre properties) sú mechanizmus, pomocou ktorého sa prenášajú dáta alebo funkcie z rodičovskej komponenty do detskej."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ako som pracoval s props:",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V detskej komponente si najprv definujem názov propu."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "const AudioCard = (props) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    const { oneSong, } = props;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V rodičovskej komponente potom do vnútra tejto komponenty vložím hodnotu (napr. oneSong), ktorú chcem odovzdať."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  <div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": " <AudioCard oneSong={oneAudio} oneSong1={oneAudio} />"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V detskej komponente následne využívam túto hodnotu – v našom prípade ide o jednu pesničku, ktorú zobrazím."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " "
                        },
                        {
                            "type": "text",
                            "text": " type: \"ADD_AUDIO_TO_SELECTED_ALBUM\", value: oneSong",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Výber pesničky a zobrazenie jej detailov"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ďalším krokom bolo umožniť používateľovi vybrať konkrétnu pesničku, ktorú chce zobraziť na obrazovke, prípadne (v budúcnosti) aj prehrať."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Na výber som použil knižnicu Material UI (MUI), konkrétne komponent Select."
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Čo je Material UI (MUI) a prečo ho používať?"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "MUI (predtým Material UI) je jedna z najpopulárnejších knižníc pre tvorbu používateľského rozhrania v Reacte. Umožňuje rýchlo a jednoducho vytvárať moderné, responzívne a vizuálne pekné aplikácie."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Výhody MUI:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "✅ Hotové komponenty (tlačidlá, formuláre, tabuľky, modaly atď.)"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "⚡ Rýchly vývoj a prototypovanie"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "📱 Responzívny dizajn"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "🎨 Jednoduché prispôsobenie (témy, farby, písma)"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "📘 Skvelá dokumentácia: https://mui.com"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " Zobrazovanie Názvu albumu alebo pesničky na kliknutie"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Postup, ako som to spravil:",
                            "bold": true,
                            "underline": true
                        }
                    ]
                },
                {
                    "type": "list",
                    "format": "ordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "Najprv som si vytvoril premenné pre názov, interpreta a ďalšie informácie (napr. trvanie, žáner atď.)."
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "Potom som nastavil podmienku, že ak je vybraný album (selectedAlbum), tak sa zobrazia práve informácie o tomto albume."
                                }
                            ]
                        },
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "Naopak, ak je vybrané audio (pesnička), zobrazia sa detailné informácie o konkrétnej skladbe."
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " let audioListTitle = \"\";",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    let audioListArtist = \"\";",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    let audioListAudios = null;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    let audioListImage = \"\";",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  if (state.selectedAlbum !== null) {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        audioListTitle = state.selectedAlbum.title;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        audioListArtist = state.selectedAlbum.artist;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        audioListAudios = state.selectedAlbum.album;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        audioListImage = state.selectedAlbum.url;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " "
                        },
                        {
                            "type": "text",
                            "text": "   if (state.selectedAudio !== null) {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        audioListTitle = state.selectedAudio.title;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        audioListArtist = state.selectedAudio.artist;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        audioListAudios = state.selectedAudio.audio;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Nasleduje kód, ktorý slúži na zobrazenie danej funkcionality:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "<>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "    <div className=\"Home-data\">"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "        <h1 className=\"text-album\">Made for you</h1>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "        {state.albums.map((album) => ("
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "            <div className=\"Album\" key={album.id}>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "                <img className=\"Image-album\" src={album.url} width=\"172\" height=\"172\"></img>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "                <h1 className=\"Album-artist\">artist</h1>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "                <h1 className=\"Album-title\">{album.title}</h1>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "            </div>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "        ))}"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "        <div>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "        </div>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "        <h1 className=\"text-audio\">Episodes for you</h1>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "        {state.audios.map((audio) => ("
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "            <div className=\"Audio\" key={audio.id}>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "                <img className=\"Image-audio\" src=\"images/camilla.jpeg\" width=\"172\" height=\"172\"></img>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "                <h1 className=\"Audio-title\">{audio.title}</h1>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "                <h1 className=\"Audio-artist\">{audio.artist}</h1>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "            </div>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "        ))}"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "    </div >"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "</>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    ",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Prepínanie medzi hlavnou stránkou a detailom albumu"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ďalšia zaujímavá funkcionalita, ktorú som implementoval, je prepínanie medzi obrazovkami. Keď kliknem na ikonu „Home“, automaticky sa presuniem z detailu pesničiek späť na hlavnú stránku, kde sú zobrazené všetky albumy a náhodne vybrané skladby z rôznych albumov."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " {state.selectedAlbum === null && state.selectedAudio === null ? <Home /> : <div className=\"Audio-wrapper\"><AudioList"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        title={audioListTitle}"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        artist={audioListArtist}"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        songs={audioListAudios}"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        url={audioList/></div>}"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Zoradzovanie albumov pomocou sort()",
                            "bold": true,
                            "underline": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ďalšia skvelá funkcionalita, ktorú som v projekte použil, je funkcia sort(). Pomocou nej som zoradil albumy podľa názvu a taktiež podľa dátumu pridania, aby sa zobrazovali od najnovšieho po najstarší."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Funkcia sort() v JavaScripte:",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "sort() triedi pole priamo na mieste – teda mení pôvodné pole (mutuje ho)."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ak nezadáš žiadnu porovnávaciu funkciu, triedi prvky ako reťazce podľa poradia v Unicode (lexikograficky)."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Pre vlastné triedenie môžeš zadať tzv. komparátor – funkciu, ktorá porovnáva dva prvky a vracia:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "záporné číslo → prvý prvok bude pred druhým,"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "kladné číslo → prvý prvok bude za druhým,"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "nulu → poradie sa nemení."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "pole.sort((a, b) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  if (a > b) return 1;     // a ide za b",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  if (a < b) return -1;    // a ide pred b",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  return 0;                // a a b sú rovnaké",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "});",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- Ak je výsledok kladný, a ide za b."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- Ak je záporný, a ide pred b."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- Ak je 0, poradie zostáva rovnaké."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Príklad:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "const cisla = [3, 1, 4, 2];",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "cisla.sort((a, b) => a - b);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "console.log(cisla); // Výstup: [1, 2, 3, 4]",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Vysvetlenie kódu:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "export const sortAlbumsAlphabetically = (albums) => {"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    // Skopírujeme pole albums, aby sme nemenili pôvodné"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  "
                        },
                        {
                            "type": "text",
                            "text": "  let AlbumsSortedAlphabetically = [...albums];",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " // Triedime podľa názvu albumu pomocou localeCompare",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    AlbumsSortedAlphabetically.sort((a, b) =>       a.title.localeCompare(b.title));",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    ",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    // Vraciame zoradené pole",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    return AlbumsSortedAlphabetically;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- albums je pole objektov s vlastnosťou title."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- Funkcia vracia nové pole zoradené abecedne podľa title."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- Použitie [...albums] vytvára kópiu, originál sa nemení."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "export const sortAlbumsReverse = (albums) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    // Skopírujeme pole albums, aby sme nemenili pôvodné",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " "
                        },
                        {
                            "type": "text",
                            "text": "   let AlbumsSortedReversed = [...albums];",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    ",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    // Obrátime poradie prvkov v poli",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    AlbumsSortedReversed.reverse();",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    ",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    // Vraciame nové pole s obráteným poradím",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    return AlbumsSortedReversed;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- Funkcia vráti nové pole s obráteným poradím."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- Použitie [...albums] zabezpečuje nemodifikovanie originálu."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Zhrnutie:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- sortAlbumsAlphabetically(albums) vráti nové pole zoradené podľa názvu."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "- sortAlbumsReverse(albums) vráti nové pole s obráteným poradím"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " "
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    "
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    "
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                }
            ],
            "Category2": "React"
        },
        {
            "id": 46,
            "documentId": "ktw10pj51sdwfd7h19lywjt5",
            "title": "Shopping App",
            "description": "Shopping App",
            "slug": null,
            "createdAt": "2025-05-09T17:40:53.578Z",
            "updatedAt": "2025-06-08T09:18:11.422Z",
            "publishedAt": "2025-06-08T09:18:11.461Z",
            "Body": [
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Načítanie dát a vytvorenie stavu",
                            "bold": true
                        }
                    ],
                    "level": 2
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "bold": true,
                            "text": "Na začiatku si vytvoríme state, do ktorého uložíme naše dáta:",
                            "underline": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " const [cart, setCart] = useState([]);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " Najprv data dostaneme zo suboru data.json",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "   useEffect(() => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        fetch(\"/data.json\")",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            .then((response) => response.json())",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            .then((data) =>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                setCart(data.map(item => ({ ...item, product_qua: 0 })))",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            );",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    }, []);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "2. Zobrazenie dezertov"
                        }
                    ],
                    "level": 2
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ďalší krok je iterovať cez cart pomocou .map() a zobraziť každý dezert v JSX:"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " <div className=\"desserts-list\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                        {cart.map((dessert, key) => (",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                            <div style={dessert.product_qua > 0 ? { border: \"2px solid #C73B0F\" } : {}} key={key} className=\"dessert-item\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "              <div className=\"dessert-image-container\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "               <picture className=\"dessert-image\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "<source srcSet={dessert.image.desktop} media=\"(min-width: 1024px)\" />",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "<source srcSet={dessert.image.tablet} media=\"(min-width: 768px)\" /> <source srcSet={dessert.image.mobile} media=\"(min-width: 100px)\" />",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "code": true,
                            "text": "<img src={dessert.image.thumbnail} alt={dessert.name} className=\"dessert-thumbnail\" />"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                            </picture>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "<div className=\"dessert-details\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                   <span className=\"dessert-category\">{dessert.category}</span>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                   <p className=\"dessert-name\">{dessert.name}</p>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                   <p className=\"dessert-price\">${dessert.price}</p>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                                </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/desserts_069cddfe25.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "http://localhost:1337/uploads/desserts_069cddfe25.png"
                                }
                            ]
                        },
                        {
                            "text": "",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "A to tak, že prechádzame cez stav aplikácie cart a pomocou funkcie .map() iterujeme cez každý dezert."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "dessert predstavuje jeden konkrétny dezert z poľa, zatiaľ čo key je index (kľúč), ktorý udáva, na akej pozícii sa aktuálne nachádzame pri prechádzaní poľa cart."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " "
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": " Pridanie produktu do košíka",
                            "bold": true
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "bold": true,
                            "text": "Tento kód slúži na zvýšenie množstva daného produktu v košíku:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "const incrementCounter = (card_id) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        setCart(cart =>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            cart.map((item) =>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                card_id === item.id",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    ? { ...item, product_qua: (item.product_qua || 0) + 1 }",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    : item",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            )",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        );",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    };",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Odobratie produktu z košíka",
                            "bold": true
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "bold": true,
                            "text": "Tento kód slúži na zníženie množstva daného produktu v košíku (ak je aktuálna hodnota väčšia než 0):"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " const decrementCounter = (card_id) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        setCart(cart =>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            cart.map((item) =>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                card_id === item.id && item.product_qua > 0",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    ? { ...item, product_qua: item.product_qua - 1 }",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    : item",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            )",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        );",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    };",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": " Zobrazenie produktu + tlačidiel",
                            "bold": true
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " <div className=\"dessert-details\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    <span className=\"dessert-category\">{dessert.category}</span>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    <p className=\"dessert-name\">{dessert.name}</p>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    <p className=\"dessert-price\">${dessert.price}</p>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    <div className=\"quantity-controls\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        <button",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            onClick={() => decrementCounter(dessert.id)}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            className=\"btn minus\"",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        >",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            -",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        </button>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        <span className=\"quantity\">{dessert.product_qua}</span>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        <button",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            onClick={() => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                incrementCounter(dessert.id);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                setSelectedCakeId(dessert.id);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            }}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            className=\"btn plus\"",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        >",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            +",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        </button>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "</div>"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Produkt, ktorý pridám do košíka, zobrazím v komponente OrderSummary.js."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/order_Summary_b4591738c5.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "http://localhost:1337/uploads/order_Summary_b4591738c5.png"
                                }
                            ]
                        },
                        {
                            "text": "",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V tomto košíku sa zobrazujú všetky produkty, ktoré doň pridám. Nasledujúci kód (zobrazený aj na obrázku) ukazuje, ako som to zrealizoval:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "const OrderSummary = (props) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    const { item } = props;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    const [openModal, setOpenModal] = useState(false);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    const { cart, setCart } = useContext(DataContext);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " const totalQuantity = cart.reduce((sum, item) => sum + (item.product_qua || 0), 0);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    const itemsWithAtLeastOneQuantity = cart.filter(item => item.product_qua > 0);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    const deleteItem = (card_id) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        setCart(cart =>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            cart.map((item) =>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                card_id === item.id && item.product_qua > 0",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    ? { ...item, product_qua: 0 }",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    : item",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            )",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        );",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    };",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "Vysvetlenie komponentu OrderSummary.js",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "Použité hooky (useState a useContext)",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "V tomto komponente používam dva hooky useState:",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "Prvý slúži na otvorenie a zatvorenie modálneho okna (modal).",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "Druhý nie je useState, ale useContext – slúži na získanie dát z hlavného súboru (cez DataContext).",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "🧠 Čo je useContext?",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "useContext je React hook, ktorý umožňuje prístup k dátam (a aj ich úpravu), ktoré sú uložené v tzv. kontekste. Výhodou je, že nemusíš tieto dáta manuálne posúvať cez props z rodiča na potomka – komponent má prístup k stavu priamo.",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "🛍️ Práca s kontextom (useContext) v OrderSummary",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "Tento komponent využíva useContext na získanie globálneho stavu košíka (cart) cez DataContext. Vďaka tomu:",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "môže komponent čítať aj upravovať obsah košíka,",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "nie je potrebné posúvať cart cez props.",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "🧮 Výpočet údajov z košíka",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "totalQuantity – spočíta celkový počet produktov v košíku.",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "itemsWithAtLeastOneQuantity – vyfiltruje iba tie produkty, ktoré majú množstvo väčšie ako 0.",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "❌ Odstránenie položky",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "Funkcia deleteItem(card_id) nastaví product_qua (počet kusov) na nulu pre daný produkt, čím sa efektívne odstráni z košíka.",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "🧾 Zobrazenie položiek v košíku",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "Pomocou .map() sa zobrazujú všetky produkty, ktoré majú počet väčší ako 0. Pri každom produkte sa zobrazí:",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "názov produktu,",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "počet kusov,",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "jednotková cena,",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "celková cena (price × quantity),",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "tlačidlo (napr. ikona), ktorým možno produkt odstrániť.",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "🪄 Modal – potvrdenie objednávky",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "Po kliknutí na tlačidlo „Confirm Order“ sa otvorí modálne okno (openModal = true).",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "Modal je riadený pomocou stavu openModal a zatvára sa cez funkciu onClose.",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "🔗 Obrázok modalu:",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "text": "",
                            "type": "text"
                        },
                        {
                            "type": "link",
                            "url": "http://localhost:1337/uploads/modal_3204de7e5c.png",
                            "children": [
                                {
                                    "type": "text",
                                    "text": ""
                                }
                            ]
                        },
                        {
                            "text": "",
                            "type": "text"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " "
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                }
            ],
            "Category2": null
        },
        {
            "id": 50,
            "documentId": "p3dqarlq18o0o5cpe12jy43h",
            "title": "Frontend-quiz",
            "description": "Front-end quizz app",
            "slug": null,
            "createdAt": "2025-06-08T09:32:36.395Z",
            "updatedAt": "2025-06-12T17:01:43.468Z",
            "publishedAt": "2025-06-12T17:01:43.543Z",
            "Body": [
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ako som vytvoril frontendový kvíz v Next.js s lokálnymi dátami"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " Úvod"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "V tomto článku ti ukážem, ako som postavil jednoduchú, responzívnu a tematickú kvízovú aplikáciu pomocou frameworku Next.js. Dáta o otázkach sú načítavané z lokálneho JSON súboru, ktorý nahrádza backend (pôvodne som pracoval s CMS Strapi)."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Aplikácia ponúka prepínanie témy (svetlá/tmavá), výber kategórie, stránkovanie otázok, sledovanie skóre a progress bar."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " Použité technológie"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Next.js – moderný React framework"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "React Hooks – useState, useEffect na správu stavu a cyklov"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Material UI + Bootstrap – na dizajn a ovládacie prvky"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Lokálne JSON dáta – simulovaný backend"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "ProgressBar z react-bootstrap – vizuálne sledovanie priebehu kvízu"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Funkcionality aplikácie"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "🌙 "
                        },
                        {
                            "type": "text",
                            "text": "Tmavý a svetlý režim (theme toggle)",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Výber témy",
                            "bold": true,
                            "underline": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Zoznam všetkých tém sa vykresľuje dynamicky:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "{sections.map((subject, index) => (",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  <button key={index} onClick={() => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    setSelectedTheme(subject.title);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    setIsQuizStarted(true);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  }}>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    <img src={subject.icon} alt={subject.title} />",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    {subject.title}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  </button>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "))}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Použil som komponent Switch z Material UI, ktorý prepína triedy na <body>:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "useEffect(() => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  document.body.classList.toggle('light-mode', checked);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  document.body.classList.toggle('dark-mode', !checked);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "}, [checked]);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": " Dynamické načítanie otázok"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Otázky sa načítavajú z data.json po načítaní stránky:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "useEffect(() => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  fetch(\"./data.json\")",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    .then((res) => res.json())",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    .then((data) => setSections(data.quizzes));",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "}, []);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Každá kategória (napr. HTML, CSS, JavaScript) je zobrazená ako karta s ikonou."
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": " Komponent QuestionList: Zobrazovanie otázok samostatne"
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Okrem hlavného komponentu QuizzMain som vytvoril aj pomocný komponent QuestionList, ktorý slúži na jednoduché zobrazenie otázok z vybranej témy."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Je to ideálne riešenie, keď chceš:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "zobraziť zoznam otázok bez odpovedí,"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "prehľadne vidieť všetky otázky na jednom mieste,"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "použiť ho napr. ako administrátorsky náhľad alebo výpis."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "🔍"
                        },
                        {
                            "type": "text",
                            "text": "Čo komponent robí:",
                            "bold": true,
                            "underline": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Prijíma pole otázok (questions) ako props,"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Ak sú otázky prázdne, zobrazí hlášku,"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Inak iteruje cez pole a zobrazí každú otázku ako tlačidlo (napr. na výber)."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "import React, { useState, useEffect } from 'react';",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "const QuestionList = ({ questions }) => {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    if (!questions || questions.length === 0) {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        return <p>No questions available.</p>;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    }",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " return (",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        <div className=\"questions-container\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            {questions.map((q, index) => (",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                <button key={index} className=\"questions\">",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                    {q.question}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "                </button>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "            ))}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "        </div>",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "    );",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "};",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "export default QuestionList;",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": " Stránkovanie otázok"
                        }
                    ],
                    "level": 2
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Zobrazujú sa 4 otázky na jednu stránku. Kód:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "const paginatedQuestions = questions.slice((currentPage - 1) * pageSize, currentPage * pageSize);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Používateľ kliká na \"Ďalšia otázka\" alebo \"Odoslať\", aby sa posunul ďalej."
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " Skóre a vyhodnotenie"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Po zodpovedaní všetkých otázok sa zobrazí skóre:"
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "if (currentPage < totalPages) {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  setCurrentPage(currentPage + 1);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "} else {",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "  setShowScore(true);",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "}",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "heading",
                    "children": [
                        {
                            "type": "text",
                            "text": "Progress bar",
                            "bold": true,
                            "underline": true
                        }
                    ],
                    "level": 3
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "Progress bar ukazuje percentuálny priebeh vyplňovania kvízu:",
                            "bold": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": "<ProgressBar now={(currentPage / totalPages) * 100} />",
                            "code": true
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": " Čo som sa naučil",
                            "bold": true,
                            "underline": true
                        }
                    ]
                },
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "Práca so stavom a podmienkami v Reacte"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "Práca s fetch() a JSON dátami"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "Tvorba stránkovania"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "Tvorba progresívneho UI s dizajnovými knižnicami"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "list",
                    "format": "unordered",
                    "children": [
                        {
                            "type": "list-item",
                            "children": [
                                {
                                    "type": "text",
                                    "text": "Export statickej aplikácie pre Netlify   "
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                },
                {
                    "type": "paragraph",
                    "children": [
                        {
                            "type": "text",
                            "text": ""
                        }
                    ]
                }
            ],
            "Category2": null
        }
    ],
        "meta": {
        "pagination": {
            "page": 1,
                "pageSize": 25,
                    "pageCount": 1,
                        "total": 4
        }
    }
}