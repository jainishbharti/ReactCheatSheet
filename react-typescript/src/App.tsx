import "./App.css";
// import { CustomButton } from "./components/html/Button";
// import { Private } from "./components/auth/Private";
// import { Profile } from "./components/auth/Profile";
// import Counter from "./components/class/Counter";
// import { Box } from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import { User } from "./components/context/User";
// import { UserContextProvider } from "./components/context/UserContext";
// import { List } from "./components/generics/List";
// import { RandomNumber } from "./components/restriction/RandomNumber";
// import { Toast } from "./components/templateLiterals/Toast";
// import { Counter } from "./components/state/Counter";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Greet } from "./components/Greet";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";
// import { Status } from "./components/Status";
// import { Button } from "./components/Button";
// import { Container } from "./components/Container";
// import { Input } from "./components/Input";
// import { LoggedIn } from "./components/state/LoggedIn";
// import { User } from "./components/state/User";
import {Text} from "./components/polymorphic/Text"
function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "Wayne",
  //   },
  //   {
  //     first: "Clark",
  //     last: "Kent",
  //   },
  //   {
  //     first: "Princess",
  //     last: "Diana",
  //   },
  // ];

  return (
    <div className="App">
      {/* <Greet name="Jainish" isLoggedIn={false} /> */}
      {/* <Person name={personName}/>
      <PersonList names = {nameList}/> */}
      {/* <Status status="success" />
      <Heading>Heading Content</Heading>
      <Oscar>
        <Heading>Oscar Award goes to Leonardo Dicaprio!</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event, id) => {
        console.log("Button clicked", event, id)
      }} />
      <Input value="" handleChange={(event => console.log(event))}/>
      <Container styles= {{ border: '1px solid black', padding: '1rem' }}/> */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <Counter message="The count value is " /> */}
      {/* <Private isLoggedIn component={Profile}/> */}
      {/* <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List items={nameList} onClick={(item) => console.log(item)} /> */}
      {/* <RandomNumber value={10} isPositive/> */}
      {/* <Toast position="center"/> */}
      {/* <CustomButton
        variant="primary"
        onClick={() => console.log("Button clicked!")}
      >
        Primary Button
      </CustomButton> */}
      <Text as='h2'  size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor="label" size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
