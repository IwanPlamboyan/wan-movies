import './App.css';
import './css/style.css';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Movies from './components/Movies';

function App() {
  return (
    <div className="main">
      <div className="bg-intro">
        <NavigationBar />
        <Welcome />
      </div>

      <Movies />
    </div>
  );
}

export default App;
