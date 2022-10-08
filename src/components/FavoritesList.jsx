function FavoritesList(props) {
    const list = props.favorites.map((favorite, index) => {
        return (
            <li key={index}>
                <i>{favorite.title}</i> by {favorite.creator}
            </li>
        )
    })

    return (
        <ul>
            {list}
        </ul>
    )
}

export default FavoritesList
