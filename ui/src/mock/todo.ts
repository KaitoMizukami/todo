import { TodoType } from "../common/type";
import jsonData from "./todo.json";

export const getTodo = () => {
  const todo: TodoType[] = jsonData;
  return todo;
};
