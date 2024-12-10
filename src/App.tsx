import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components/layout';

import { ReactLenis } from '@studio-freight/react-lenis';

function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 3,
        easing: (t) => Math.min(1, 1.005 - Math.pow(4, -5 * t)),

        touchMultiplier: 2,
        infinite: false,
      }}>
      <main className="flex flex-col h-full wrapper overflow-y-hidden">
        <Header />

        <div className="flex-auto md:pb-[120px] pb-20">
          <Outlet />
        </div>

        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;
