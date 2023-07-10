import './App.css';
import HomeScreen from './screen/HomeScreen';
import ServerListScreen from './screen/ServerListScreen';
import GaleryScreen from './screen/GaleryScreen';
import ShopScreen from './screen/ShopScreen';
import AdminScreen from './Admin/screen/AdminScreen';
import { BrowserRouter, Route, Routes, RedirectFunction, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import LoginScreen from './Admin/screen/LoginScreen';
import Servers from './Admin/screen/ServersScreen';
import Shop from './Admin/screen/ShopScreen';
import Galery from './Admin/screen/GaleryScreen';



function App() {

  const [uid, setUid] = useState<string | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUid(user.uid);
        // ...
        console.log("uid", uid)
      } else {
        // User is signed out
        // ...
        console.log("user is logged out")
      }
    });

  }, [])

  return (
    <BrowserRouter>
      <Routes>

        <Route path="*" element={<HomeScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="servers" element={<ServerListScreen />} />
        <Route path="galery" element={<GaleryScreen />} />
        <Route path="shop" element={<ShopScreen />} />
        {uid ?
          null : <Route path="login" element={<LoginScreen />} />}

        {uid &&
          <>
            <Route path="admin" element={<AdminScreen />} />
            <Route path="admin/servers" element={<Servers />} />
            <Route path="admin/galery" element={<Galery />} />
            <Route path="admin/shop" element={<Shop />} />
          </>
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
