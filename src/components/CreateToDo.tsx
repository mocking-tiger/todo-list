import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  // const setToDos = useSetRecoilState(toDoState);
  const [toDos, setToDos] = useRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    const addedTodo = [{ text: toDo, id: Date.now(), category }];
    console.log("add to do", toDo);
    setToDos((prev) => [...addedTodo, ...prev]);
    setValue("toDo", "");
    localStorage.setItem("toDos", JSON.stringify([...addedTodo, ...toDos]));
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "To Do를 작성해주세요.",
        })}
        placeholder="투두 작성"
      />
      <button>추가하기</button>
    </form>
  );
}
