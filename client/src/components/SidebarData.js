import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Create Campaign",
    path: "/campaign",
    icon: <MdIcons.MdEmail />,
  },
  {
    title: "Lead Generation",
    path: "/leads",
    icon: <FaIcons.FaFilter />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FiIcons.FiSettings />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Edit Profile",
        path: "/settings/edit-profile",
        icon: <BiIcons.BiEdit />,
      },
      {
        title: "Edit Payment",
        path: "/settings/edit-payment",
        icon: <BiIcons.BiEdit />,
      },
      {
        title: "Add User",
        path: "/settings/add-user",
        icon: <BiIcons.BiUserPlus />,
      },
    ],
  },
  {
    title: "Notification",
    path: "/notifications",
    icon: <MdIcons.MdNotificationsNone />,
  },
  {
    title: "Logout",
    path: "/Logout",
    icon: <BiIcons.BiLogOut />,
  },
];
