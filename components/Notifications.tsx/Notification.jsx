import React, { useEffect, useRef, useState } from "react";
import { useNotifications } from "reapop";

const userDefault = {
  user_name: "Alvaro Castillo",
  phone: "2212401587",
  no_suscription: "1234",
  coordinates: "19.43252, -99.132733",
};

export default function Notificacion({ incomingCalls = {} }) {
  const { notify } = useNotifications();
  const [status, setStatus] = useState("loading");
  const audioRef = useRef();

  useEffect(() => {
    if (incomingCalls.user_name === undefined) return;

    console.log(incomingCalls);

    notify({
      title: "Alerta S.O.S",
      Transition: "fade",
      status,
      message: `<p styles={{color:"#fff"}}>${incomingCalls.user_name}#${incomingCalls.no_suscription}<p> \n  ha solicitado ayuda en ${incomingCalls.coordinates}`,
      buttons: [
        {
          name: "Llamar",
          primary: true,
          onClick: () => {
            window.location.href = `tel:${incomingCalls.phone}`;
          },
        },
        {
          name: "Declinar",
          primary: false,
          onClick: () => {
            console.log("button2");
          },
        },
      ],
    });
  }, [incomingCalls]);

  //console.log(incomingCalls);

  const launchNotification = () => {
    notify({
      title: "Alerta S.O.S",
      Transition: "fade",
      status,
      message: `${user.user_name}#${user.no_suscription} \n  ha solicitado ayuda en ${user.coordinates}`,
      buttons: [
        {
          name: "Llamar",
          primary: true,
          onClick: () => {
            window.location.href = `tel:${user.phone}`;
          },
        },
        {
          name: "Declinar",
          primary: false,
          onClick: () => {
            console.log("button2");
          },
        },
      ],
    });
  };

  return <></>;
  /*<button
      onClick={launchNotification}
      className="border-2 border-red-500 absolute top-2 left-2 z-50 bg-white p-3"
    >
      notificacion
  </button>*/
}
