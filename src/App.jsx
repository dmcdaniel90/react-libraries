import './App.css';
import List from './List';
import Search from './Search';
import Header from './Header';
import Container from '@mui/material/Container';
import React, { useState } from 'react';

const reactList = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'React Router',
    url: 'https://reactrouter.com/',
    author: 'Michael Jackson, Ryan Florence',
    num_comments: 1,
    points: 3,
    objectID: 2,
  },
  {
    title: 'React Native',
    url: 'https://reactnative.dev/',
    author: 'Facebook',
    num_comments: 4,
    points: 5,
    objectID: 3,
  },
  {
    title: 'React Bootstrap',
    url: 'https://react-bootstrap.github.io/',
    author: null,
    num_comments: 2,
    points: 4,
    objectID: 4,
  },
  {
    title: 'Material UI for React',
    url: 'https://material-ui.com/',
    author: null,
    num_comments: 1,
    points: 3,
    objectID: 5,
  },
  {
    title: 'Gatsby',
    url: 'https://www.gatsbyjs.com/',
    author: null,
    num_comments: 2,
    points: 5,
    objectID: 6,
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredResults = reactList.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        maxWidth: 'lg',
        minWidth: '800px',
        border: '1px solid #000',
        background: '#fff',
      }}
    >
      <Header />
      <Search onSearch={handleSearch} searchTerm={searchTerm} />
      <List list={filteredResults} />
    </Container>
  );
}

export default App;
