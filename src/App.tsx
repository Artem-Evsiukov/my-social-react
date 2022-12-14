import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import SideBar from './components/SideBar/SideBar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Music from "./components/Music/Music";
import Settings from './components/Settings/Settings';




function App(props: any) {
    return (
        <div className="app-wrapper">
            <Header/>
            <SideBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/Profile/*"
                           element={<Profile profilePage={props.state.profilePage}
                                             addPost={props.addPost}
                                             updateNewPostText={ props.updateNewPostText}
                           />}/>
                    <Route path="/Dialogs/*"
                           element={<Dialogs state={props.state.messagesPage}/>}/>
                    <Route path="/News/*" element={<News/>}/>
                    <Route path="/Music/*" element={<Music/>}/>
                    <Route path="/Settings/*" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
