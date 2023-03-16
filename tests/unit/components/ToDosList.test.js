import ToDosList from "@/components/ToDosList.vue";
import { render, screen } from "@testing-library/vue";

describe("ToDosList", () => {
  it("tasks are visible", () => {
    render(ToDosList, {
      props: {
        todos: ["Task 1", "Task 2", "Task 3"],
      },
    });
    let tasks = screen.queryAllByTestId("to-do-task");
    tasks.forEach((task) => {
      expect(task).toBeInTheDocument();
    });
  });
});
