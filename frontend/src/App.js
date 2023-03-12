import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserForm from "./conponents/UserForm.js";
import DisplayForm from "./conponents/displayUserForm"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UserForm />} />
        <Route exact path="/userForm" element={<DisplayForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
