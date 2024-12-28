import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector } from "../atoms";
import { FormEvent } from "react";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: FormEvent<HTMLSelectElement>) => {
    // console.log(event.currentTarget.value);
    setCategory(event.currentTarget.value as Categories);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TODO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </form>
      <CreateToDo />
      {toDos?.map((todo) => (
        <ToDo key={todo.id} {...todo} />
      ))}
    </div>
  );
}
