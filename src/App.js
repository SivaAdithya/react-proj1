import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Comp1} from './components/comp1';
function App() {
  return (
    <div class="container">
      <div classname="display-4 mx-auto">Responsive Paragrah Word Counter</div> 
      <Comp1 /> 
    </div>
  );
}

export default App;
