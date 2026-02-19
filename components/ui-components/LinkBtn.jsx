import Link from "next/link"
import classes from "./ui-components.module.css"

export default function LinkBtn({children, href}){
    return (
        <Link href={href} className={classes.btn_primary}>
            {children}
        </Link>
    )
}