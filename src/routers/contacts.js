import { Router } from 'express';
import {
  getAllContactsController,
  getContactController,
} from '../controllers/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', getAllContactsController);

contactsRouter.get('/contacts/:contactId', getContactController);

export default contactsRouter;
