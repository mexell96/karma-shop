import classes from './Newsletter.module.css'

function Newsletter() {

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Newsletter</h1>
            <p className={classes.info}>Stay update with our latest</p>
            <div className={classes.inputContainer}>
                <input className={classes.input}></input>
                <button>→</button>
            </div>
        </div>
    );
}

export default Newsletter;