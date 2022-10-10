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
        <div className='favorites'>
            <h2>{heading}</h2>
            <ul>{list}</ul>
        </div>
    )
}

export default FavoritesList
