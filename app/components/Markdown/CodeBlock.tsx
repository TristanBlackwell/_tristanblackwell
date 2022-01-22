import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rangeParser from "parse-numeric-range";

const SyntaxHighlight: object = {
  code({
    node,
    inline,
    className,
    ...props
  }: {
    node: any;
    inline: any;
    className: any;
  }) {
    // Set code language declared in code block: ```lang
    const match = /language-(\w+)/.exec(className || "");

    // Check if we have metadata
    const hasMeta = node?.data?.meta;

    // Highlight lines declared in code block: ```js {2,4-6}
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const applyHighlights: any = (applyHighlights: any) => {
      if (hasMeta) {
        const RE = /{([\d,-]+)}/;
        const metadata = node.data.meta?.replace(/\s/g, "");
        const strlineNumbers = RE.test(metadata) ? RE.exec(metadata)[1] : "0";
        const highlightLines = rangeParser(strlineNumbers);
        const highlight = highlightLines;
        const data: string | null = highlight.includes(applyHighlights)
          ? "highlight"
          : null;
        return { data };
      } else {
        return {};
      }
    };

    return !inline && match ? (
      <SyntaxHighlighter
        style={duotoneDark}
        language={match[1]}
        PreTag="div"
        className="codeblock"
        showLineNumbers={true}
        useInlineStyles={true}
        wrapLines={true}
        lineProps={applyHighlights}
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
};

export default SyntaxHighlight as object;
