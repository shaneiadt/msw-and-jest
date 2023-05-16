import { render, screen } from "@testing-library/react";

import { getUsersException } from "../../../mocks/handlers";

import UserList from "../UserList";
import { initServer } from "../../../tools/msw/utils";
import { setupUserListHandlers } from "../msw/handlers";

describe("Component: UserList", () => {
  const server = initServer(setupUserListHandlers());

  it("displays returned users on successful fetch", async () => {
    render(<UserList />);

    const usersList = await screen.findAllByTestId(/user-id-\d+/);
    expect(usersList).toHaveLength(2);
    expect(screen.getByText("User Zero")).toBeInTheDocument();
    expect(screen.getByText("User One")).toBeInTheDocument();
  });

  it("displays error message when fetching tasks raises error", async () => {
    server.use(getUsersException);
    render(<UserList />);

    const error = await screen.findByText("Failed to fetch users");
    expect(error).toBeInTheDocument();

    const usersList = screen.queryAllByTestId(/user-id-\d+/);
    expect(usersList).toEqual([]);
  });
});
