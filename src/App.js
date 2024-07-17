import './App.css';
import { Formik, Form, Field } from 'formik';

function App() {
  const defaultValue = {
    name: "",
    email: "",
    password: ""
  };

  // const handleSubmit = (values) => {
  //   console.log(values);
  // };

  return (
    <div className="App">
      <Formik
        initialValues={defaultValue}
        // onSubmit={handleSubmit}
      >
        <Form>
          <h1>Login page</h1>
          <hr />
          <Field type="text" name="name" placeholder='Enter Your name' />
          <Field type="email" name="email" placeholder='Enter Your email' />
          <Field type="password" name="password" placeholder='Enter Your password' />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
