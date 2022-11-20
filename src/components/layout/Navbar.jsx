import{
    Link,
  } from 'react-router-dom';
  

function Navbar() {
    return <>
        <div>
         <nav>
          <Link to='/'>Home</Link> &nbsp;
          <Link to='/Favorites'>Favorites</Link>
          </nav>
        </div>
    </>;
}

export default Navbar;
