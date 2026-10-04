
type SectionHeadingProps = {
    text: string;
};

const SectionHeading = ({text}:SectionHeadingProps) => {
    return (
        <div className="text-center">
            <h2 className="text-xl font-bold text-slate-100">
                {text}
            </h2>

            <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                <span className="h-px w-8 bg-cyan-400/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span className="h-px w-8 bg-cyan-400/40" />
            </div>
        </div>
    );
};

export default SectionHeading;