import styles from "./styles.module.css";
import { TiDelete } from "react-icons/ti";
function TodoItem({ activeCategory, setTodos, todos, todo }) {
  const toggleTodo = (id) => {
    setTodos({
      ...todos,
      [activeCategory]: todos[activeCategory].map((elem) =>
        elem.id === id ? { ...elem, completed: !elem.completed } : elem,
      ),
    });
  };
  const deleteTodo = (id) => {
    setTodos({
      ...todos,
      [activeCategory]: todos[activeCategory].filter((elem) => elem.id !== id),
    });
  };
  return (
    <div key={todo.id} className={styles.todoItems}>
      <div className={styles.todoItem}>
        <input
          className={styles.inputCheckBox}
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <p
          className={`${styles.todoText} ${todo.completed ? styles.completedTodo : ""}`}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)} className={styles.deleteBtn}>
        <TiDelete />
      </button>
    </div>
  );
}
export default TodoItem;
