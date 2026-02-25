export function Props3UserCard({ user }) {
  return (
    <section className="example-block">
      <h2>3) Object props</h2>
      <p>
        <strong>Name: {user.name}</strong>
      </p>
      <p>
        <strong>Role: {user.role}</strong>
      </p>
      <p>
        <strong>Email:{user.contacts.email}</strong>
      </p>
      <p>
        <strong>City: {user.contacts.city}</strong>
      </p>
    </section>
  );
}
