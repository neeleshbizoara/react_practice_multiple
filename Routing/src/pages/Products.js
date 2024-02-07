import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];
export default function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((item) => (
          <Link to={item.id} className="">{item.title}</Link>
        ))}
      </ul>
    </div>
  );
}
