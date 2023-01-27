import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Documents from "./pages/Documents";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddDocument from "./pages/AddDocument";
import EditDocument from "./pages/EditDocument";
import Register from "./components/Register";
import ViewDocument from "./pages/ViewDocument";
import UpdateProfile from "./pages/UpdateProfile";
import DocumentListByType from "./pages/DocumentListByType";
import DocumentListBySubject from "./pages/DocumentListBySubject";
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import IntroL from "./pages/IntroL";
import Search from "./pages/Search";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/introduce" element={<IntroL />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UpdateProfile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/add" element={<AddDocument />} />
          <Route path="/documents/edit/:id" element={<EditDocument />} />
          <Route path="/documents/view/:id" element={<ViewDocument />} />
          <Route
            path="/documents/bytype/:type"
            element={<DocumentListByType />}
          />
          <Route
            path="/documents/bysubject/:subject"
            element={<DocumentListBySubject />}
          />
          <Route path="/documents/search/:search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
