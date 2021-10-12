import Card from "./Card";

function FlexWrap(props) {
    return (
        <div className={`flex flex-wrap justify-center gap-6 ${props.width}`}>
            <Card width="w-full md:w-5/12 lg:max-w-xs" />
            <Card width="w-full md:w-5/12 lg:max-w-xs" />
            <Card width="w-full md:w-5/12 lg:max-w-xs" />
            <Card width="w-full md:w-5/12 lg:max-w-xs" />
            <Card width="w-full md:w-5/12 lg:max-w-xs" />
            <Card width="w-full md:w-5/12 lg:max-w-xs" />
        </div>
    );
}

export default FlexWrap;
