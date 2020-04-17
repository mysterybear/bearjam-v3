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

const Label = ({
  children,
  ...otherProps
}) => {
  return (
    <label className="block mb-1 font-bold" {...otherProps}>{children}</label>
  )
}

const ContactPage = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <Presence key="contactPage" className="mt-8" {...defaultVariants}>
      <h1 className="text-lg text-center">Say hello!</h1>
      <h4 className="text-center">Get a free 1-to-1 consultation</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="border-2 rounded-lg border-gray-200 shadow-lg p-4 max-w-xs mt-4">
        <div className="mt-4">
          <Label htmlFor="name">Name</Label>
          <input type="text" id="name" name="name" className="w-full border-2 rounded-md bg-gray-100" name="Name" ref={register({ required: true, maxLength: 50 })} />
        </div>
        <div className="mt-4">
          <Label htmlFor="email">Email</Label>
          <input type="email" id="email" name="email" className="w-full border-2 rounded-md bg-gray-100" name="Email" ref={register({ required: true })} />
        </div>
        <div className="mt-8">
          <Label htmlFor="need">What do you need?</Label>

          <div className="flex flex-wrap justify-center mt-2">
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
                tabIndex={0}
                className={cx('transition duration-150 ease-in-out border-2 rounded-md shadow-sm py-1 px-2 m-1 inline-block text-sm hover:bg-pink-200 focus:outline-none focus:shadow-outline', watch()[ps.name] ? 'bg-pink-400' : 'bg-transparent')}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Label htmlFor="message">Tell us more</Label>
          <textarea id="message" name="message" className="border-2 rounded-md bg-gray-100 block w-full h-24 resize-none" />
        </div>
        <div className="flex justify-center mt-4">

          <input type="submit" value="Send" className="border-2 rounded-md py-1 px-2 bg-pink-400 shadow-sm text-white font-bold tracking-wide" />
        </div>

      </form>
    </Presence>
  );
}

export default ContactPage;
