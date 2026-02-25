export function Props4TechList({ items }) {
  return (
    <section className="example-block">
      <h2>4 Array props</h2>
      {/* {items} */}
      <ul className="tech-list">
        {/* <li></li> */}

        {items.map((item) => (
          <li key={item.id}>
            <h5>{item.name}</h5>
            <span>{item.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
