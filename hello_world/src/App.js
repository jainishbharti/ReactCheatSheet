import "./App.css";
import ComponentC from "./components/ComponentC";
// import ClickCounter2 from "./components/ClickCounter2";
// import HoverCounter2 from "./components/HoverCounter2";
// import User from "./components/User";
// import Counter2 from "./components/Counter2";
import { UserProvider } from "./components/userContext";
// import ClickCounter from "./components/ClickCounter";
// import HoverCounter from "./components/HoverCounter";
// import ErrorBoundaries from "./components/ErrorBoundaries";
// import Hero from "./components/Hero";
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import FocusInput from './components/FocusInput';
// import ParentComp from './components/ParentComp';
// import Refsdemo from './components/RefsDemo';
// import {Greet} from "./components/Greet"
// import Welcome from "./components/Welcome";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import Message from "./components/Message";
// import Hello from "./components/Hello";
// import Counter from "./components/Counter";
// import List from "./components/List";
// import StyleSheets from "./components/Stylesheets";
// import Inline from "./components/Inline";
// import Form from "./components/Form";
// import LifecycleA from "./components/LifecycleA";
// import Table from "./components/Table";
// import './components/appStyles.css';
// import styles from './components/appStyles.module.css';
// import FragmentDemo from './components/FragmentDemo';

function App() {
  return (
    <div className="App">
      <UserProvider value="Tyrantt">
        <ComponentC />
      </UserProvider>
      {/* <Counter2>
      {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter2>
      <Counter2>
        {(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
      </Counter2> */}
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => isLoggedIn ? 'Tyrantt' : 'Guest'}/> */}
      {/* <ClickCounter name="Jainish"/>
      <HoverCounter name="Tyrantt"/> */}
      {/* <ErrorBoundaries>
        <Hero heroName="Batman" />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <Hero heroName="Superman" />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <Hero heroName="Joker" />
      </ErrorBoundaries> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <Refsdemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheets primary= {false}/> */}
      {/* <List /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name= "Jainish" heroName = "Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name= "Abhishek" heroName="Fatman">
        <button>Action</button>
      </Greet>
      <Greet name= "Shivam" heroName = "Padman"/>
      <Welcome name= "Jainish" heroName = "Batman" />
      <Welcome name= "Abhishek" heroName = "Fatman" /> */}
      {/* <Welcome name= "Shivam" heroName = "Padman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
