import { Field, Form, Formik } from 'formik';
import { GoSearch } from 'react-icons/go';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  return (
    <header>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
               actions.resetForm();
        }}
      >
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button type="submit">
            <GoSearch />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
