import { Button, Tooltip } from '@heroui/react';
import { ReactNode } from 'react';

type ToolTipButtonParams = {
    toolTipContent: string;
    icon: ReactNode;
}

const ToolTipButton = ({ toolTipContent, icon }: ToolTipButtonParams) => {
    return (
        <div>
            <Tooltip delay={0}>
                <div >
                    <Button className='fill-none border-3 border-teal-500' isIconOnly aria-label="icon" >
                    {icon}
                </Button>
                </div>
                <Tooltip.Content className='text-md font-bold'>
                    <p className='text-slate-900 '>{toolTipContent}</p>
                </Tooltip.Content>
            </Tooltip>
        </div>
    );
};

export default ToolTipButton;