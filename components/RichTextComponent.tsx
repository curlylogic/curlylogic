import ImageBuilder from "@cl/components/ImageBuilder";
import SyntaxHighlight from "@cl/components/SyntaxHighlight";
import { PortableTextReactComponents } from "@portabletext/react";
import { Fira_Code } from "next/font/google";

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const components: Partial<PortableTextReactComponents> = {
  types: {
    code: SyntaxHighlight,
    image: ImageBuilder,
  },
  list: {
    bullet: ({ children }) => <ul className="cl__unordered">{children}</ul>,
    number: ({ children }) => <ol className="cl__ordered">{children}</ol>,
  },
  block: {
    h1: ({ children }) => <h1 className="cl__heading-1">{children}</h1>,
    h2: ({ children }) => <h2 className="cl__heading-2">{children}</h2>,
    h3: ({ children }) => <h3 className="cl__heading-3">{children}</h3>,
    h4: ({ children }) => <h4 className="cl__heading-4">{children}</h4>,
    h5: ({ children }) => <h5 className="cl__heading-5">{children}</h5>,
    h6: ({ children }) => <h6 className="cl__heading-6">{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className="cl__quote">{children}</blockquote>
    ),
    normal: ({ children }) => <p className="cl__paragraph">{children}</p>,
    p: ({ children }) => <p className="cl__paragraph">{children}</p>,
  },
  marks: {
    highlight: ({ children }) => (
      <span className="cl__highlight">{children}</span>
    ),
    underline: ({ children }) => (
      <span className="cl__underline">{children}</span>
    ),
    "strike-through": ({ children }) => (
      <span className="cl__strike-through">{children}</span>
    ),
    em: ({ children }) => <em className="cl__emphasis">{children}</em>,
    strong: ({ children }) => (
      <strong className="cl__strong">{children}</strong>
    ),
    code: ({ children }) => (
      <code className={`${fira.className} cl__code`}>{children}</code>
    ),

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a className="cl__link" href={value?.href} target={target}>
          {children}
        </a>
      );
    },
  },
};

export default components;
