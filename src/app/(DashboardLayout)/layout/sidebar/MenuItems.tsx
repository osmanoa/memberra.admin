import { RiHome2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "Home",
    icon: RiHome2Fill,
    items: [
      // {
      //   id: uniqueId(),
      //   title: "Onboarding",
      //   // icon: FaWpforms,
      //   href: "/",
      // },
      {
        id: uniqueId(),
        title: "Memberras",
        href: "/memberras",
      },
      {
        id: uniqueId(),
        title: "Invitees",
        href: "/invitees",
      },
    ],
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "Features",
    icon: FaStar,
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "Users",
    icon: FaUser,
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "Pricing",
    icon: FaDollarSign,
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "Integrations",
    icon: IoExtensionPuzzle,
  },
  {
    id: uniqueId(),
    navlabel: true,
    subheader: "Settings",
    icon: IoSettingsSharp,
  },
];

export default Menuitems;
