import { Route, Routes as RoutesDom, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';
import { NotFound } from './pages/NotFound';
import { Post } from './pages/Post';
import { useTransition, animated } from 'react-spring';

export function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from:{
      opacity:0,
      // transform: 'translateY(50px)',
      // position: 'absolute'
    },
    enter:{
      opacity:1,
      // transform: 'translateY(0)',
      // position: 'absolute'
    },
    leave:{
      opacity:0,
      // transform: 'translateY(50px)',
      // position: 'absolute'
    }
  });


  return transitions((props,item) => (
    <animated.div style={props} >
      <RoutesDom location={item}>
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
          path="/posts/:id"
          Component={Post}
        />

        <Route path="*" Component={NotFound}/>
      </RoutesDom>
    </animated.div>
  ));
}
