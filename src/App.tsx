import React from 'react';
import StickyFooter from './components/Footer/Footer';

import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <main>
        <SignIn />
      </main>
      <footer>
        <StickyFooter />
      </footer>
    </div>
  );
}

export default App;
