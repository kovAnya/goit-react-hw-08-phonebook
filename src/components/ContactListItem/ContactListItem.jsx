import { Item, DeleteBtn } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';

export const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <Item>
      {name}: {phone}
      <DeleteBtn type="button" data-name={name} onClick={onDelete}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
