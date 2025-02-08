import './ItemDetailContainer.scss'

function ItemDetailContainer({children, columns}) {
    return (
        <div 
            className="item-detail-container"
            style={{gridTemplateColumns: `repeat(${columns}, 1fr)`}}
        >
            {children}
        </div>
    );
}

export default ItemDetailContainer;
