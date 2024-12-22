import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

// export default function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("");

//   const onChange = (e: FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setToDo(value);
//     setToDoError("");
//   };

//   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("투두는 열글자 이상");
//     }
//     console.log("submit");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input value={toDo} onChange={onChange} placeholder="할 일 작성" />
//         <button>추가하기</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

export default function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="이메일" />
        <input {...register("firstName")} placeholder="성" />
        <input {...register("lastName")} placeholder="이름" />
        <input {...register("username")} placeholder="닉네임" />
        <input {...register("password")} placeholder="비밀번호" />
        <input {...register("passwordRepeat")} placeholder="비밀번호 재입력" />
        <button>추가하기</button>
      </form>
    </div>
  );
}
