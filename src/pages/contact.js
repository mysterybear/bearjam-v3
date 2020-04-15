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
        <input type="text" placeholder="Name" name="Name" ref={register({ required: true, maxLength: 50 })} />
        <input type="email" placeholder="Email" name="Email" ref={register({ required: true })} />

        <input name="Project Type" type="radio" value="Website" ref={register({ required: true })} />
        <input name="Project Type" type="radio" value=" PWA" ref={register({ required: true })} />
        <input name="Project Type" type="radio" value=" eCommerce" ref={register({ required: true })} />
        <input name="Project Type" type="radio" value=" Other" ref={register({ required: true })} />
        <textarea name="Description" ref={register({ required: true })} />

        <input type="submit" />
      </form>
    </Presence>
  );
}

export default ContactPage;
