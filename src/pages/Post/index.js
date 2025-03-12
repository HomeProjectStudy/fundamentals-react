import { useParams, useLocation } from 'react-router-dom';


export function Post() {
  const params = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
