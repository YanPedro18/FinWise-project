import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router'; // Corrija o caminho se necessário

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
