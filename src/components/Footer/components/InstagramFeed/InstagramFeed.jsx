import classes from './InstagramFeed.module.css'


function InstagramFeed() {

    return (
        <div>
            <h1 className={classes.title}>Instagram Feed</h1>
            <div className={classes.imgContainer}>
                <img src='' alt="inst"/>
                <img src="" alt="inst"/>
                <img src="" alt="inst"/>
                <img src="" alt="inst"/>
                <img src="" alt="inst"/>
                <img src="" alt="inst"/>
            </div>
        </div>
    );
}

export default InstagramFeed;