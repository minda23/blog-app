import './blogPost.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './blogPostPart.css'


const BlogPostPart = ({ blogPart, isHeading }) => {


    if (blogPart.code === true) {
        return (
            <SyntaxHighlighter
                language="javascript"
                style={a11yDark}
                customStyle={{
                    background: '#324159',
                    marginTop: '0',
                    marginBottom: '0',
                    padding: '0.1rem'
                }}>
                {blogPart.text}
            </SyntaxHighlighter>
        );
    }

    if (isHeading === true) {
        return (
            <h2 className="heading-text">
                {blogPart.text}
            </h2>
        );
    }


    if (blogPart.text && blogPart.text.endsWith(".png")) {
        return (
            <div>
                <img className="img-blog" src={`/img/${blogPart.text}`} alt="Blog" width="200" height="200" />
            </div>
        );
    }

    // Render list of children (ul > li)
    if (Array.isArray(blogPart.children)) {
        return (
            <ul>
                {blogPart.children.map((child, key) => (
                    <li key={key}>{child.text}</li>
                ))}
            </ul>
        );
    }



    return (
        <div className="body-text">
            <p>{blogPart.text}</p>
        </div>
    );
};

export default BlogPostPart;
