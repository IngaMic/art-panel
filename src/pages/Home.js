import Featured from "../components/blocks/Featured";
import FlexWrap from "../components/shared/FlexWrap";

function Home() {
    return (
        <div className="m-8 md:m-16">
            <div className="flex flex-col xl:flex-row">
                <FlexWrap width="w-full" />
                <Featured />
            </div>
        </div>
    );
}

export default Home;
