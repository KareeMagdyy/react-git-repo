import { useState } from "react";
import GetRepos from "./components/GetRepos";
import ReposInfo from "./components/ReposInfo";

const App = () => {
  const [reposData, setReposData] = useState([]);
  return (
    <main className='repos-container'>
      <GetRepos setReposData={setReposData} />
      <ReposInfo data={reposData} />
    </main>
  );
};

export default App;
