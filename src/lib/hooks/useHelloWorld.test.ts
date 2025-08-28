import { renderHook } from "@testing-library/react";
import { useHelloWorld } from "./useHelloWorld";

describe("useHelloWorld", () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    // Mock console.log to capture output
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleSpy.mockRestore();
  });

  it("should log 'Hello World' on mount", () => {
    // Render the hook
    renderHook(() => useHelloWorld());

    // Verify that console.log was called with "Hello World"
    expect(consoleSpy).toHaveBeenCalledWith("Hello World");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("should only log 'Hello World' once when re-rendered", () => {
    // Render the hook and re-render it
    const { rerender } = renderHook(() => useHelloWorld());
    
    // Re-render the hook
    rerender();

    // Verify that console.log was still only called once
    expect(consoleSpy).toHaveBeenCalledWith("Hello World");
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
