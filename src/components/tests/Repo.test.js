import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Repo from "../Repo";


describe("Repo tests", () => {
  it("should not blow up", () => {
    render(<Repo />);
  });

  it("should pass with default params", () => {
    render(<Repo />);
    const heading = screen.getByText(/Org Name: Flexera/i);
    expect(heading).toBeInTheDocument();
  });

  it("should pass with custom params", () => {
    render(
      <Repo
        imageUrl="https://avatars.githubusercontent.com/u/9919?v=4"
        name="Flexera"
        orgName="Flexera"
        repoName="Flexera Web"
        description="Flexera Web"
        marked={false}
        setMarked={[]}
        id={2}
      />
    );
    const heading = screen.getByText(/Org Name: Flexera/i);
    expect(heading).toBeInTheDocument();
  });

  it("should check the marked", () => {
    render(
      <Repo
        imageUrl="https://avatars.githubusercontent.com/u/9919?v=4"
        name="Flexera"
        orgName="Flexera"
        repoName="Flexera Web"
        description="Flexera Web"
        marked
        setMarked={[]}
        id={2}
      />
    );
    const checkbox = screen.getByTestId('lp-checkbox')
    expect(checkbox.checked).toBe(true)
  });

  it("should NOT check the marked", () => {
    render(
      <Repo
        imageUrl="https://avatars.githubusercontent.com/u/9919?v=4"
        name="Flexera"
        orgName="Flexera"
        repoName="Flexera Web"
        description="Flexera Web"
        marked={false}
        setMarked={[]}
        id={2}
      />
    );
    const checkbox = screen.getByTestId('lp-checkbox')
    expect(checkbox.checked).toBe(false)
  });

  it("should check the checkbox on clicking", () => {
    render(
      <Repo
        imageUrl="https://avatars.githubusercontent.com/u/9919?v=4"
        name="Flexera"
        orgName="Flexera"
        repoName="Flexera Web"
        description="Flexera Web"
        marked={false}
        setMarked={jest.fn()}
        id={2}
      />
    );

    const checkbox = screen.getByTestId('lp-checkbox')
    fireEvent.change(checkbox, { target: {checked: true} })
    
    expect(checkbox.checked).toBe(true)
  });
});
