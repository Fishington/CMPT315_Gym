import './ItemDetails.scss'

function ItemDetails({children, columns}) {
    return (
        <div 
            className="item-detail-container"
            style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}
        >
            {children}
        </div>
    );
}

export default ItemDetails;
