import React from "react";
import "./App.css";
import UserForm from "./components/customHooks/UserForm";
// import CounterOne from "./components/customHooks/CounterOne";
// import CounterTwo from "./components/customHooks/CounterTwo";
// import DocTitle1 from "./components/customHooks/DocTitle1";
// import DocTitle2 from "./components/customHooks/DocTitle2";
// import ParentComponent from "./components/callbackHook/ParentComponent";
// import Counter from "./components/memoHook/Counter";
// import ClassTimer from "./components/refHook/ClassTimer";
// import FocusInput from "./components/refHook/FocusInput";
// import HookTimer from "./components/refHook/HookTimer";

function Application() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      {/* <FocusInput /> */}
      {/* <ClassTimer />
      <HookTimer /> */}
      {/* <DocTitle1 />
      <DocTitle2 /> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      <UserForm />
    </div>
  );
}

export default Application;
