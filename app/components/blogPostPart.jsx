import './blogPost.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const blogPostPart = (props) => {
    const { blogPart } = props;

    const changeImages = blogPart.filter((image) => image === cover.caption)

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

    console.log(blogPart.children);

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
        <div className="body-text">
            <p>{blogPart.text}</p>
            <img>{changeImages}</img>
        </div >
    );
}


export default blogPostPart;
