import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import SinglePlayer from './components/Single_Player';
import TwoPlayer from './components/Two_Player';
import Main from './components/Main';
import SelectFirstMove from './components/SelectFirstMove';
import ComputerMovesFirst from './components/ComputerMovesFirst';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Main/></>
    },
    {
      path: '/ComputerMovesFirst',
      element: <><ComputerMovesFirst/></>
    },
    {
      path: '/SelectFirstMove',
      element: <><SelectFirstMove/></>
    },
    {
      path: '/SinglePlayer',
      element: <><SinglePlayer /></>
    },
    {
      path: '/TwoPlayer',
      element: <><TwoPlayer /></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
