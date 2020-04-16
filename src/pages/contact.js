import React from 'react';
import Presence from '../components/Presence';
import { useForm } from 'react-hook-form';
import { defaultVariants } from '../animations';

const ContactPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <Presence key="contactPage" {...defaultVariants}>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border-2 rounded-lg">

          <div className="mt-4 ml-2 font-bold">
            <p className="ml-1">Name</p>
          <input type="text" className="border-2 rounded-md bg-gray-100" name="Name" ref={register({ required: true, maxLength: 50 })} />
          </div>
          <div className="mt-4 ml-2 font-bold">
            <p className="ml-1">Email</p>
          <input type="email" className="border-2 rounded-md bg-gray-100" name="Email" ref={register({ required: true })} />
          </div>

          <textarea name="Description" ref={register({ required: true })} />

          <input type="submit" />
        </div>
      </form>
    </Presence>
  );
}

export default ContactPage;
