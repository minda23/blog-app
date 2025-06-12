
import './blogPost.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const blogPostPart = (props) => {
    const { blogPart } = props;

    return (
        <div className="body-text">
            {blogPart.code ? (
                <SyntaxHighlighter
                    language="javascript"
                    style={a11yDark}
                    customStyle={{ background: '#324159', marginTop: '0', marginBottom: '0', padding: '0.1rem' }}
                >
                    {blogPart.text}
                </SyntaxHighlighter>
            ) : (
                <p>{blogPart.text}</p>
            )}

        </div>
    );
}


export default blogPostPart;
