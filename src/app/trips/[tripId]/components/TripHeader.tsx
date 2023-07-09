import React from 'react'
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import { Trip } from '@prisma/client';


interface TripHeaderProps {
    trip: Trip
}


const TripHeader = ({ trip }: TripHeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="relative h-[280px] w-full">
        <Image
          src={trip.coverImage}
          alt={trip.name}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* TÍTULO E INFORMAÇÕES */}
      <div className="flex flex-col p-5">
        <h1 className="font-semibold text-xl text-primary">{trip.name}</h1>

        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={trip.countryCode} svg />
          <p className="text-xs text-grayPrimary underline">{trip.location}</p>
        </div>

        <p className="text-xs text-grayPrimary">
          <span className="text-primary font-medium">
            R${trip.pricePerDay.toString()}
          </span>{" "}
          por dia
        </p>
      </div>
    </div>
  );
}

export default TripHeader