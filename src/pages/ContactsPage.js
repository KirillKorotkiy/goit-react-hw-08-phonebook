import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { useState } from 'react';
import { ModalView } from 'components/Modal/Modal';

 const ContactsPage = () => {
  const [toggle, setToggle] = useState(false);
  const [id, setid] = useState('');

  const toggleModal = id => {
    setToggle(prevModal => !prevModal);
    setid(id);
  };

  return (
    <>
      <ContactEditor />
      <ContactsList onClick={toggleModal}/>
      {toggle && <ModalView onClick={toggleModal} id={id} />}
    </>
  );
};

export default ContactsPage