import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('products');
    }
  return (
    <>
      <h1>Home Page</h1>
      {/* <p>
        Go to <a href="/products">products list page</a>
      </p> */}
      <p>
        Go to <Link to="products">products list page</Link>
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}
