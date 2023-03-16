import DoneToDosList from "@/components/DoneToDosList.vue";
import { render, screen } from "@testing-library/vue";

describe("DoneToDosList", () => {
  it("Done To Dos list is displayed", () => {
    render(DoneToDosList, {
      props: {
        doneTodos: ["Completed task 1", "Completed task 2", "Completed task 3"],
      },
    });
    const doneTasks = screen.queryAllByTestId("done-to-do-task");
    doneTasks.forEach((doneTask) => {
      expect(doneTask).toBeInTheDocument();
    });
  });
});
