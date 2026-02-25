export type PropsTextBlock = {
  title?: string;
  text?: string;
};

export function Props7TextBlock({
  title = "default title value",
  text = "any text value",
}) {
  return (
    <section className="example-block">
      <h2>7) Typed props in modern React (TypeScript)</h2>
      <p>
        <strong>title:</strong>
        {title}
      </p>
      <p>
        <strong>text:</strong>
        {text}
      </p>
    </section>
  );
}
