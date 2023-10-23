import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyCode from "@cl/components/CopyCode";

const SyntaxHighlight = ({
  value,
}: {
  value: { language: string; code: string };
}) => {
  return (
    <div className={`cl__code-syntax__wrapper`}>
      <CopyCode value={value} />
      <SyntaxHighlighter
        language={value.language}
        style={darcula}
        showLineNumbers={true}
        wrapLines={true}
      >
        {value.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default SyntaxHighlight;
