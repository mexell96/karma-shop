import classes from './Newsletter.module.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Newsletter() {

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Newsletter</h1>
            <p className={classes.info}>Stay update with our latest</p>
            <div className={classes.inputContainer}>
                <input className={classes.input} placeholder='Enter Email'></input>
                <button><ArrowRightAltIcon /></button>
            </div>
        </div>
    );
}

export default Newsletter;