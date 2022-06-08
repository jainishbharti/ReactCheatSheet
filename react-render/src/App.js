 import './App.css';
import { ChildA } from './components/Context/ContextChild';
// import { ParentFour } from './components/Incorrect Optimization/ParentFour';
// import { ParentThree } from './components/Incorrect Optimization/ParentThree';
// import { ChildOne } from './components/Optimization/ChildOne';
// import { GrandParent } from './components/Optimization/GrandParent';
// import { ParentOne } from './components/Optimization/ParentOne';
// import { ParentTwo } from './components/Optimization/ParentTwo';
// import { Parent } from './components/Parent And Child/Parent';
// import { ArrayUseState } from './components/Immutable State/ArrayUseState';
// import { ObjectUseState } from './components/Immutable State/ObjectUseState';
// import { UseReducer } from './components/UseReducer/UseReducer';
//  import { UseState } from "./components/UseState/UseState"
import {ContextParent} from "./components/Context/ContextParent"

function App() {
  return (
    <div className="App">
      {/* <UseState />  */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <GrandParent /> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
