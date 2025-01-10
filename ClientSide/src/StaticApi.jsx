import keybord from "../src/images/FlashSale/keybord.png";
import game from "../src/images/FlashSale/game.png";
//browsByCategory
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { TbDeviceWatchStats } from "react-icons/tb";
import { PiCamera } from "react-icons/pi";
import { LuHeadphones } from "react-icons/lu";
import { TbDeviceGamepad } from "react-icons/tb";
import { FaKitchenSet } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";
import { MdSportsHandball } from "react-icons/md";

export const FlashSale = [
  {
    _id: 1,
    discount: "-40%",
    imgsrc: game,
    description: "Game No 2 Plastict",
    discountPrice: "$120",
    orgPrice: "$120",
    rating: "(88)",
  },
  {
    _id: 2,
    discount: "-40%",
    imgsrc: game,
    description: "HAVIT HV-G92 Gamepad",
    discountPrice: "$120",
    orgPrice: "$120",
    rating: "(88)",
  },
  {
    _id: 3,
    discount: "-40%",
    imgsrc: game,
    description: "Game No 3 Almonitor",
    discountPrice: "$120",
    orgPrice: "$120",
    rating: "(88)",
  },
  {
    _id: 4,
    discount: "-35%",
    imgsrc: game,
    description: "AK-900 Wired Keyboard",
    discountPrice: "$960",
    orgPrice: "$1160",
    rating: "(85)",
  },
  {
    _id: 5,
    discount: "-30%",
    imgsrc: game,
    description: "IPS LCD Gaming Monitor",
    discountPrice: "$370",
    orgPrice: "$400",
    rating: "(99)",
  },
  {
    _id: 6,
    discount: "-35%",
    imgsrc: keybord,
    description: "AK-900 Wired Keyboard",
    discountPrice: "$960",
    orgPrice: "$1160",
    rating: "(85)",
  },
  {
    _id: 7,
    discount: "-30%",
    imgsrc: game,
    description: "IPS LCD Gaming Monitor",
    discountPrice: "$370",
    orgPrice: "$400",
    rating: "(99)",
  },
];
export const BrowseByCategory = [
  {
    _id: 1,
    icon: <CiMobile4 />,
    title: "Phones",
    url: "/mobile-phones",
  },
  {
    _id: 2,
    icon: <HiOutlineDesktopComputer />,
    title: "Computers",
    url: "/mobile-phones",
  },
  {
    _id: 3,
    icon: <TbDeviceWatchStats />,
    title: "WatchStats",
    url: "/mobile-phones",
  },
  {
    _id: 4,
    icon: <PiCamera />,
    title: "Cameras",
    url: "/mobile-phones",
  },
  {
    _id: 5,
    icon: <LuHeadphones />,
    title: "HeadPhones",
    url: "/mobile-phones",
  },
  {
    _id: 6,
    icon: <TbDeviceGamepad />,
    title: "Gaming",
    url: "/mobile-phones",
  },
  {
    _id: 7,
    icon: <FaKitchenSet />,
    title: "Kitchen",
    url: "/mobile-phones",
  },
  {
    _id: 8,
    icon: <MdSportsHandball />,
    title: "Health & Beauty",
    url: "/mobile-phones",
  },
  {
    _id: 9,
    icon: <GiMedicines />,
    title: "Medicines",
    url: "/mobile-phones",
  },
  {
    _id: 10,
    icon: <MdOutlinePets />,
    title: "Groceries & Pets",
    url: "/mobile-phones",
  },

];
