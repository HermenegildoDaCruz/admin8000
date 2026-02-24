import Link from "next/link"


export default function LinkBtn({children, href}){
    return (
        <Link href={href} className="btn btn-primary">
            {children}
        </Link>
    )
}