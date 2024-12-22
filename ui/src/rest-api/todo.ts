import { TodoType } from "../common/type";
import jsonData from "../mock/todo.json";

export const getMockTodo = () => {
  const todo: TodoType[] = jsonData;
  return todo;
};
