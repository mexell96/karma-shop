import classes from './InstagramFeed.module.css'
import i1 from '../../../../images/instPhotos/i1.jpg'
import i2 from '../../../../images/instPhotos/i2.jpg'
import i3 from '../../../../images/instPhotos/i3.jpg'
import i4 from '../../../../images/instPhotos/i4.jpg'
import i5 from '../../../../images/instPhotos/i5.jpg'
import i6 from '../../../../images/instPhotos/i6.jpg'
import i7 from '../../../../images/instPhotos/i7.jpg'
import i8 from '../../../../images/instPhotos/i8.jpg'

function InstagramFeed() {

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Instagram Feed</h1>
            <div className={classes.imgContainer}>
                <img src={i1} alt="inst"/>
                <img src={i2} alt="inst"/>
                <img src={i3} alt="inst"/>
                <img src={i4} alt="inst"/>
                <img src={i5} alt="inst"/>
                <img src={i6} alt="inst"/>
                <img src={i7} alt="inst"/>
                <img src={i8} alt="inst"/>
            </div>
        </div>
    );
}

export default InstagramFeed;