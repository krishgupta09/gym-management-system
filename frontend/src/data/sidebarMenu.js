import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiCreditCard,
  FiDollarSign,
  FiUser,
  FiActivity,
  FiBarChart2,
  FiSettings,
} from "react-icons/fi";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: FiHome,
  },
  {
    name: "Members",
    path: "/members",
    icon: FiUsers,
  },
  {
    name: "Attendance",
    path: "/attendance",
    icon: FiCalendar,
  },
  {
    name: "Memberships",
    path: "/memberships",
    icon: FiCreditCard,
  },
  {
    name: "Payments",
    path: "/payments",
    icon: FiDollarSign,
  },
  {
    name: "Trainers",
    path: "/trainers",
    icon: FiUser,
  },
  {
    name: "Workouts",
    path: "/workouts",
    icon: FiActivity,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: FiBarChart2,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
];

export default menuItems;
