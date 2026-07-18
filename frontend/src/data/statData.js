import { FiUsers, FiUser, FiCreditCard, FiDollarSign } from "react-icons/fi";

const statData = [
  {
    title: "Total Members",
    value: "532",
    trend: "+12% this month",
    icon: FiUsers,
    iconBgAndText: "bg-blue-300/50 text-blue-700",
  },
  {
    title: "Active Memberships",
    value: "425",
    trend: "-2% this month",
    icon: FiCreditCard,
    iconBgAndText: "bg-green-300/50 text-green-700",
  },
  {
    title: "Trainers",
    value: "18",
    trend: "+2% this month",
    icon: FiUser,
    iconBgAndText: "bg-purple-300/50 text-purple-700",
  },
  {
    title: "Monthly Revenue",
    value: "₹2,45,000",
    trend: "+10% this month",
    icon: FiDollarSign,
    iconBgAndText: "bg-green-300/40 text-green-800",
  },
];

export default statData;
