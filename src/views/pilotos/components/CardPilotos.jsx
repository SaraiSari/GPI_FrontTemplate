import React from 'react'

function CardPilotos({ piloto }) {
    return (
        <div
            key={piloto.driverId}
            className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-700"
        >
            <h2 className="text-2xl font-bold text-red-600 mb-2">
                {piloto.givenName} {piloto.familyName}
            </h2>
            <p className="mb-1"><span className="font-semibold">Nacimiento:</span> {piloto.dateOfBirth}</p>
            <p className="mb-3"><span className="font-semibold">Nacionalidad:</span> {piloto.nationality}</p>
            <a
                href={piloto.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold"
            >
                Wikipedia
            </a>
        </div>
    )
}

export default CardPilotos
