import styled from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import "./common/reset.css";
import Root from './pages/root';
import Test from './pages/test';


const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:"test/:id",
        element:<Test />
      },
    ]
  }
  // errorElement:<NotFound />,
])


const App = () => {

  return (
    <Container>
      <RouterProvider router = {router} />
    </Container>
  );
};

const Container = styled.div`
  position:relative;
  width:100%;
  min-height: 100vh;
`;


export default App;
