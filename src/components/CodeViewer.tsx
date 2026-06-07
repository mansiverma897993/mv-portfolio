import React, { useMemo } from 'react';

interface CodeViewerProps {
  code: string;
  fileName: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ code, fileName }) => {
  const isJson = fileName.endsWith('.json');

  const highlightedCode = useMemo(() => {
    // Escape HTML entities to prevent rendering issues
    let escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    if (isJson) {
      // JSON Syntax Highlighting
      // Keys: "key"
      escaped = escaped.replace(/"([^"]+)":/g, '<span class="code-key">"$1"</span>:');
      // String Values
      escaped = escaped.replace(/: \s*"([^"]+)"/g, ': <span class="code-string">"$1"</span>');
      // Numbers and Booleans
      escaped = escaped.replace(/: \s*(true|false|null|\d+)/g, ': <span class="code-value">$1</span>');
    } else {
      // TSX / JS Syntax Highlighting
      // Keywords
      const keywords = [
        'import', 'export', 'const', 'return', 'from', 'default', 'function',
        'class', 'interface', 'extends', 'type', 'let', 'var', 'true', 'false',
        'null', 'undefined', 'as', 'key', 'style', 'className', 'size', 'Record', 'string'
      ];
      const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
      escaped = escaped.replace(keywordRegex, '<span class="code-keyword">$1</span>');

      // JSX Tags (like &lt;div or /&gt; or &lt;/div&gt;)
      escaped = escaped.replace(/(&lt;\/?[a-z0-9]+&gt;|&lt;[a-z0-9]+\s|&lt;\/?[A-Z][a-zA-Z0-9]*)/g, '<span class="code-tag">$1</span>');

      // Strings (single quote, double quote, backtick template literals)
      escaped = escaped.replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="code-string">$1</span>');

      // Comments
      escaped = escaped.replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>');
    }

    return escaped;
  }, [code, isJson]);

  const lines = highlightedCode.split('\n');

  return (
    <div className="editor-code-container">
      <div className="line-numbers">
        {lines.map((_, idx) => (
          <div key={idx} className="line-number-cell">{idx + 1}</div>
        ))}
      </div>
      <pre className="code-content-pre">
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </div>
  );
};
