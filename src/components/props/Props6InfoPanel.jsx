export function Props6InfoPanel({ title, footer, children }) {
  return (
    <section className="example-block">
      <h2>6) Children props</h2>
      <div className="panel-content">{children}</div>
      <p className="muted">{title}</p>

      <p className="footer-note">{footer}</p>
    </section>
  );
}
