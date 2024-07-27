import { MdSecurity } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlineAppSettingsAlt } from "react-icons/md";

const data = [
    {
        id: 1,
        service: 'Database Consultancy',
        desc: 'Unlock hidden value from your data with our expert database optimization.',
        icon: <MdSecurity size={32} className='mt-1.5 text-white' />
    },
    {
        id: 2,
        service: 'App Development',
        desc: 'Got an app idea? Let us turn it into reality with our custom app solutions',
        icon: <MdOutlineAppSettingsAlt size={32} className='mt-1.5 text-white' />
    },
    {
        id: 3,
        service: 'IT Consultancy',
        desc: 'We simplify IT so you can focus on what matters most. Say goodbye to tech ',
        icon: <MdPeopleAlt size={32} className='mt-1.5 text-white' />
    },
]

export default data;