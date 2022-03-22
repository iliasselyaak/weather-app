import Forecast from "./components/Forecast";
import Suggestion from"./components/Suggestion"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path='/' element={<Forecast/>} />
          <Route path='suggestion' element={<Suggestion/>} />
        </Routes>
      </Router>
    </div>
  );

}


export default App;
