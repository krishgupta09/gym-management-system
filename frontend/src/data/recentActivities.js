import { FiCreditCard, FiUser, FiUserCheck, FiUsers } from "react-icons/fi";
import RecentActivities from "../components/dashboard/RecentActivities";

const activities = [
  {
    id: crypto.randomUUID(),
    title: "New Member Krish Joined",
    time: "6:36am",
    icon: FiUserCheck,
    type: "success",
  },
  {
    id: crypto.randomUUID(),
    title: "Payment Received from Himanshu",
    time: "4:49pm",
    icon: FiCreditCard,
    type: "success",
  },
  {
    id: crypto.randomUUID(),
    title: "Membership of Rithik Expired ",
    time: "9:19pm",
    icon: FiUser,
    type: "warning",
  },
  {
    id: crypto.randomUUID(),
    title: "New Trainer Akash Meena Added",
    time: "6:12pm",
    icon: FiUsers,
    type: "info",
  },
];


export default activities