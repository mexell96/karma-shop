import Grid from "@material-ui/core/Grid";

const Product = ({ name, img, price, prevPrice }) => {
  return (
    <div>
      <Grid item xl={4} lg={4} md={4} m={4} xs={10}>
        <img src={img} alt={name} />
        <div>
          <div>{name}</div>
          <div style={{ display: "flex" }}>
            <span>{price}</span>
            &nbsp;
            <span>{prevPrice}</span>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Product;
