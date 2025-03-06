import './MultiColumnList.scss'

export default function MultiColumnList({dataName, data, emptyString = ''}) {
    const dataArray = Array.isArray(data) ? data : [data];

    return (
        <div className="grid gap-05">
            <h3>{dataName}:</h3>

            {dataArray.length === 0 ? (
                <p>{emptyString}</p>
            ) : (
                <ul className="multi-column-list">
                    {dataArray.map((item, index) => (
                        <li key={index}>
                            {typeof item === 'object' ? item.name : item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}