import "./Sidebar.css";
import { FaChartPie, FaMapMarkedAlt, FaRupeeSign, FaRoute, FaStar, FaHome } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/"><FaHome /> Home</a>
      <a href="/"><FaMapMarkedAlt /> My Trips</a>
      <a href="/"><FaChartPie /> Analytics</a>
      <a href="/"><FaRupeeSign /> Total Expenditure</a>
      <a href="/"><FaRoute /> Distance Travelled</a>
      <a href="/"><FaStar /> Recommended Places</a>
    </div>
  );
}
