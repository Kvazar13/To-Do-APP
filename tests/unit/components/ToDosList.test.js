import ToDosList from "@/components/ToDosList.vue";
import { render, screen } from "@testing-library/vue";
import { mount } from "@vue/test-utils";

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

  it("task done event", async () => {
    const component = mount(ToDosList, {
      props: {
        todos: ["Task 1", "Task 2", "Task 3"],
        emits: ["taskDoneEv"],
      },
    });
    let tasks = component.findAll("[data-testid='to-do-task']");
    for (const task of tasks) {
      task.trigger("click");
    }
    expect(component.emitted().taskDoneEv).toEqual([[0], [1], [2]]);
  });
});
