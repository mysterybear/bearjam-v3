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
          <label htmlFor="name" className="ml-1">Name</label>
          <input type="text" id="name" name="name" className="border-2 rounded-md bg-gray-100" name="Name" ref={register({ required: true, maxLength: 50 })} />
        </div>
        <div className="mt-4 ml-2 font-bold">
          <label htmlFor="email" className="ml-1">Email</label>
          <input type="email" id="email" name="email" className="border-2 rounded-md bg-gray-100" name="Email" ref={register({ required: true })} />
        </div>
        <div className="mt-4 ml-2 font-bold">
          <label htmlFor="need" className="ml-1">What do you need?</label>
        </div>

        <div className="flex flex-wrap border-2 border-red-500 justify-center max-w-xs">
          {[
            { name: "website", label: "Website" },
            { name: "mobileApp", label: "Mobile App" },
            { name: "webApp", label: "Web App" },
            { name: "branding", label: "Branding" },
            { name: "other", label: "Other" },
          ].map(ps => (
            <CheckBox
              {...ps}
              key={ps.name}
              ref={register}
              className={cx('transition duration-150 ease-in-out border-2 rounded-md shadow-md p-1 m-1 inline-block', watch()[ps.name] ? 'bg-red-500' : 'bg-transparent')}
            />
          ))}
        </div>

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
