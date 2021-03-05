import logo from './logo.svg';
import './App.css';
import SlideShow from './Components/SlideShow'
import NoteCard from './Components/NoteCard'

function App() {
  return (
    <div className="App">
      <header>
        <h3 className='home'>Home</h3>
      </header>
      <SlideShow/>
    </div>
  );
}

export default App;
