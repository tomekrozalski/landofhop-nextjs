/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';

import serverCall, {
  Endpoints,
  Status as StatusEnum,
} from 'utils/helpers/serverCall';
import { AuthenticationContext } from 'utils/contexts';
// import { PlaceOutput } from 'dashboard/utils/types/form';
import { Place as PlaceType } from 'dashboard/utils/types';

export const PlaceContext = React.createContext({
  // addNewPlace: ({}: PlaceOutput) => new Promise(resolve => resolve(true)),
  getPlaces: () => {},
  places: [] as PlaceType[],
  status: StatusEnum.idle,
});

const Place: React.FC = ({ children }) => {
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [places, setPlaces] = useState<PlaceType[]>([]);

  const getPlaces = () => {
    setStatus(StatusEnum.pending);
  };

  useEffect(getPlaces, []);

  useEffect(() => {
    if (status === StatusEnum.pending) {
      serverCall(Endpoints.place, { token })
        .then((places: PlaceType[]) => {
          setPlaces(places);
          setStatus(StatusEnum.resolved);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
        });
    }
  }, [status]);

  // const addNewPlace = (request: PlaceOutput) =>
  //   new Promise((resolve, reject) => {
  //     setStatus(StatusEnum.pending);

  //     serverCall({
  //       body: JSON.stringify(request),
  //       method: 'POST',
  //       path: 'place',
  //       token,
  //     })
  //       .then((places: PlaceType[]) => {
  //         setPlaces(places);
  //         resolve(true);
  //       })
  //       .catch(reject);
  //   });

  return (
    <PlaceContext.Provider
      value={{
        // addNewPlace,
        getPlaces,
        places,
        status,
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};

export default Place;
