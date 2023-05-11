import { render, screen } from "@testing-library/react";

import { mswServer } from "../../mocks/server";
import { getUsersException } from "../../mocks/handlers";

import UserList from "./UserList";

describe("Component: UserList", () => {
  it("displays returned users on successful fetch", async () => {
    render(<UserList />);

    const usersList = await screen.findAllByTestId(/user-id-\d+/);
    expect(usersList).toHaveLength(2);
    expect(screen.getByText("User Zero")).toBeInTheDocument();
    expect(screen.getByText("User One")).toBeInTheDocument();
  });

  it("displays error message when fetching tasks raises error", async () => {
    mswServer.use(getUsersException);
    render(<UserList />);

    const error = await screen.findByText("Failed to fetch users");
    expect(error).toBeInTheDocument();

    const usersList = screen.queryAllByTestId(/user-id-\d+/);
    expect(usersList).toEqual([]);
  });
});
