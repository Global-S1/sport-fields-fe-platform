import { ILocationCoords } from "../interfaces/geolocation.interface";

export const getCurrentLocation = (): Promise<ILocationCoords> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(
        new Error("La geolocalización no está soportada por el navegador.")
      );
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      }
    );
  });
};
