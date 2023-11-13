import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllTodos } from "../services/actions/todosActions";

const Todos = () => {
    const { isLoading, todos, error } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    return (
        <div>
            <h2>Todos App</h2>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{ error.message }</h2>}
            <section>
                {todos && todos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Todos