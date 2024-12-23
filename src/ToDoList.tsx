// import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

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

const Div = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  display: block;
`;

// 스타일드 컴포넌트 영역 끝

interface IFormData {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export default function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onValid = (data: any) => {
    //console.log(data);
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit(onValid)}>
        <div>
          <Input
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                message: "이메일은 네이버 계정만 가능",
              },
            })}
            placeholder="이메일"
          />
          <span>{errors.email?.message}</span>
        </div>
        <div>
          <Input
            {...register("firstName", { required: "성을 입력해주세요." })}
            placeholder="성"
          />
          <span>{errors.firstName?.message}</span>
        </div>
        <div>
          <Input
            {...register("lastName", { required: "이름을 입력해주세요." })}
            placeholder="이름"
          />
          <span>{errors.lastName?.message}</span>
        </div>
        <div>
          <Input
            {...register("password", { required: "비밀번호를 입력해주세요." })}
            placeholder="비밀번호"
          />
          <span>{errors.password?.message}</span>
        </div>
        <div>
          <Input
            {...register("passwordRepeat", {
              required: "비밀번호를 한번 더 입력해주세요.",
            })}
            placeholder="비밀번호 재입력"
          />
          <span>{errors.passwordRepeat?.message}</span>
        </div>
        <button>추가하기</button>
      </Form>
    </Div>
  );
}
