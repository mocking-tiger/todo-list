import CreateToDo from "./CreateToDo";
import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";

export default function ToDoList() {
  const toDos = useRecoilValue(toDoState); // useState처럼 value,setValue를 한번에 불러올 수 있음

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}
