import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

function Contact() {
    const form = useRef()

    const sendEmail = async (e) => {
        e.preventDefault()
    
        await emailjs.sendForm(
            SERVICE_ID, 
            TEMPLATE_ID, 
            form.current, 
            PUBLIC_KEY
        )

        e.target.reset()
    }

    return (
        <section id='contact'>
            <h1>Contact</h1>

            <p>
                If you'd like collaborate on an interesting project or just chat code, feel free to hit me up via <a href='mailto:jr@jacksonreeves.com'>email</a>.
            </p>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type='text' name='name' required />
                <label>Email</label>
                <input type='email' name='email' required />
                <label>Message</label>
                <textarea name='message' required />
                <input type='submit' value='Send' />
            </form>

            <article>
                Reach out to me on social media!
                <ul>
                    <li>
                        <a 
                            href='https://www.linkedin.com/in/jacksonreeves/' 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            LinkedIn
                        </a>
                    </li>
                    
                    <li>
                        <a 
                            href='https://github.com/jtreeves' 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            GitHub
                        </a>
                    </li>
                    
                    <li>
                        <a 
                            href='https://twitter.com/JTReeves' 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            Twitter
                        </a>
                    </li>
                    
                    <li>
                        <a 
                            href='https://jacksonreeves.tumblr.com' 
                            target='_blank' 
                            rel='noreferrer'
                        >
                            Tumblr
                        </a>
                    </li>
                </ul>
            </article>
        </section>
    )
}

export default Contact
