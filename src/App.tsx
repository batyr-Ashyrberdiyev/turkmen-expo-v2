import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/layout";

function App() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-auto pb-[120px]">
        <Outlet />
      </div>

      <Footer />
    </main>
  );
}

export default App;
