import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactController,
  updateContactContoller,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const contactsRouter = Router();

contactsRouter.get('/contacts', ctrlWrapper(getAllContactsController));
contactsRouter.get('/contacts/:contactId', ctrlWrapper(getContactController));
contactsRouter.post('/contacts', ctrlWrapper(createContactController));
contactsRouter.patch(
  '/contacts/:contactId',
  ctrlWrapper(updateContactContoller),
);
contactsRouter.delete(
  '/contacts/:contactId',
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
