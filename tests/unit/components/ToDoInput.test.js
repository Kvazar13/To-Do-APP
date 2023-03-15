import { render, screen } from "@testing-library/vue";
import ToDoInput from "@/components/ToDoInput.vue";
import { mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it } from "vitest";

describe("ToDoInput", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ToDoInput);
  });

  it("displays input", function () {
    render(ToDoInput);
    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
  });

  it("input's submit works", async function () {
    const input = wrapper.find("input");
    input.setValue("New Test Value");
    expect(input.element.value).toBe("New Test Value");
    await wrapper.find("form").trigger("submit.prevent");
    expect(input.element.value).toBe("");
    expect(wrapper.emitted().todoCreated).toBeTruthy();
  });

  it("submit function doesn't allow empty input", async function () {
    const input = wrapper.find("input");
    input.setValue("");
    expect(wrapper.vm.submit()).toBe(true);
  });
});
