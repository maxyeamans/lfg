import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import NoPage from "./pages/NoPage";
import Search from "./pages/Search";
import Login from "./pages/Login";
import NewGroup from "./pages/NewGroup";
import Register from "./pages/Register";
import UpdateGroup from "./pages/UpdateGroup";
import Footer from "./components/Footer";
import MyPage from "./pages/MyPage";
import Messages from "./pages/Messages";


const App = () => (
  <Router>
    <div>
      {/* <Nav isLoggedIn={true} /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/newgroup" component={NewGroup} />
<<<<<<< HEAD
=======

>>>>>>> 113ce02fcaad00a6882a757cea532b3579219a80

        <Route exact path="/mypage" component={MyPage} />

        <Route exact path="/messages" component={Messages}/>

<<<<<<< HEAD
=======

>>>>>>> 113ce02fcaad00a6882a757cea532b3579219a80
        <Route path="/updategroup/:id" component={UpdateGroup} />
        <Route component={NoPage} />
      </Switch>
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
