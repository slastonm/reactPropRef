import { useEffect, useState } from "react";

function useFetchTodos(limit = 3) {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controler = new AbortController();
    const loadTodos = async () => {
      setIsloading(true);
      setError("");
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`,
          { signal: controler.signal },
        );
        if (!response.ok) {
          throw new Error(`Request failed custom error ${response.status}`);
        }

        const data = await response.json();
        setTodos(data);
      } catch (error) {
        setError("Fail load data");
      } finally {
        setIsloading(false);
      }
    };

    loadTodos();
  }, [limit]);
  return { todos, isLoading, error };
}

export default useFetchTodos;
