import React, { useState } from "react";
import { useConstructor } from "../../src/lib/hooks/useConstructor";

describe("useConstructor", () => {
  it("calls the callback exactly once per mount, even after re-renders", () => {
    const initSpy = cy.spy().as("initSpy");

    const TestComponent: React.FC = () => {
      const [count, setCount] = useState(0);
      useConstructor(() => {
        initSpy();
      });

      return (
        <div>
          <span data-cy="count">{count}</span>
          <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        </div>
      );
    };

    // Turn off StrictMode as it will double‑invoke mount logic
    cy.mount(<TestComponent />, { strict: false });

    cy.get("@initSpy").should("have.been.calledOnce");

    // Cause several re-renders
    cy.contains("Increment").click();
    cy.contains("Increment").click();
    cy.contains("Increment").click();
    cy.get("[data-cy='count']").should("have.text", "3");

    cy.get("@initSpy").should("have.been.calledOnce");
  });

  it("runs again after an unmount/remount (new instance)", () => {
    const initSpy = cy.spy().as("initSpy");

    const Wrapper: React.FC = () => {
      const [show, setShow] = useState(true);
      return (
        <div>
          <button onClick={() => setShow((s) => !s)}>Toggle</button>
          {show && <Child />}
        </div>
      );
    };

    const Child: React.FC = () => {
      useConstructor(() => {
        initSpy();
      });
      return <div data-cy="child">Child</div>;
    };

    // Turn off StrictMode as it will double‑invoke mount logic
    cy.mount(<Wrapper />, { strict: false });

    cy.get("@initSpy").should("have.been.calledOnce");

    cy.contains("Toggle").click(); // unmount
    cy.get("[data-cy='child']").should("not.exist");

    cy.contains("Toggle").click(); // remount
    cy.get("[data-cy='child']").should("exist");

    cy.get("@initSpy").should("have.callCount", 2);
  });
});
