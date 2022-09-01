import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import sendEmail from '../services/sendEmail'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [success, setSuccess] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const successMessage = 'Congrats! Your message was sent successfully.'
    const errorMessage = 'Oh no! Something went wrong, and your message was not sent.'

    const handleChange = (event) => {
        event.preventDefault()
        const key = event.target.name
        const value = event.target.value
        setFormData({...formData, [key]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await sendEmail(formData, setSubmitted, setSuccess)
        setFormData({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <main id='contact'>
            <h1>Contact</h1>

            <p>
                If you'd like collaborate on an interesting project or just chat code, feel free to hit me up via <a href='mailto:jr@jacksonreeves.com'>email</a>.
            </p>

            <p>{success && submitted ? successMessage : errorMessage}</p>

            <Form onSubmit={handleSubmit} id='contact-form'>
                <Form.Group>
                    <Form.Label>Name</Form.Label>

                    <Form.Control 
                        type='text'
                        placeholder='First Last'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Email</Form.Label>

                    <Form.Control 
                        type='email'
                        placeholder='name@email.com'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Email</Form.Label>

                    <Form.Control 
                        as='textarea'
                        rows={3}
                        placeholder='Your message...'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button type='submit' form='contact-form'>
                    Submit
                </Button>
            </Form>
        </main>
    )
}

export default Contact
