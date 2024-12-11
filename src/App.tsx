import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components/layout';
import { ReactLenis } from 'lenis/react';
import { useRef } from 'react';

function App() {
  const lenisRef = useRef(null);

  return (
    <ReactLenis root ref={lenisRef}>
      <main className="flex flex-col h-full">
        <Header />

        <div className="flex-auto h-full md:pb-[120px] pb-20">
          <Outlet />
        </div>

        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
