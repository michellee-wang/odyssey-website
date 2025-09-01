'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const events = [
  {
    date: 'Oct 2024',
    location: 'New York City, NY',
    name: 'Luna 🌙',
    link: 'https://luna.hackclub.com',
    imageSrc: '/luna.webp', // Replace with actual image path
  },
  {
    date: 'Oct 2024',
    location: 'Toronto, Canada',
    name: 'Celestial 🪐',
    link: 'https://celestial-hackathon-toronto.vercel.app/',
    imageSrc: '/celestial.webp', // Replace with actual image path
  },
  {
    date: 'Nov 2024',
    location: 'Los Angeles, CA',
    name: 'Ascend 🚀',
    link: 'https://ascend.hackclub.com',
    imageSrc: '/ascend.webp', // Replace with actual image path
  },
  {
    date: 'Mar 2025',
    location: 'Nairobi, Kenya',
    name: 'Jua ☀️',
    link: 'https://jua.hackclub.com',
    imageSrc: '/jua.webp', // Replace with actual image path
  },
  {
    date: 'Apr 2025',
    location: 'Atlanta, GA',
    name: 'Cascade 🌊',
    link: 'https://github.com/hackclub/cascade',
    imageSrc: '/cascade.webp', // Replace with actual image path
  },
  
];

const PastEventsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    }, 50); // Adjust speed here

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="w-full">
      <div ref={scrollRef} className="flex space-x-8 overflow-x-auto p-4 scrollbar-hide">
        {events.map((event, index) => {
          const content = (
            <div className="relative z-10 flex flex-col h-full justify-between p-4 sm:p-6">
              <div>
                <div className="text-3xl sm:text-5xl mb-4 text-white">{event.name.split(' ')[1]}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{event.name.split(' ')[0]}</h3>
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-white">{event.date}</p>
                <p className="text-sm sm:text-base text-white">{event.location}</p>
                {event.link && (
                  <div className="text-center mt-4">
                    <span className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Visit Site →</span>
                  </div>
                )}
              </div>
            </div>
          );

          if (event.link) {
            return (
              <a
                key={index}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-56 sm:w-64 h-80 flex-shrink-0 rounded-lg border-2 border-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <Image
                  src={event.imageSrc}
                  alt={`${event.name} Event Image`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                {content}
              </a>
            );
          }

          return (
            <div
              key={index}
              className="group relative w-56 sm:w-64 h-80 flex-shrink-0 rounded-lg border-2 border-amber-600 transition-all duration-300 overflow-hidden"
            >
              <Image
                src={event.imageSrc}
                alt={`${event.name} Event Image`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/70 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PastEventsCarousel;
