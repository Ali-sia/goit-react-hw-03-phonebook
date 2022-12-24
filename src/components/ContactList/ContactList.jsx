import PropTypes from 'prop-types';

import { StyledButton } from '../App.styled';
import { ContactItem } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <p>
              {name}, {number}
            </p>
            <StyledButton type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </StyledButton>
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
