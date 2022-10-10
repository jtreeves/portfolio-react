function Feedback(props) {
    return (
        <div>
            <blockquote>{props.quote}</blockquote>

            <span className='attribution'>— {props.name} <i>({props.company})</i></span>
        </div>
    )
}

export default Feedback
