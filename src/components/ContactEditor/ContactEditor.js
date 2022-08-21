import { useAddContactsMutation, useGetContactsQuery } from 'redux/contactsAPI';
import { useForm } from 'react-hook-form';
import {
  Contaciner,
  Input,
  Form,
  NewUser,
  Button,
  Title,
} from './ContactEditor.styled';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const ContactEditor = () => {
  const { data = [] } = useGetContactsQuery();
  const contacts = data;
  const [addContact] = useAddContactsMutation();
  const { register, handleSubmit, reset } = useForm();
  const notify = () =>
    toast.warning('This contact alredy exist!', {
      theme: 'colored',
    });

  const handleSubmitAdd = async data => {
    const normalized = data.name.toLowerCase();
    if (contacts.find(contact => contact.name.toLowerCase() === normalized)) {
      notify();
    } else {
      try {
        if (data) {
          await addContact({ name: data.name, number: data.number });
          reset();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Contaciner>
      <ToastContainer theme="colored" />
      <Title>Add new contact</Title>
      <NewUser width="80" />
      <Form
        autoComplete="off"
        onSubmit={handleSubmit(data => {
          handleSubmitAdd(data);
        })}
      >
        <label htmlFor="name">
          <Input
            type="text"
            name="name"
            {...register('name', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Name..."
          />
        </label>
        <label>
          <Input
            htmlFor="number"
            type="tel"
            name="number"
            {...register('number', {
              register: true,
              required: 'This is required',
            })}
            placeholder="Number.."
          />
        </label>
        <Button type="submit">ADD CONTACT</Button>
      </Form>
    </Contaciner>
  );
};
