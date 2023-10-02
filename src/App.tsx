import { useState } from "react";
import "./App.css";

import AboutMe from "./components/AboutMe";

function App() {
  const [tab, setTab] = useState<number>(0);

  const tabClass = (tabIdx: number): string => {
    return `tab ${
      tab === tabIdx ? "active text-green-600 border-b-2 border-green-600" : ""
    }`;
  };

  const pageComponent: JSX.Element[] = [<AboutMe />];

  return (
    <>
      <div className="container">
        <div className="m-6">
          <h1>
            <b>Jacob Strader</b>
          </h1>

          <div className="text-sm font-medium text-center text-gray-500">
            <ul className="flex flex-wrap -mb-px justify-center">
              <li className="mr-2">
                <a href="#" className={tabClass(0)} onClick={() => setTab(0)}>
                  About Me
                </a>
              </li>
              <li className="mr-2">
                <a href="#" className={tabClass(1)} onClick={() => setTab(1)}>
                  Projects
                </a>
              </li>
              <li className="mr-2">
                <a href="#" className={tabClass(2)} onClick={() => setTab(2)}>
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        {pageComponent[tab]}
      </div>
    </>
  );
}

export default App;
