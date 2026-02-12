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
  const handleCategoryClick = (elem) => {
    setActiveCategory(elem);
  };
  return (
    <div className={styles.todo}>
      <div className={styles["todo-container"]}>
        <div className={styles.todos}>
          {category.map((elem) => (
            <button
              key={elem}
              onClick={() => handleCategoryClick(elem)}
              className={`${styles["todo-btn"]} ${elem === activeCategory ? styles.active : ""}`}
            >
              {elem}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default TodoApp;
