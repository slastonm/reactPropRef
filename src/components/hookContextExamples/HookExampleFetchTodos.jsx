import useFetchTodos from "../../hooks/useFetchTodos";
function HookExampleFetchTodos() {
  const { todos, isLoading, error } = useFetchTodos(2);
  return (
    <div className="example-card">
      <h3>HookExample</h3>
      <p>My hook fetch</p>
      {isLoading && <p>Loading todos</p>}
      {error && <p>Erro: {error}</p>}
      {!isLoading && !error && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HookExampleFetchTodos;
