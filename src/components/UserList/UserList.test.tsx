import { render, screen } from "@testing-library/react";

import { httpClient } from "../../api/http-client";

import UserList from "./UserList";

jest.mock("../../api/http-client");

const fetchUsers = jest.mocked(httpClient.get);

describe("UserList", () => {
  it("displays returned users on successful fetch", async () => {
    fetchUsers.mockResolvedValue({
      data: [
        {
          id: 0,
          name: "User Zero",
          username: "U0",
          email: "user.zero@users.com",
          website: "https://www.fakeusers.com/user/0",
        },
        {
          id: 1,
          name: "User One",
          username: "U1",
          email: "user.one@users.com",
          website: "https://www.fakeusers.com/user/1",
        },
      ],
    });

    render(<UserList />);

    const displayedTasks = await screen.findAllByTestId(/user-id-\d+/);
    expect(displayedTasks).toHaveLength(2);
    expect(screen.getByText("User Zero")).toBeInTheDocument();
    expect(screen.getByText("User One")).toBeInTheDocument();
  });

  it("displays error message when fetching users raises error", async () => {
    fetchUsers.mockRejectedValue(new Error("broken"));

    render(<UserList />);

    const errorDisplay = await screen.findByText("Failed to fetch users");
    expect(errorDisplay).toBeInTheDocument();

    const displayedTasks = screen.queryAllByTestId(/user-id-\d+/);
    expect(displayedTasks).toEqual([]);
  });
});
