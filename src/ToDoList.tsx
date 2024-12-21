import { FormEvent, useState } from "react";

export default function ToDoList() {
  const [toDo, setToDo] = useState("");

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToDo(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(toDo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} placeholder="할 일 작성" />
        <button>추가하기</button>
      </form>
    </div>
  );
}
