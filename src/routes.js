import { Route, Routes as RoutesDom } from 'react-router-dom';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { NotFound } from './pages/NotFound';

export function Routes() {
  return (
    <RoutesDom>
      <Route
        exact
        path="/"
        Component={Home}
      />
      <Route
        path="/posts"
        Component={Posts}
      />
      <Route
        path="/posts/id"
        Component={Posts}
      />

      <Route path="*" Component={NotFound}/>
    </RoutesDom>

  );
}
