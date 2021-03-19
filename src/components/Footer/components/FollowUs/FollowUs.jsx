import classes from './FollowUs.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function FollowUs() {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Folow Us</h1>
            <p className={classes.info}>Let us be social</p>
            <div>
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <YouTubeIcon />
            </div>
        </div>
    );
}

export default FollowUs;