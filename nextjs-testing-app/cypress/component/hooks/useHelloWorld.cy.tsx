import { useHelloWorld } from "react-utils";

const TestComponent: React.FC = () => {
  useHelloWorld();

  return <div>playground</div>;
};

describe("useHelloWorld.cy.tsx", () => {
  it("playground", () => {
    // Stub the console.log function
    cy.stub(console, "log").as("consoleLog");

    // Mount the component
    cy.mount(<TestComponent />);

    // Assert that console.log was called with "Hello World 2"
    cy.get("@consoleLog").should("have.been.calledWith", "Hello World!");
  });
});
