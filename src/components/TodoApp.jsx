import { useState } from "react";
import styles from "./styles.module.css";

function TodoApp() {
  const category = ["job", "home", "hobbie"];
  const [activeCategory, setActiveCategory] = useState("job");
  const [todos, setTodos] = useState({
    job: [],
    home: [],
    hobbie: [],
  });

  return (
    <div className={styles.todo}>
      <div className={styles["todo-container"]}>
        <div className={styles.todos}>
          {category.map((elem) => (
            <button className={styles["todo-btn"]}>{elem}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TodoApp;
