import './blogPost.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const blogPostPart = (props) => {
    const { blogPart } = props;



    if (blogPart.code === true) {
        return (
            <SyntaxHighlighter
                language="javascript"
                style={a11yDark}
                customStyle={{ background: '#324159', marginTop: '0', marginBottom: '0', padding: '0.1rem' }}>
                {blogPart.text}
            </SyntaxHighlighter>
        )
    }

    if (blogPart.text !== undefined && blogPart.text.endsWith(".png")) {
        return (
            <div>
                <img className="img-blog" src={"/img/" + blogPart.text} alt="Blog" width="200" height="200"></img>
            </div>
        )
    }

    if (blogPart.children !== undefined) {
        return (
            <div>
                {blogPart.children.map((child, key) => (
                    <ul key={key}>
                        <li>{child.text}</li>
                    </ul>

                ))}

            </div>
        )
    }


    return (
        <>
            <div className="body-text">
                <p>{blogPart.text}</p>

            </div>
        </>
    );
}


export default blogPostPart;
