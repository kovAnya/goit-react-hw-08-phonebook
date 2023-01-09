import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectErrors } from '../../redux/contacts/selectors';
import { UserContacts } from './Contacts.styled';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectErrors);
  return (
    <UserContacts>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </UserContacts>
  );
};

export default Contacts;
