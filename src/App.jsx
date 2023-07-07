import './App.css';
import List from './List';
import InputWithLabel from './Search';
import Header from './Header';
import Container from '@mui/material/Container';
import { useEffect, useState, useRef } from 'react';

const logos = {
  astro: 'src/assets/astro-svgrepo-com.svg',
  bootstrap: 'src/assets/bootstrap-svgrepo-com.svg',
  chakraui: 'src/assets/chakraui.png',
  electron: 'src/assets/logo-electron-svgrepo-com.svg',
  framerMotion: 'src/assets/framer-motion.png',
  gatsby: 'src/assets/gatsbyjs-svgrepo-com.svg',
  jest: 'src/assets/jest-svgrepo-com.svg',
  mantineui: 'src/assets/mantineui.png',
  materialui: 'src/assets/material-ui-svgrepo-com.svg',
  next: 'src/assets/next-dot-js-svgrepo-com.svg',
  react1: 'src/assets/react.svg',
  react2: 'src/assets/react-1-logo-svgrepo-com.svg',
  reactHook: 'src/assets/react-hook-form.svg',
  reactIcons: 'src/assets/react-icons.svg',
  reactRouter: 'src/assets/react-router-svgrepo-com.svg',
  reactSpring: 'src/assets/react-spring-svgrepo-com.svg',
  reactTesting: 'src/assets/react-testing-library.webp',
  recharts: 'src/assets/recharts.png',
  redux: 'src/assets/redux-logo-svgrepo-com.svg',
  tailwind: 'src/assets/tailwindcss-icon-svgrepo-com.svg',
  tanstack: 'src/assets/tanstack-query.png',
  typescript: 'src/assets/typescript-logo-svgrepo-com.svg',
  vite: 'src/assets/vite-svgrepo-com.svg',
  vitest: 'src/assets/vitest.png',
};

const reactList = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    objectID: 0,
    image: logos.react1,
    description: 'A JavaScript library for building user interfaces',
    commands: [
      'npx create-react-app my-app',
      'npm init @vitejs/app my-react-app --template react',
    ],
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    objectID: 1,
    image: logos.redux,
    description: 'A Predictable State Container for JS Apps',
    commands: [
      'npm install redux',
      'npm install @reduxjs/toolkit',
      'npx degit reduxjs/redux-templates/packages/vite-template-redux my-app',
    ],
  },
  {
    title: 'React Router',
    url: 'https://reactrouter.com/',
    objectID: 2,
    image: logos.reactRouter,
    description: 'Declarative routing for React',
    commands: [
      'npm install react-router-dom',
      'npm install react-router-dom localforage match-sorter sort-by',
    ],
  },
  {
    title: 'Vite',
    url: 'https://vitejs.dev/',
    objectID: 3,
    image: logos.vite,
    description: 'Next Generation Frontend Tooling',
    commands: [
      'npm init vite@latest my-react-project --template react',
      'npm init vite@latest my-react-project --template react-ts',
    ],
  },
  {
    title: 'Next.js',
    url: 'https://nextjs.org/',
    objectID: 4,
    image: logos.next,
    description: 'The React Framework for Production',
    commands: [
      'npm install next@latest react@latest react-dom@latest',
      'npx create-next-app@latest my-app',
    ],
  },
  {
    title: 'React Native',
    url: 'https://reactnative.dev/',
    objectID: 5,
    image: logos.react2,
    description: 'A framework for building native apps with React',
    commands: [
      'npx create-expo-app AwesomeProject',
      'npx react-native@latest init AwesomeProject',
    ],
  },
  {
    title: 'Bootstrap for React',
    url: 'https://react-bootstrap.github.io/',
    objectID: 6,
    image: logos.bootstrap,
    description: 'The most popular front-end framework Rebuilt for React.',
    commands: ['npm install react-bootstrap bootstrap'],
  },
  {
    title: 'Material UI for React',
    url: 'https://material-ui.com/',
    objectID: 7,
    image: logos.materialui,
    description: 'React components for faster and easier web development.',
    commands: [
      'npm install @mui/material @emotion/react @emotion/styled',
      'npm install @mui/material @mui/styled-engine-sc styled-components',
      'npm install @fontsource/roboto',
      'npm install @mui/icons-material',
    ],
  },
  {
    title: 'Gatsby',
    url: 'https://www.gatsbyjs.com/',
    objectID: 8,
    image: logos.gatsby,
    description: 'Build blazing fast, modern apps and websites with React',
    commands: ['npm init gatsby'],
  },
  {
    title: 'React Tanstack Query',
    url: 'https://tanstack.com/query/latest/',
    objectID: 9,
    image: logos.tanstack,
    description: 'Hooks for fetching, caching and updating asynchronous data.',
    commands: ['npm i @tanstack/react-query'],
  },
  {
    title: 'React Hook Form',
    url: 'https://react-hook-form.com/',
    objectID: 10,
    image: logos.reactHook,
    description:
      'Performant, flexible and extensible forms with easy-to-use validation.',
    commands: ['npm install react-hook-form'],
  },
  {
    title: 'Astro',
    url: 'https://astro.build/',
    objectID: 11,
    image: logos.astro,
    description: 'Build faster websites with less client-side Javascript.',
    commands: ['npm install astro', 'npm create astro@latest'],
  },
  {
    title: 'React Testing Library',
    url: 'https://testing-library.com/docs/react-testing-library/intro/',
    objectID: 12,
    image: logos.reactTesting,
    description: 'Simple and complete React DOM testing utilities.',
    commands: ['npm install --save-dev @testing-library/react'],
  },
  {
    title: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    objectID: 13,
    image: logos.tailwind,
    description: 'A utility-first CSS framework for rapid UI development.',
    commands: [
      'npm install -D tailwindcss@latest postcss@latest autoprefixer@latest',
    ],
  },
  {
    title: 'Chakra UI',
    url: 'https://chakra-ui.com/',
    objectID: 14,
    image: logos.chakraui,
    description:
      'Simple, Modular and Accessible UI Components for your React Apps',
    commands: [
      'npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion',
    ],
  },
  {
    title: 'Mantine UI',
    url: 'https://mantine.dev/',
    objectID: 15,
    image: logos.mantineui,
    description: 'React components and hooks library with native dark theme.',
    commands: [
      'npm install @mantine/core @mantine/hooks @emotion/react',
      'yarn create vite mantine-vite --template react-',
    ],
  },
  {
    title: 'Framer Motion',
    url: 'https://www.framer.com/motion/',
    objectID: 16,
    image: logos.framerMotion,
    description: 'A production-ready motion library for React.',
    commands: ['npm install framer-motion'],
  },
  {
    title: 'React Spring',
    url: 'https://react-spring.dev/',
    objectID: 17,
    image: logos.reactSpring,
    description: 'A spring physics based React animation library.',
    commands: ['npm i @react-spring/web'],
  },
  {
    title: 'Recharts',
    url: 'https://recharts.org/en-US/',
    objectID: 18,
    image: logos.recharts,
    description: 'A composable charting library built on React components.',
    commands: ['npm install recharts'],
  },
  {
    title: 'Typescript',
    url: 'https://www.typescriptlang.org/',
    objectID: 19,
    image: logos.typescript,
    description: 'A typed superset of JavaScript that compiles to plain JS.',
    commands: ['npm install typescript --save-dev'],
  },
  {
    title: 'Jest',
    url: 'https://jestjs.io/',
    objectID: 20,
    image: logos.jest,
    description:
      'A delightful JavaScript Testing Framework with a focus on simplicity.',
    commands: ['npm install --save-dev jest'],
  },
  {
    title: 'Vitest',
    url: 'https://vitest.dev/',
    objectID: 21,
    image: logos.vitest,
    description: "A Vite-native unit test framework. It's fast!",
    commands: ['npm install vitest --save-dev'],
  },
  {
    title: 'Electron',
    url: 'https://www.electronjs.org/',
    objectID: 22,
    image: logos.electron,
    description:
      'Build cross-platform desktop apps with JavaScript, HTML, and CSS',
    commands: ['npm install electron'],
  },
  {
    title: 'React Icons',
    url: 'https://react-icons.github.io/react-icons/',
    objectID: 23,
    image: logos.reactIcons,
    description: 'Include popular icons in your React projects easily.',
    commands: ['npm install react-icons --save'],
  },
];

//* INFO: Custom Hook
const useStorageState = (key, initialState) => {
  const isMounted = useRef(false);
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      // console.log('firstRender');
      localStorage.setItem(key, value);
    }
  }, [value, key]);

  return [value, setValue];
};

function App() {
  const [searchTerm, setSearchTerm] = useStorageState('search', '');
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredResults = reactList.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container
      id="container"
      maxWidth="lg"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        marginTop: '2rem',
        marginBottom: '1rem',
        padding: '2rem',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(209, 213, 219, 0.3)',
      }}
    >
      <Header />
      <InputWithLabel
        id="search"
        label="Search"
        onInputChange={handleSearch}
        value={searchTerm}
      />
      <List list={filteredResults} />
    </Container>
  );
}

export default App;

export { List, InputWithLabel, Header, reactList, useStorageState };
