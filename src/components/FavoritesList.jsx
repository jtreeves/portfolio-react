import capitalizeWord from '../utilities/capitalizeWord'

function FavoritesList(props) {
    const heading = `Favorite ${capitalizeWord(props.type)}`
    const list = props.favorites.map((favorite, index) => {
        return (
            <li key={index}>
                <i>{favorite.title}</i> by {favorite.creator}
            </li>
        )
    })

    return (
        <ul>
            <h2>{heading}</h2>

            {list}
        </ul>
    )
}

export default FavoritesList
