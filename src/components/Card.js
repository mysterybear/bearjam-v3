import React from 'react';

const Card = () => {
    return (
        <div className="max-w-sm p-5 mt-5 bg-gray-100 rounded-lg border-2 border-gray-300 shadow-lg">
            <img className="w-full -mt-16" src="/img/svg/mag-avatar.svg" alt="mag face"></img>
            <div className="flex-col px-5 py-5 text-center">
                <div className="font-bold text-3xl mb-2">Magda</div>
                <div className="font-bold text-base mb-2">magda@bearjam.dev</div>
            </div>
            <div className="flex px-5 justify-center">
                {["instagram", "twitter", "linkedin"].map(x => (
                    <img className="mx-2" src={`/img/icons/${x}.png`} />
                ))}
            </div>
            <div className="flex px-2 py-5">
                <div className="text-sm m-2">Magda is a digital designer with a background in film, photography and marketing.</div>
                <div className="max-w-full" src="/img/icons/right-triangle.svg" alt="triangle icon"></div>
            </div>
        </div>
    )
}

export default Card