
// react-router-domのインポートを追加
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Todo } from "./Todo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Todo">Todo</Link>
        <br />

        <Routes>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/Todo" element={<Todo />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
