export default function ItemAbout({data, aboutName}) {
    return (
        <div className="grid gap-05">
            <h3>About the {aboutName}:</h3>
            <p>{data}</p>
        </div>
    );
}