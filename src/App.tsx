import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BooksList } from './components/BookList';
import { NavBar } from './components/NavBar';
import { AddBook } from './components/AddBook';
import { HomePage } from './components/HomePage';
import { EditUser } from './components/EditUser/EditUser';
import { FindBook } from './components/FindBook';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="books" element={<BooksList />} />
        <Route path="add" element={<AddBook />} />
        <Route path="edit/:id" element={<EditUser />} />
        <Route path="search" element={<FindBook />} />
      </Routes>
    </BrowserRouter>
  );
};
