const ExpirienceCard = ({ title, icon, data, text }) => {
    return (
        <div className="w-360 border text-white m-auto border-zinc-500 rounded-[10px] p-8 hover:bg-[#27272A]">
            <div className="flex justify-between pb-7">
                <div className="flex gap-7.5">
                    <img src={icon} alt="img" />
                    <h1 className="text-[24px] font-sora h-8">{title}</h1>
                </div>
                <p className="text-[#D4D4D8] text-[16px] leading-5 font-sora">{data}</p>
            </div>
            <p className="text-[#D4D4D8] text-[16px]">{text}</p>
        </div>
    );
};

export default ExpirienceCard;
