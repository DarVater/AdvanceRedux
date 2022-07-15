import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";

function App() {
    const dispatch = useAppDispatch()
    const {error,isLoading,users} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch((fetchUsers()))
    }, [])

    if (isLoading) {
        return <h1>Идет загрузка</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }
  return (
    <div className="App">
        {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
