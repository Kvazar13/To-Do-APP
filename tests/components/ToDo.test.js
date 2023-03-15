import { render, screen } from "@testing-library/vue";
import ToDo from "@/components/ToDo.vue";

describe("ToDo", () => {
  it("displays app name", function () {
    render(ToDo);
    const appName = screen.getByText("Listify");
    expect(appName).toBeInTheDocument();
  });

  it("displays input", function () {
    render(ToDo);
    const input = screen.getByRole("textbox");
    expect(input).toBeVisible();
  });
});
