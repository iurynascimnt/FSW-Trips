import React, { useState } from 'react'

const getTrips = async () => {
    const trips = await Prisma.trip.findMany({});

    return trips;
}


const Trips = async () => {
    const data = await getTrips();

    console.log({ data })

    return (

    <div>Trips</div>
  )
}

export default Trips