import { FiBarChart, FiCreditCard, FiUser, FiUserPlus } from "react-icons/fi";

const quickActions = [
  {
    id: 1,
    title: "Add Member",
    icon: FiUserPlus,
    route: "/members/add",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-500/40",
  },
  {
    id: 2,
    title: "Create Membership",
    icon: FiCreditCard,
    route: "/membership/create",
    iconColor: "text-green-700 ",
    bgColor: "bg-green-500/40"
  },
  {
    id: 3,
    title: "Add Trainers",
    icon: FiUser,
    route: "/trainers/add",
    iconColor: "text-red-600 ",
    bgColor: "bg-red-500/40",

  },
  {
    id: 4,
    title: "View Reports",
    icon: FiBarChart,
    route: "/reports",
    iconColor: "text-orange-600 ",
    bgColor: "bg-orange-500/40"
  },
];
export default quickActions;
