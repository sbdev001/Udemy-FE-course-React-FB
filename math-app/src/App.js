import logo from './logo.svg';
import { Mafs, Coordinates } from "mafs"
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import './App.css';

function App() {
  return (
    <div className="App">
      <MathJaxContext>
              <h2>Basic MathJax example with Latex</h2>
              <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
        </MathJaxContext>
      <Mafs>
      <Coordinates.Cartesian />
    </Mafs>
    </div>
    
  );
}

export default App;
