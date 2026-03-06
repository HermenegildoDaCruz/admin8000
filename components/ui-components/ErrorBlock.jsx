export default function ErrorBlock({message}){
    return (
        <div className="error-block">
            <span>
                <ion-icon name="alert-outline" className="icon"></ion-icon>
            </span>
            <span>
                {message}
            </span>
        </div>
    )
}