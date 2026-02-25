import { useState } from "react";
import "./App.css";
import { Props5ActionButton } from "./components/props/Props5ActionButton";
import { Props6InfoPanel } from "./components/props/Props6InfoPanel";
import { Props1GreetingFromPropsObject } from "./components/props/Props1GreetingFromPropsObject";
import { Props2GreetingDestructured } from "./components/props/Props2GreetingDestructured";
import { Props7TextBlock } from "./components/props/Props7TextBlock";
import { Props4TechList } from "./components/props/Props4TechList";
import { Props3UserCard } from "./components/props/Props3UserCard";

const student = {
  name: "Olena",
  role: "React Student",
  contacts: {
    email: "olena@example.com",
    city: "Lviv",
  },
};

const techStack = [
  { id: 1, name: "HTML", level: "basic" }, //0
  { id: 2, name: "CSS", level: "basic" }, //1
  { id: 3, name: "JavaScript", level: "intermediate" },
  { id: 4, name: "React", level: "learning" },
];
function App() {
  const [actionLog, setActionLog] = useState("user not login");
  const handlAction = (payload) => {
    setActionLog(`Callbck from button user login ${payload.action}`);
  };

  return (
    <>
      <main className="app">
        <h1>React Props:</h1>
        <Props1GreetingFromPropsObject
          title="Hello"
          name="Olena"
          lessonNumber={1}
          isOnline={true}
        ></Props1GreetingFromPropsObject>
        <Props2GreetingDestructured
          title="New hello"
          name="Den"
          lessonNumber={2}
          isOnline={false}
        ></Props2GreetingDestructured>
        <Props3UserCard user={student}></Props3UserCard>
        <Props4TechList items={techStack}></Props4TechList>
        <Props5ActionButton
          label="login"
          payload={{ action: "change user status" }}
          onAction={handlAction}
        ></Props5ActionButton>
        <hr />
        {actionLog}
        <hr />
        {/* error tyt */}
        <Props6InfoPanel title="hello component" footer="component footer">
          <ul>
            <li>Hello 1</li>
            <li>Hello 2</li>
            <li>Hello 3</li>
          </ul>
        </Props6InfoPanel>
        <Props7TextBlock></Props7TextBlock>
        <Props7TextBlock title="Hello" text="hello text"></Props7TextBlock>
        <Props7TextBlock title={1} text={true}></Props7TextBlock>
      </main>
    </>
  );
}

export default App;
