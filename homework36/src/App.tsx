
import './App.css'
import emojis from './emojis/Emojis'
import ReactionsCounters from './components/ReactionsCounters'

function App() {
  return (
    <div className="App">
      <ReactionsCounters emojis = {emojis}/>
    </div>
  )
}

export default App;
