import { render, screen } from "@testing-library/vue";
import ToDo from "@/components/ToDo.vue";
import { mount } from "@vue/test-utils";

describe("ToDo", () => {
  it("displays app name", function () {
    render(ToDo);
    const appName = screen.getByText("Listify");
    expect(appName).toBeInTheDocument();
  });

  it("task done method works", async () => {
    const tasks = ["Task 1", "Task 2", "Task 3"];
    const wrapper = mount(ToDo);
    const input = wrapper.find("input");
    for (const task of tasks) {
      input.setValue(task);
      await wrapper.find("form").trigger("submit.prevent");
    }
    expect(wrapper.vm.todos).toEqual(["Task 1", "Task 2", "Task 3"]);
    const index = tasks.indexOf("Task 2");
    wrapper.vm.taskDone(index);
    expect(wrapper.vm.todos).not.toContain("Task 2");
    expect(wrapper.vm.doneTodos).toEqual(["Task 2"]);
  });
});
