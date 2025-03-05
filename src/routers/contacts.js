import { Router } from 'express';
import {
  getAllContactsController,
  getContactController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getAllContactsController));
contactsRouter.get('/contacts/:contactId', ctrlWrapper(getContactController));

export default contactsRouter;
