import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

export default function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "To Do를 작성해주세요.",
          })}
          placeholder="투두 작성"
        />
        <button>추가하기</button>
      </form>
    </div>
  );
}

// interface ISpanMessage {
//   $isMessage?: string;
// }

// interface IFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   passwordRepeat: string;
//   extraError: string;
// }

// const Div = styled.div`
//   width: 400px;
//   margin: 0 auto;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px 20px;
//   display: block;
// `;

// const Span = styled.span<ISpanMessage>`
//   margin-top: 5px;
//   display: ${(props) => (props.$isMessage === "" ? "none" : "block")};
// `;

// // 스타일드 컴포넌트 영역 끝

// export default function ToDoList() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setError,
//   } = useForm<IFormData>();

//   const onValid = (data: IFormData) => {
//     //console.log(data);
//     if (data.password !== data.passwordRepeat) {
//       setError(
//         "passwordRepeat",
//         { message: "비밀번호가 일치하지 않습니다." },
//         { shouldFocus: true }
//       );
//     }
//     // setError("extraError", { message: "서버에러" });
//   };
//   return (
//     <Div>
//       <Form onSubmit={handleSubmit(onValid)}>
//         <div>
//           <Input
//             type="email"
//             {...register("email", {
//               required: "이메일을 입력해주세요.",
//               pattern: {
//                 value: /^[A-Za-z0-9@.]+$/,
//                 message: "이메일은 영문대소문자, 숫자만 가능합니다.",
//               },
//             })}
//             placeholder="이메일"
//           />
//           <Span $isMessage={errors?.email?.message || ""}>
//             {errors?.email?.message}
//           </Span>
//         </div>
//         <div>
//           <Input
//             {...register("firstName", { required: "성을 입력해주세요." })}
//             placeholder="성"
//           />
//           <Span $isMessage={errors?.firstName?.message || ""}>
//             {errors?.firstName?.message}
//           </Span>
//         </div>
//         <div>
//           <Input
//             {...register("lastName", {
//               required: "이름을 입력해주세요.",
//               validate: {
//                 noCriminal: (value) =>
//                   value.includes("범죄자")
//                     ? "범죄자는 가입할 수 없습니다."
//                     : true,
//               },
//             })}
//             placeholder="이름"
//           />
//           <Span $isMessage={errors?.lastName?.message || ""}>
//             {errors?.lastName?.message}
//           </Span>
//         </div>
//         <div>
//           <Input
//             {...register("password", {
//               required: "비밀번호를 입력해주세요.",
//               minLength: {
//                 value: 6,
//                 message: "비밀번호는 여섯글자 이상 입력해주세요.",
//               },
//             })}
//             placeholder="비밀번호"
//           />
//           <Span $isMessage={errors?.password?.message || ""}>
//             {errors?.password?.message}
//           </Span>
//         </div>
//         <div>
//           <Input
//             {...register("passwordRepeat", {
//               required: "비밀번호를 한번 더 입력해주세요.",
//             })}
//             placeholder="비밀번호 재입력"
//           />
//           <Span $isMessage={errors?.passwordRepeat?.message || ""}>
//             {errors?.passwordRepeat?.message}
//           </Span>
//         </div>
//         <button>추가하기</button>
//         <Span>{errors?.extraError?.message}</Span>
//       </Form>
//     </Div>
//   );
// }
