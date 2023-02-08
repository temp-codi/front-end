import React, { useState, useEffect } from 'react';
interface Coordinates {
  readonly latitude: number;
  readonly longitude: number;
  readonly accuracy: number;
  readonly altitude?: number | null;
  readonly altitudeAccuracy?: number | null;
  readonly heading?: number | null;
  readonly speed?: number | null;
}

interface Position {
  readonly coords: Coordinates;
  readonly timestamp: number;
}

interface PositionError {
  readonly code: number;
  readonly message: string;
}
const useCurrentLocation = () => {
  const [location, setLocation] = useState<Position | null>(null);
  const [error, setError] = useState<PositionError | null>(null);
  const options = {
    enableHighAccuracy: true,
  };

  const getLocation = async () => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError({ code: 0, message: 'Geolocation is not supported.' });
      return;
    }

    try {
      const position = await new Promise<Position>((resolve, reject) => {
        geolocation.getCurrentPosition(resolve, reject, options);
      });
      setLocation(position);
    } catch (error: any) {
      setError(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location, error };
};
const Page: React.FC = () => {
  const { location, error } = useCurrentLocation();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Latitude: {location.coords.latitude}</p>
      <p>Longitude: {location.coords.longitude}</p>
    </div>
  );
};

export default Page;
