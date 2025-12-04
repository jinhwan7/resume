interface MarkdownProps {
  children: string;
  className?: string;
}

// 간단한 마크다운 렌더러 (줄바꿈 처리)
export function Markdown({ children, className }: MarkdownProps) {
  const renderWithLineBreaks = (text: string) => {
    return text.split('\n').map((line, index, array) => (
      <span key={index}>
        {line}
        {index < array.length - 1 && <br />}
      </span>
    ));
  };

  return <div className={className}>{renderWithLineBreaks(children)}</div>;
}
