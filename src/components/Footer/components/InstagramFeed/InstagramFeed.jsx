import i1 from "../../../../images/instPhotos/i1.jpg";
import i2 from "../../../../images/instPhotos/i2.jpg";
import i3 from "../../../../images/instPhotos/i3.jpg";
import i4 from "../../../../images/instPhotos/i4.jpg";
import i5 from "../../../../images/instPhotos/i5.jpg";
import i6 from "../../../../images/instPhotos/i6.jpg";
import i7 from "../../../../images/instPhotos/i7.jpg";
import i8 from "../../../../images/instPhotos/i8.jpg";
import Grid from "@material-ui/core/Grid";

function InstagramFeed() {
  return (
    <>
      <h1 style={{ fontSize: "18px", color: "white" }}>Instagram Feed</h1>
      <Grid container>
        <Grid item xl={10} lg={10} md={10} m={10} xs={10}>
          <img src={i1} alt="inst" />
          <img src={i2} alt="inst" />
          <img src={i3} alt="inst" />
          <img src={i4} alt="inst" />
        </Grid>
        <Grid item xl={10} lg={10} md={10} m={10} xs={10}>
          <img src={i5} alt="inst" />
          <img src={i6} alt="inst" />
          <img src={i7} alt="inst" />
          <img src={i8} alt="inst" />
        </Grid>
      </Grid>
    </>
  );
}

export default InstagramFeed;
