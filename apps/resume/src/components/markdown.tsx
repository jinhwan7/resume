import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

interface MarkdownProps {
  children: string;
  className?: string;
}

// 마크다운 컴포넌트 커스터마이징
const markdownComponents: Partial<Components> = {
  // 단락은 div로 렌더링하여 기본 마진 제거
  p: ({ children }) => <div className="inline">{children}</div>,
  // 강조(bold) 스타일 유지
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  // 이탤릭 스타일
  em: ({ children }) => <em className="italic">{children}</em>,
  // 링크 스타일
  a: ({ href, children }) => (
    <a
      href={href as string}
      className="text-blue-600 hover:underline dark:text-blue-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),
  // 코드 인라인
  code: ({ children }) => (
    <code className="rounded bg-gray-100 px-1 py-0.5 text-sm dark:bg-gray-800">
      {children}
    </code>
  ),
  // 순서 없는 리스트
  ul: ({ children }) => <ul className="list-none">{children}</ul>,
  // 리스트 항목 (- 기호 유지)
  li: ({ children }) => <li className="before:content-['-_']">{children}</li>,
  // 줄바꿈 처리
  br: () => <br />,
};

// 마크다운 렌더러
// 지원 문법: **볼드**, *이탤릭*, [링크](url), `코드`, 줄바꿈(\n) 등
export function Markdown({ children, className }: MarkdownProps) {
  // JSON의 \n을 실제 줄바꿈으로 변환 후 마크다운으로 처리
  const processedText = children.replace(/\n/g, "  \n");

  return (
    <div className={className}>
      <ReactMarkdown components={markdownComponents}>{processedText}</ReactMarkdown>
    </div>
  );
}
