import React from 'react';
import { IconInstagram, IconLinkedIn, IconTwitter } from './icons'
import Link from './Link'

const Card = ({
  name,
  email,
  socialLinks,
  body,
  avatar: Avatar
}) => {
  return (
    <div className="max-w-sm p-5 mt-5 bg-gray-100 rounded-lg border-2 border-gray-300 shadow-lg">
        <div>
            <Avatar/>
        </div>
      <div className="flex-col px-5 py-5 text-center">
        <div className="font-bold text-3xl mb-2">{name}</div>
        <div className="font-bold text-base mb-2">{email}</div>
      </div>
      <div className="flex px-5 justify-center">
        {socialLinks.map(({ Icon, url }) => (
          <a href={url}>
            <div className="rounded-full bg-purple-300 p-2 mx-2">
              <Icon className="w-8 text-purple-100 fill-current stroke-none" />
            </div>
          </a>
        ))}
      </div>
      <div className="flex px-2 py-5">
        <div className="text-sm m-2">{body}</div>
        <div className="max-w-full" src="/img/icons/right-triangle.svg" alt="triangle icon"></div>
      </div>
    </div>
  )
}

export default Card
