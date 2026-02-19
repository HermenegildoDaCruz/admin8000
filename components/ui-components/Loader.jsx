import classes from "./ui-components.module.css"

export default function Loader(){
    return (
        <div className={classes.loading_box}>
            <span className={classes.loader}></span>
            <span>Carregando...</span>
        </div>
    )
}