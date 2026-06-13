const SectionTitle = ({ title, color }) => {
    return (
        <h2 className={`text-[48px] text-center p-10 font-sora ${color}`}>
            My <span className="font-extrabold">{title}</span>
        </h2>
    );
};

export default SectionTitle;
