import classes from './Newsletter.module.css'

function Newsletter() {

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Newsletter</h1>
            <p className={classes.info}>Stay update with our latest</p>
            <input></input>
        </div>
    );
}

export default Newsletter;