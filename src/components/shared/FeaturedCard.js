const FeaturedCard = () => {
    return (
        <div className="flex w-full md:w-1/3 xl:w-full py-4 border-b border-d4">
            <header className="w-2/5 md:mr-5 xl:mr-3">
                <img src="/images/watercolour.jpg" alt="" />
            </header>
            <div className="flex flex-col justify-between w-3/5 ml-2">
                <div className="font-bold text-sm">
                    This is the name of the article and that is how much you
                    will
                </div>
                <p className="text-secondary">10.10.2021</p>
            </div>
        </div>
    );
};

export default FeaturedCard;
