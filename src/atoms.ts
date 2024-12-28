import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

export const categoryState = atom({
  key: "category",
  default: "TODO",
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    // return toDos.length;
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});
