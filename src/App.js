import './App.css';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
function App() {
  return (
    <div className="App">
     <p id="my-element" data-tooltip-content="hello world" >
  Tooltip
</p>
<Tooltip
  place={"bottom"}
  border="true"
  effect='solid'
  anchorId="my-element" 
  animation={"FlipXUpIn"}
  />
    </div>
  );
}

export default App;
