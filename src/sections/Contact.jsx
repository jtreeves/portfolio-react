import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from '@emailjs/browser'
import contact from '../data/contact'
import capitalizeWord from '../utilities/capitalizeWord'
import '../styles/contact.css'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

function Contact(props) {
    const form = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await emailjs.sendForm(
            SERVICE_ID, 
            TEMPLATE_ID, 
            form.current, 
            PUBLIC_KEY
        )

        e.target.reset()
    }

    const formFields = contact.formFields.map((field, index) => {
        return (
            <article key={index}>
                <label>
                    {capitalizeWord(field.name)}
                </label>

                {field.type !== 'textarea' && <input 
                    type={field.type} 
                    name={field.name}
                    required 
                />}
                
                {field.type === 'textarea' && <textarea 
                    name={field.name}
                    required 
                />}
            </article>
        )
    })

    const socialMedia = contact.socials.map((social, index) => {
        return (
            <li key={index}>
                <a 
                    href={social.link} 
                    target='_blank' 
                    rel='noreferrer'
                >
                    <FontAwesomeIcon 
                        icon={social.icon} 
                        title={social.name}
                        size='2x' 
                    />
                </a>
            </li>
        )
    })

    return (
        <section id='contact' ref={props.domNode}>
            <h1>Contact</h1>

            <form ref={form} onSubmit={handleSubmit}>
                <p>
                    If you'd like collaborate on an interesting project or just chat code, feel free to hit me up:
                </p>

                {formFields}

                <button type='submit'>Submit</button>
            </form>

            <h2>Social Media</h2>

            <ul>
                {socialMedia}
            </ul>
        </section>
    )
}

export default Contact
