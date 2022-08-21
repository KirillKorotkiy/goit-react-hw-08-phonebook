import { useDeleteContactByIdMutation } from 'redux/contactsAPI';
import { ThreeDots } from 'react-loader-spinner';
import Filter from 'components/Filter/Filter.js';
import { useFilter } from 'hook/useFilter.js';
import { useEffect } from 'react';
import {
  List,
  Item,
  Name,
  UpdateButton,
  Number,
  Icon,
  DeleteButton,
  Buttons,
  Spiner,
} from './ContactsList.jsx';

export const ContactsList = ({ onClick }) => {
  const { filterByName, filter, setFilter, status, refetch } = useFilter();
  const [deleteContact, { isSuccess }] = useDeleteContactByIdMutation();

  useEffect(() => {
    refetch();
  }, [isSuccess, refetch]);

  const handeleDelete = async id => {
    await deleteContact(id);
  };
  return (
    <>
      <Filter value={filter} onChange={setFilter} />
      {status === 'pending' ? (
        <Spiner>
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </Spiner>
      ) : (
        <List>
          {filterByName.map(({ name, number, id }) => (
            <Item key={id}>
              <Icon width="60" />
              <Name>Name: {name}</Name>
              <Number>Number: {number}</Number>
              <Buttons>
                <DeleteButton
                  type="button"
                  onClick={() => handeleDelete(id)}
                ></DeleteButton>
                <UpdateButton
                  type="button"
                  onClick={() => {
                    onClick(id, name, number);
                  }}
                ></UpdateButton>
              </Buttons>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};
