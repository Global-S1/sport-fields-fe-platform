import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import { GiSoccerField } from "react-icons/gi";

export const navbarItems = [
  {
    name: "Canchas",
    link: "/",
    icon: GiSoccerField,
  },
  {
    name: "Reservas",
    link: "/reservations",
    icon: FaRegCalendar,
    size: 24,
  },
  {
    name: "Mensajes",
    link: "/messages",
    icon: FiMessageCircle,
  },
  {
    name: "Perfil",
    link: "/profile",
    icon: FaRegUserCircle,
  },
];
