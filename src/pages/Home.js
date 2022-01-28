import Featured from "../components/blocks/Featured";
import FlexWrap from "../components/shared/FlexWrap";
import { SearchDrawer } from "../components/shared/SearchDrawer";

function Home() {
    return (
        <div className="m-8 md:m-16">
            <div className="flex justify-end mb-5 -mt-10">
                <SearchDrawer />
            </div>
            <div className="flex flex-col xl:flex-row">
                <FlexWrap width="w-full" />
                <Featured />
            </div>
        </div>
    );
}

export default Home;
