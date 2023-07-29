
import './App.css';
import Banking from './components/Banking';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Payment from './components/Payment';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Payment />
      <Banking />
    </>
  );
}

export default App;
