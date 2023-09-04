import { render } from "@testing-library/react";
import App from "./App";
import { DataProvider } from "./contexts/DataContext";

describe("App component", () => {
    it("renders the App component", () => {
        const { container } = render(
            <DataProvider>
                <App />
            </DataProvider>
        );

        expect(container).toBeInTheDocument();
    });
});