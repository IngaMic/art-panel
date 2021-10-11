import Card from "./Card";

function FlexWrap(props) {
    return (
        <div className={`flex flex-wrap justify-center gap-6 ${props.width}`}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default FlexWrap;
