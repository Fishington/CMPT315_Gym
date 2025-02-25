import './MultiColumnList.scss'

export default function MultiColumnList({dataName, data, emptyString = ''}) {
    return (
        <div className="grid gap-05">
            <h3>{dataName}:</h3>

            {data.length === 0 ? (
                <p>{emptyString}</p>
            ) : (
                <ul className="multi-column-list">
                    {data.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}