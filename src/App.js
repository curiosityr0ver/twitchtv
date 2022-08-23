import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StreamCreate from './COMPONENTS/streams/StreamCreate';
import StreamDelete from './COMPONENTS/streams/StreamDelete';
import StreamEdit from './COMPONENTS/streams/StreamEdit';
import StreamList from './COMPONENTS/streams/StreamList';
import StreamShow from './COMPONENTS/streams/StreamShow';
import Header from './COMPONENTS/streams/Header';



const App = () => {


  return (
    <div>
      <Header className='ui container' />
      <Link to="streams/create" className="item">
        Streamy
      </Link>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/streams/create" exact element={<StreamCreate />} />
          <Route path="/streams/delete" exact element={<StreamDelete />} />
          <Route path="/streams/edit" exact element={<StreamEdit />} />
          <Route path="/streams/show" exact element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

