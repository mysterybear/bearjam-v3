import React, { forwardRef, useEffect } from 'react';
import Presence from '../components/Presence';
import { useForm } from 'react-hook-form';
import { defaultVariants } from '../animations';
import cx from 'classnames'

const CheckBox = forwardRef(({
  name,
  label,
  ...otherProps
}, ref) => (
    <div {...otherProps}>
      <label htmlFor={name}>{label}</label>
      <input className="hidden" type="checkbox" id={name} name={name} ref={ref} />
    </div>
  ))

const ContactPage = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Presence key="contactPage" {...defaultVariants}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 ml-2 font-bold">
          <label for="name" className="ml-1">Name</label>
          <input type="text" id="name" name="name" className="border-2 rounded-md bg-gray-100" name="Name" ref={register({ required: true, maxLength: 50 })} />
        </div>
        <div className="mt-4 ml-2 font-bold">
          <label for="email" className="ml-1">Email</label>
          <input type="email" id="email" name="email" className="border-2 rounded-md bg-gray-100" name="Email" ref={register({ required: true })} />
        </div>

        {[
          { name: "website", label: "Website" },
          { name: "pwa", label: "PWA" },
          { name: "mobileApp", label: "Mobile App" },
          { name: "webApp", label: "Web App" },
          { name: "branding", label: "Branding" },
        ].map(ps => (
          <CheckBox
            {...ps}
            key={ps.name}
            ref={register}
            className={cx('transition duration-150 ease-in-out', watch()[ps.name] ? 'bg-red-500' : 'bg-transparent')}
          />
        ))}

        <textarea name="description" ref={register({ required: true })} />
        <div className="border-2 rounded-lg">


          <textarea name="Description" ref={register({ required: true })} />

          <input type="submit" />
        </div>
      </form>
    </Presence>
  );
}

export default ContactPage;
