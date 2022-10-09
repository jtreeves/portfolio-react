import { faGithub, faLinkedin, faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'

const contact = {
    formFields: [
        {
            name: 'name',
            type: 'text'
        },
        {
            name: 'email',
            type: 'email'
        },
        {
            name: 'message',
            type: 'textarea'
        }
    ],
    socials: [
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/jacksonreeves/',
            icon: faLinkedin
        },
        {
            name: 'GitHub',
            link: 'https://github.com/jtreeves',
            icon: faGithub
        },
        {
            name: 'Twitter',
            link: 'https://twitter.com/JTReeves',
            icon: faTwitter
        },
        {
            name: 'Tumblr',
            link: 'https://jacksonreeves.tumblr.com',
            icon: faTumblr
        }
    ]
}

export default contact
