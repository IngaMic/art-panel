function Card() {
    return (
        <article className="max-w-xs bg-white text-black border border-d4">
            <header>
                <img
                    className="w-full border-b border-d4"
                    src="/images/round.jpg"
                    alt=""
                />
            </header>
            <div className="flex flex-col flex-start h-48 px-6 py-4">
                <p className="pb-2 text-secondary"> Category</p>
                <div className="font-bold text-lg mb-auto">
                    This is the name of the article and that is how much you
                    will
                </div>
                <p className="mt-auto text-secondary">10.10.2021</p>
            </div>
        </article>
    );
}

export default Card;
