import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const param = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{param.productId}</p>
      <ul>
        <li>
          <Link to=".." relative="path">
            Back here relative path
          </Link>
        </li>
        <li>
          <Link to=".." relative="route">
            Back here relative route
          </Link>
        </li>
      </ul>
    </>
  );
}

export default ProductDetails;
