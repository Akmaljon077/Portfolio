const ProjectCard = ({ title, img, icon, number, text, className }) => {
    return (
        <div className={`w-360 text-white flex m-auto items-center justify-between ${className}`}>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="flex max-w-145.5 flex-col gap-10">
                <h1 className="text-[48px] leading-14 font-extrabold">{number}</h1>
                <h3 className="font-bold text-[32px] leading-10">{title}</h3>
                <p className="text-[#71717A] text-[16px]">{text}</p>
                <img className="w-5 h-5" src={icon} alt="" />
            </div>
        </div>
    );
};

export default ProjectCard;
