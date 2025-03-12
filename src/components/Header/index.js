import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

export default function Header() {
  const {theme, handleToogleTheme} = useTheme();
  const navigate = useNavigate();

  function handleNavigate(){
    navigate('/posts');
  }
  return (
    <Container>
      <h1>JStack Blog</h1>
      <button
        type="button"
        onClick={handleToogleTheme}
      >
        {theme === 'dark' ? '🌙' : '🌞'}
        <button
          style={{ color: '#FFF', marginLeft: 8}}
          onClick={handleNavigate}
        >
          Navegar
        </button>
      </button>
    </Container>
  );
}

// export default class Header extends Component {

//   render(){
//     const { onToggleTheme, selectedTheme } = this.props;
//     return(
//       <ThemeContextClass.Consumer>
//         {({theme, handleToogleTheme}) => (
//           <Container>
//             <h1>JStack Blog</h1>
//             <button
//               type="button"
//               onClick={handleToogleTheme}
//             >
//               {theme === 'dark' ? '🌙' : '🌞'}
//             </button>
//           </Container>
//         )}
//       </ThemeContextClass.Consumer>

//     );
//   }
// }
