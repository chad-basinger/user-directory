import logo from './logo.svg';
import './App.css';
import SlideShow from './Components/SlideShow'
import NoteCard from './Components/NoteCard'

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='home'>Home</h1>
      </header>
      <SlideShow/>
    </div>
  );
}

export default App;
