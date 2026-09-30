import Image from 'next/image';
import { Envelope, EnvelopeOpen, LogoGithub, LogoLinkedin } from '@gravity-ui/icons';
import Link from 'next/link';
import ToolTipButton from './ToolTip';
import BackToTop from './shared/BackToTop';


const Footer = () => {
    return (
        <footer className='bg-[#262A30] px-2.5 sm:px-4 md:px-7 lg:px-16 py-16 flex flex-col gap-5 md:flex-row items-center md:justify-between'>
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
                {/* Email */}
                <p className="flex gap-2 items-center">
                    <EnvelopeOpen className='text-[#50C8E1]' />
                    <Link href='mailto:nafiulislameshan307@gmail.com' className="hover:scale-102 hover:text-amber-600 transition-all duration-75">nafiulislameshan307@gmail.com</Link>
                </p>
            </div>
            <div className="flex gap-2">
                <Link href='https://github.com/Nafiul-Islam-Eshan' target='_blank'>
                    <ToolTipButton toolTipContent='GitHub' icon={<LogoGithub/>} />
                </Link>
                <Link href='https://www.linkedin.com/in/md-nafiul-islam-402802377/' target='_blank'>
                    <ToolTipButton toolTipContent='Linkedin' icon={<LogoLinkedin/>} />
                </Link>
                <Link href='mailto:nafiulislameshan307@gmail.com' target='_blank'>
                    <ToolTipButton toolTipContent='Email' icon={<Envelope/>} />
                </Link>
                <BackToTop />
            </div>
        </footer>
    );
};

export default Footer;