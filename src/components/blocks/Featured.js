import FeaturedCard from "../shared/FeaturedCard";

const Featured = () => {
    return (
        <div className="w-full xl:max-w-xs my-2 xl:my-0 p-4 border border-d4">
            <div className="border-b border-d4 border-t-4 w-full font-bold text-lg text-center  py-4">
                Featured Posts
            </div>
            <div className="flex flex-col md:flex-row flex-wrap xl:flex-col justify-center">
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </div>
        </div>
    );
};

export default Featured;
