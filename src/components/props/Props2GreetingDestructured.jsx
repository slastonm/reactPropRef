export function Props2GreetingDestructured({
  title,
  name,
  lessonNumber,
  isOnline,
}) {
  return (
    <section className="example-block">
      <h2>2) Primitive props via destructuring</h2>
      <p>
        <strong>title:</strong>
        {title}
      </p>
      <p>
        <strong>name:</strong>
        {name}
      </p>
      <p>
        <strong>lessonNumber:</strong>
        {lessonNumber}
      </p>
      <p>
        <strong>isOnline:</strong>
        {isOnline ? "User online" : " user offline"}
      </p>
    </section>
  );
}
