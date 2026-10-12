import { Button } from '@heroui/react';
import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';

const DownloadCvBtn = () => {
    return (
        <>
            <Button className='group  transition-all duration-200 hover:shadow-[0_0_20px_rgba(181,140,255,0.25)]'>
                <Link
                    href='/CV.pdf'
                    download='/CV.pdf'
                    className='flex gap-2 items-center'
                >
                    <BiDownload className='h-4.5 w-4.5' />
                    <span className="opacity-90 group-hover:opacity-100">Download CV</span>
                </Link>
            </Button>
        </>
    );
};

export default DownloadCvBtn;