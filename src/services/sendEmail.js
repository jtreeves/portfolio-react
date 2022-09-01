import emailjs from 'emailjs-com'

const PUBLIC_KEY = String(process.env.REACT_APP_EMAIL_PUBLIC_KEY)
const SERVICE_ID = String(process.env.REACT_APP_EMAIL_SERVICE_ID)
const TEMPLATE_ID = String(process.env.REACT_APP_EMAIL_TEMPLATE_ID)

async function sendEmail(
    formContents, 
    setSubmitted, 
    setSuccess
) {
    setSubmitted(true)

    try {
        await emailjs.sendForm(
            SERVICE_ID, 
            TEMPLATE_ID, 
            formContents, 
            PUBLIC_KEY
        )
        setSuccess(true)
    } catch (error) {
        setSuccess(false)
        console.error(error)
    }
}

export default sendEmail
