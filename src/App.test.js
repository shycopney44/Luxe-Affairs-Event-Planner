import { render, screen } from "@testing-library/react";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

test("renders the site header", () => {
  render(
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  );

  // Adjust this text to match something that ALWAYS appears in your Header
  const headerElement = screen.getByText(/home/i);
  expect(headerElement).toBeInTheDocument();
});
