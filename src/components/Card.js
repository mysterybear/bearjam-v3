import React from 'react';
import SvgTriangle from './SvgTriangle';
import { motion } from 'framer-motion';

const Card = ({
    className,
    name,
    email,
    socialLinks,
    body,
    avatar: Avatar,
    ...otherProps
}) => {
    return (
        <div className={`max-w-sm p-5 mt-5 bg-gray-100 rounded-lg border-2 border-gray-300 shadow-lg ${className}`} {...otherProps} >
            <div className="rounded-lg overflow-hidden -mt-12 shadow-md">
                <Avatar preserveAspectRatio="xMidYMid slice" />
            </div>
            <div className="flex-col px-5 py-5 text-center">
                <h1>{name}</h1>
                <h3>{email}</h3>
            </div>
            <div className="flex px-5 justify-center">
                {socialLinks.map(({ Icon, url }) => (
                    <a key={url} href={url}>
                        <motion.div whileHover={{ scale: 1.2 }} className="rounded-full bg-purple-300 p-2 mx-2 shadow-md hover:bg-purple-400 transition-colors duration-300 ease-in-out">
                            <Icon className="w-8 text-purple-100 fill-current stroke-none" />
                        </motion.div>
                    </a>
                ))}
            </div>
            <div className="flex px-2 py-5">
                <p className="text-sm m-2">
                    {body}
                    <SvgTriangle className="w-4 inline ml-2" />
                </p>
            </div>
        </div>
    )
}

export default Card
