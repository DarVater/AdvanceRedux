import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";

const LazyPostContainer = React.lazy(() => import("./components/PostContainer"))

function App() {
  return (
    <div className="App">
        <LazyPostContainer/>
    </div>
  );
}

export default App;
