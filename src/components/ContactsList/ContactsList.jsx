import PropTypes from 'prop-types';
import { List, ListItem, Name, Numbur, BtnDelete } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <Name>{name}:</Name>
        <Numbur>{number}</Numbur>
        <BtnDelete type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </BtnDelete>
      </ListItem>
    ))}
  </List>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
