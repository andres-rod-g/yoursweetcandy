import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from './Redux/actions/candies';
import { getTagsAction } from './Redux/actions/tags';
import NavBar from './components/NavBar';
import Content from './components/main_page/Content.js';
import { Routes, Route, Link } from 'react-router-dom';

import Form from './components/form/form.js';
import { Fade } from 'react-awesome-reveal';
import SearchComp from './components/search/search';

const MyRoutes = ({setSearch}) => {
  return (
    <Fade>
      <Routes>
        <Route path='/' element={<Content setSearch={setSearch}/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </Fade>
  )
}

const App = () => {
  const dispatch = useDispatch()
  
  const [search, setSearch] = useState(null)

  useEffect( () => { 
    dispatch( getPosts() )
    dispatch( getTagsAction() )
  }, [dispatch] )
  
  return (
    <div className="App">
      <NavBar setSearch={setSearch} search={search}/>
      {
        search 
        ? search.length > 0
          ? <SearchComp />
          : <MyRoutes setSearch={setSearch}/>
        : <MyRoutes setSearch={setSearch}/>
      }
    </div>
  );
}

export default App;
