import { Router } from 'express';
import {
  createContactController,
  getAllContactsController,
  getContactController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getAllContactsController));
contactsRouter.get('/contacts/:contactId', ctrlWrapper(getContactController));
contactsRouter.post('/contacts', ctrlWrapper(createContactController));

export default contactsRouter;
