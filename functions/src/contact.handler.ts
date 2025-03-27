import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import contactService from './contact.service';
import {ContactMessage} from './contact-message';
import {Request, Response} from 'express';

async function handleContact(request: Request, response: Response) {
  const contactMessage = request.body.data as ContactMessage;

  try {
    await contactService.sendContactMessage(contactMessage);
    response.status(200).send({ data: null }).end();
  } catch (error) {
    functions.logger.error(JSON.stringify(error));
    response.status(500).send({ data: 'Cannot send email!' }).end();
  }
}

export const contact = functions.https.onRequest(
  { secrets: [ 'SENDGRID_KEY', 'CONTACT_EMAIL' ] },
  express()
    .use(cors({ origin: true }))
    .post('/', handleContact));
