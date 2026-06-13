const SkillCard = ({ title, icon }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-8 border-3 border-sm p-8">
            <img className="w-14 h-14" src={icon} alt="" />
            <h3 className="font-bold text-[20px] text-center">{title}</h3>
        </div>
    );
};

export default SkillCard;
