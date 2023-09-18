"use client";

import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Copy, Done } from "./Icons";

const CopyCode = ({ value }: { value: { language: string; code: string } }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };
  return (
    <div className="cl__copy-code__wrapper">
      <strong>{value.language}</strong>
      <CopyToClipboard text={value.code} onCopy={copyToClipboard}>
        <button>{isCopied ? <Done /> : <Copy />}</button>
      </CopyToClipboard>
    </div>
  );
};

export default CopyCode;
