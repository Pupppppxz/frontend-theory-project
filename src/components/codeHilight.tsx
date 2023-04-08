import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
    code: string;
}

const codeHiLighter = ({ code }: Props) => {
    return (
        <SyntaxHighlighter language="python" style={dark}>
            {code}
        </SyntaxHighlighter>
    )
}

export default codeHiLighter