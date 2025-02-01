import './HomeTitle.scss'

function HomeTitle({user}) {
    const today = new Date();

    const weekday = today.toLocaleString("en-US", { weekday: "long" });
    const day = today.getDate();
    const month = today.toLocaleString('en-US', {month: 'long'});
    const year = today.getFullYear();

    return (
        <>
            <h1>
                Hello <span className="home-title__user-name">{user.firstName}!</span>
            </h1>

            <p className="home-title__date-message">
                Today is {weekday} on <span className="home-title__date">{month} {day}, {year}</span>
            </p>
        </>
    );
}

export default HomeTitle;