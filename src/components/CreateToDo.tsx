import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    console.log("add to do", toDo);
    setToDos((prev) => [
      { text: toDo, id: Date.now(), category: "TODO" },
      ...prev,
    ]);
    setValue("toDo", "");
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
