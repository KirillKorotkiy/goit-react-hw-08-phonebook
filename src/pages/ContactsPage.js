import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { useState } from 'react';
import { ModalView } from 'components/Modal/Modal';

const ContactsPage = () => {
  const [toggle, setToggle] = useState(false);
  const [id, setid] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const toggleModal = (id, name, number) => {
    setToggle(prevModal => !prevModal);
    setid(id);
    setName(name);
    setNumber(number);
  };

  return (
    <>
      <ContactEditor />
      <ContactsList onClick={toggleModal} />
      {toggle && (
        <ModalView onClick={toggleModal} id={id} name={name} number={number} />
      )}
    </>
  );
};

export default ContactsPage;
