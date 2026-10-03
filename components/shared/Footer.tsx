import Image from 'next/image';
import { Envelope, Handset, LogoGithub, LogoLinkedin } from '@gravity-ui/icons';
import Link from 'next/link';
import ToolTipButton from '../ToolTip';
import BackToTop from './BackToTop';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='bg-[#070E19] px-2.5 sm:px-4 md:px-7 lg:px-16 py-16 flex flex-col gap-5 md:flex-row items-center md:justify-between'>
            <div className="">
                {/* Name */}
                <div className="flex gap-2">
                    <Image height='20' width='20' alt='A Programmer icon' src='/programmer.png' className='mb-2' />
                    <h3 className="font-medium text-lg">
                        Md Nafiul Islam
                    </h3>
                </div>
                {/* Address */}
                <p className="flex gap-2 items-center">
                    <Image height='20' width='20' alt='Location icon' src='/location.png' className='scale-70' />
                    Faruki House, Gangchor, Cumilla, Bangladesh.
                </p>
                {/* Mobile */}
                <p className="flex gap-2 items-center">
                    <Handset className='text-[#50C8E1]' />
                    +8801905515736 , +8801540642138(WhatsApp)
                </p>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex gap-2">
                    <Link href='https://github.com/Nafiul-Islam-Eshan' target='_blank'>
                        <ToolTipButton toolTipContent='GitHub' icon={<LogoGithub />} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/md-nafiul-islam-402802377/' target='_blank'>
                        <ToolTipButton toolTipContent='Linkedin' icon={<LogoLinkedin />} />
                    </Link>
                    <Link href='mailto:nafiulislameshan307@gmail.com' target='_blank'>
                        <ToolTipButton toolTipContent='Email' icon={<Envelope />} />
                    </Link>
                    <Link href={`https://wa.me/${process.env.WHATSAPP_NUMBER}?text=${encodeURIComponent(process.env.WHATSAPP_DEFAULT_TEXT as string)}`} target='_blank' rel="noopener noreferrer">
                        <ToolTipButton toolTipContent='WhatsApp' icon={<IoLogoWhatsapp />} />
                    </Link>
                    <Link href="https://www.instagram.com/nafiulislam183?stkn=eHBpb3pncnhqOXoz" target='_blank' rel="noopener noreferrer">
                        <ToolTipButton toolTipContent='Instagram' icon={<FaInstagram />} />
                    </Link>
                    <BackToTop />
                </div>
                <div className="text-slate-400">
                    © 2026 Md. Nafiul Islam. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;  