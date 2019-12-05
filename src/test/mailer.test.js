import { createMailer } from '../service/Mailer'
import { username, password } from './secret';
import { doesNotReject } from 'assert';

const serverAddr = 'smtp.gmail.com';
const port = 465;
let mailer;


test('connect to mailer', () => {
    return createMailer(serverAddr, port, username, password)
        .then(res => {
            mailer = res.mailer;
            return expect(res.ok).toBe(true);
        }).catch(err => {
            console.log(err)
        })
})

test('send an email', () => {
    return mailer.sendEmail('amaslouis@gmail.com', 'salut mon choupi', 't chou', '')
        .then(res => {
            expect(res.accepted.length).toBe(1);
        }).catch(err => {
            console.log(err);
        });
});


test('spam email 5 tiems', (done) => {
    return mailer.spamEmail('l.fevreur@gmail.com', 'salut BoT', 't lom le plus chou', '', 5)
        .then(res => {
            expect(res[0].accepted.length).toBe(1);
            done();
        }).catch(err => {
            console.log(err);
        });
});