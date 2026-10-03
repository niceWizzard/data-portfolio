import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkdownImage from "./MarkdownImage";

interface MarkdownRendererProps {
  content: string;
}

function hasBlockOrImageNode(node?: unknown): boolean {
  if (!node || typeof node !== "object") return false;
  const element = node as { type?: string; tagName?: string; children?: unknown[] };
  if (element.type === "element") {
    if (
      element.tagName &&
      [
        "img",
        "figure",
        "figcaption",
        "div",
        "table",
        "pre",
        "blockquote",
      ].includes(element.tagName)
    ) {
      return true;
    }
    if (Array.isArray(element.children)) {
      return element.children.some(hasBlockOrImageNode);
    }
  }
  return false;
}

function hasBlockOrImageChild(children: React.ReactNode): boolean {
  return React.Children.toArray(children).some((child) => {
    if (!React.isValidElement(child)) return false;

    const childType = child.type;
    if (
      childType === MarkdownImage ||
      childType === "figure" ||
      childType === "figcaption" ||
      childType === "div" ||
      childType === "img"
    ) {
      return true;
    }

    const props = child.props as Record<string, unknown> | undefined;
    if (props) {
      if ("node" in props && hasBlockOrImageNode(props.node)) {
        return true;
      }
      if ("src" in props && props.src !== undefined) {
        return true;
      }
      if ("children" in props && props.children) {
        return hasBlockOrImageChild(props.children as React.ReactNode);
      }
    }

    return false;
  });
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="markdown-content text-white/80">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-10 mb-4 first:mt-0">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <div className="mt-10 mb-4 first:mt-0">
              <h2 className="text-2xl md:text-3xl font-bold text-primary italic tracking-tight mb-2">
                {children}
              </h2>
              <div className="h-1 w-12 bg-primary/40 rounded"></div>
            </div>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-8 mb-3 tracking-tight">
              {children}
            </h3>
          ),
          p: ({ node, children }) => {
            const hasBlockElement =
              hasBlockOrImageNode(node) || hasBlockOrImageChild(children);

            if (hasBlockElement) {
              return (
                <div className="text-white/70 leading-relaxed font-light mb-4 text-base md:text-lg">
                  {children}
                </div>
              );
            }

            return (
              <p className="text-white/70 leading-relaxed font-light mb-4 text-base md:text-lg">
                {children}
              </p>
            );
          },
          ul: ({ children }) => (
            <ul className="space-y-2 mb-6 ml-2 text-white/75">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-6 ml-2 text-white/75">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="leading-relaxed">{children}</span>
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-primary/60 bg-white/5 pl-4 py-2 my-4 rounded-r-lg italic text-white/70">
              {children}
            </blockquote>
          ),
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code
                  className="bg-white/10 text-emerald-400 px-1.5 py-0.5 rounded text-sm font-mono"
                  {...props}
                >
                  {children}
                </code>
              );
            }
            return (
              <pre className="bg-black/60 border border-white/10 rounded-xl p-4 my-6 overflow-x-auto text-emerald-400 font-mono text-sm leading-relaxed">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-white/10">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-white/5 px-4 py-3 text-sm text-white/70">
              {children}
            </td>
          ),
          img: ({ src, alt }) => {
            if (!src) return null;
            const imageSrc = typeof src === "string" ? src : "";
            if (!imageSrc) return null;

            return <MarkdownImage src={imageSrc} alt={alt} />;
          },
          hr: () => <hr className="my-8 border-white/10" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
