import { MdSecurity } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaCloud } from "react-icons/fa6";
import { FaMedapps } from "react-icons/fa";
import { LuDatabaseBackup } from "react-icons/lu";
import { PiTreeStructureLight } from "react-icons/pi";
import { BsPatchExclamation } from "react-icons/bs";
import { VscRemoteExplorer } from "react-icons/vsc";
import { RxDesktop } from "react-icons/rx";
import { FaHandsHelping } from "react-icons/fa";
import { CgSoftwareUpload } from "react-icons/cg";

const data = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220081/Untitled_design_-_2_cpyxha.png",
    service: "Website Developement",
    desc: "Crafting engaging and functional websites tailored to your needs.",
    url: "website-development",
    icon: <RxDesktop size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220080/Untitled_design_-_5_rdtmwc.png",
    service: "Digital Marketing",
    desc: "Boost your online presence and reach your target audience effectively.",
    url: "digital-marketing",
    icon: <FaMedapps size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220080/Untitled_design_-_4_sleexi.png",
    service: "Remote Help Desk",
    desc: "Instant support and solutions for your IT issues, no matter where you are.",
    url: "desk-support",
    icon: <FaHandsHelping size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220080/Untitled_design_-_6_okskr5.png",
    service: "IT System Management",
    desc: "Streamline your IT infrastructure for seamless operations.",
    url: "itsm",
    icon: <CgSoftwareUpload size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220079/Untitled_design_-_1_founku.png",
    service: "IT Strategy & Consulting",
    desc: "Strategic guidance to align technology with your business goals.",
    url: "IT-consulting",
    icon: <MdPeopleAlt size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220081/Untitled_design_-_7_x7erm6.png",
    service: "Security Management",
    desc: "Protect your data and systems with robust security measures.",
    url: "security",
    icon: <MdSecurity size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220081/Untitled_design_-_10_htpcdi.png",
    service: "Cloud Solution",
    desc: "Harness the power of cloud technology for scalable and efficient operations.",
    url: "cloud-solution",
    icon: <FaCloud size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220081/Untitled_design_-_9_nyawkj.png",
    service: "Infrastructure Management",
    desc: "Optimize your IT infrastructure for enhanced performance.",
    url: "infrastructure",
    icon: <PiTreeStructureLight size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220082/Untitled_design_-_12_qxjfte.png",
    service: "Backup & Recovery",
    desc: "Ensure data safety and quick recovery in case of emergencies.",
    url: "backup-and-recovery",
    icon: <LuDatabaseBackup size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 10,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220082/Untitled_design_-_11_udx4we.png",
    service: "Patch Management",
    desc: "Stay up to date and secure with timely software updates.",
    url: "patch-management",
    icon: <BsPatchExclamation size={32} className="mt-1.5 text-white" />,
  },
  {
    id: 11,
    img: "https://res.cloudinary.com/dezi0bct4/image/upload/v1713220081/Untitled_design_-_8_dqiywd.png",
    service: "Remote Monitoring",
    desc: "Monitor your systems remotely for proactive maintenance and issue resolution.",
    url: "remote-monitoring",
    icon: <VscRemoteExplorer size={32} className="mt-1.5 text-white" />,
  },
];

export default data;
