import './ItemDetails.scss'

function ItemDetails({children}) {
    return (
        <div 
            className="item-detail-container"
        >
            {children}
        </div>
    );
}

export default ItemDetails;
