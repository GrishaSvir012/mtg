import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import NavBarPrivate from './NavBar/NavBarPrivate';
import NavBarPublic from './NavBar/NavBarPublic';
import NavInvisibl from './NavBar/NavInvisibl';
import SignUpForm from './signUpForm/SignUpForm';
import SignInForm from './SignInForm/SignInForm';
import PersAcc from './PersAcc';
import Card from './Card';

export default function App() {
  return (
    <div>
      <NavBarPrivate />
      <NavInvisibl />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/persAcc" element={<PersAcc />} />
        <Route path="/card" element={<Card />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
      </Routes>
    </div>
  );
}
