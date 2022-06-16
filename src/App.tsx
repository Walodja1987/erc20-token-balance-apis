import './App.css';
import WalletConnectButton from './WalletConnectButton';
import BalanceChecker from './BalanceChecker';

function App() {
  return (
    <div className="App">
      <h1>Connect wallet</h1>
      <WalletConnectButton />
      <h1>Balance Checker lib</h1>
      <BalanceChecker />
    </div>
  );
}

export default App;
