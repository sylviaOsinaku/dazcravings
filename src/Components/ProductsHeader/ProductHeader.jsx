import classes from './ProductHeader.module.css';

const ProductHeader = () => {
  return (
    <div className={classes.product_header}>
      <h1>
        Our <span>Store</span>
      </h1>
      <form action="#">
        <input type="search" name="" id="" placeholder="item..." />
      </form>
    </div>
  );
};
export default ProductHeader;
