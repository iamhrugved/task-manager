const sgMail = require('@sendgrid/mail')

// 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
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hrugved1997@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendExitEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hrugved1997@gmail.com',
        subject: 'What can we do for you?',
        text: `Hey, ${name}! Sorry if we disappointed you. Please let us know what we can do more to keep you as a customer. I hope to see you sometime soon!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendExitEmail
}