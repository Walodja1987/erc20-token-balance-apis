import './App.css';
import WalletConnectButton from './WalletConnectButton';
import ETHBalanceChecker from './ETHBalanceChecker';

function App() {
  return (
    <div className="App">
      <h1></h1>
      <WalletConnectButton />
      <h1>ETH Balance Checker lib</h1>
      <ETHBalanceChecker />
    </div>
  );
}

export default App;
