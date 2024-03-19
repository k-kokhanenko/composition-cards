export const CardImage = ({url = "https://bulma.io/images/placeholders/1280x960.png", placeholder= "Описание изображения" }) => {
    return (
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={url} alt={placeholder}/>
            </figure>
        </div>
    )
}
