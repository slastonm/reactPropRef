export function Props1GreetingFromPropsObject(props) {
  // {title: "value"}
  return (
    <section className="example-block">
      <h2>1 Primitive props via props object</h2>
      <p>
        <strong>title:</strong>
        {props.title}
      </p>
      <p>
        <strong>name:</strong>
        {props.name}
      </p>
      <p>
        <strong>lessonNumber:</strong>
        {props.lessonNumber}
      </p>
      <p>
        <strong>isOnline:</strong>
        {props.isOnline ? "user online" : "user offline"}
      </p>
    </section>
  );
}
