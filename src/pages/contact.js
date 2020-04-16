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
        <input type="text" placeholder="Name" name="name" ref={register({ required: true, maxLength: 50 })} />
        <input type="email" placeholder="Email" name="email" ref={register({ required: true })} />

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

        <input type="submit" />
      </form>
    </Presence>
  );
}

export default ContactPage;
