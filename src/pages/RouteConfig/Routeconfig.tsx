import { Route, Routes } from 'react-router-dom';
import GameSettings from '../GameSettings/Screen/Home';

const Routeconfig = () => {
  return (
    <Routes>
      <Route>
        <Route path="/game" element={<GameSettings />} />
      </Route>
    </Routes>
  );
};

export default Routeconfig;
