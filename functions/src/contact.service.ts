import {MailService} from '@sendgrid/mail/src/mail';
import * as functions from 'firebase-functions';
import {ClientResponse} from '@sendgrid/client/src/response';
import {ContactMessage} from './contact-message';
import * as sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_KEY!);

console.log(process.env.SENDGRID_KEY!);

const contactEmail = process.env.CONTACT_EMAIL;

export class ContactService {
  constructor(private readonly mailService: MailService = sendgrid) {
  }

  public sendContactMessage(message: ContactMessage): Promise<[ClientResponse, Record<string, unknown>]> {
    functions.logger.info('Send contact message');

    const text = `From: ${message.contactName}<${message.email}>\n\n${message.message}`;

    return this.mailService.send({
      to: contactEmail,
      from: `${message.contactName}<noreply@mytimesheet-app.com>`,
      subject: 'Sapphire CMS - Contact',
      text,
    });
  }
}

export default new ContactService();
