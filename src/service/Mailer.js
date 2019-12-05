import nodemailer from 'nodemailer';


export const createMailer = (host, port, username, password) => {
    return new Promise((resolve, reject) => {
        const transport = nodemailer.createTransport({
            secure: true,
            pool: true,
            host: host,
            port: port,
            auth: {
                user: username,
                pass: password
            }
        });

        const mailer = {
            sendEmail(to, subject, text, html) {
                const message = {
                    from: 'bo@scamtacaf.com',
                    to: to,
                    subject: subject,
                    text: text,
                    html: html
                };
                return transport.sendMail(message);
            },
            spamEmail(to, subject, test, html, count) {
                const promises = [];
                for (let i = 0; i < count; ++i) {
                    promises.push(this.sendEmail(to, subject, test, html));
                }
                return Promise.all(promises);
            }
        };


        transport.verify((error, success) => {
            if (error)
                return reject(error)
            return resolve({
                ok: true,
                mailer: mailer
            })
        })

    });


}