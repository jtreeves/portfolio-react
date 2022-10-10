function Feedback(props) {
    return (
        <div>
            <blockquote>{props.quote}</blockquote>

            <p className='attribution'>— {props.name} <i>({props.company})</i></p>
        </div>
    )
}

export default Feedback
