import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Blockquote',
    description: 'The <blockquote> tag specifies a section that is quoted from another source.'
  },
  {
    id: 'p2',
    price: 5,
    title: 'Blockquote',
    description: 'The <blockquote> tag specifies a section that is quoted from another source.'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => <ProductItem
        key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
        />)}
      </ul>
    </section>
  );
};

export default Products;
