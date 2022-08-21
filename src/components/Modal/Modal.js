import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Overlay,
  Modal,
  Close,
  ButtonClose,
  Form,
  Input,
  ButtonUpdate,
  Title,
  UpdateLogo,
} from './Modal.styled';
import { useUpdateContactMutation } from 'redux/contactsAPI';

export const ModalView = ({ onClick, id, name, number }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: `${name}`,
      number: `${number}`,
    }
  });
  const [update] = useUpdateContactMutation();

  const handleSubmitUpdate = async data => {
    try {
      if (data) {
        await update({ body: data, id });
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onKeyUp = event => {
    if (event.code === 'Escape') {
      onClick();
    }
  };

  const handleBackDrop = event => {
    if (event.target === event.currentTarget) {
      onClick();
    }
  };

  return (
    <Overlay onClick={handleBackDrop}>
      <Modal>
        <Form
          autoComplete="off"
          onSubmit={handleSubmit(data => {
            handleSubmitUpdate(data);
          })}
        >
          <Title>Update your contact</Title>
          <UpdateLogo />
          <label htmlFor="name">
            <Input
              type="name"
              name="name"
              {...register('name', {
                register: true,
                required: 'This is required',
              })}
              placeholder="Name..."
            />
          </label>
          <label htmlFor="number">
            <Input
              type="number"
              name="number"
              {...register('number', {
                register: true,
                required: 'This is required',
              })}
              placeholder="Number..."
            />
          </label>
          <ButtonUpdate type="submit">UPDATE</ButtonUpdate>
          <ButtonClose type="button" onClick={onClick}>
            <Close width="30" />
          </ButtonClose>
        </Form>
      </Modal>
    </Overlay>
  );
};
