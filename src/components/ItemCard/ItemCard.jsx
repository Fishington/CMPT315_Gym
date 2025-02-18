import {Link} from 'react-router-dom';

import Card from '@/components/Card';
import Tag from '@/components/Tag';

import './ItemCard.scss'
import {createContext, useContext} from 'react';

const ItemCardContext = createContext(null);

function ItemCard({data, baseLink}) {
    return (
        <ItemCardContext.Provider value={{data}}>
            <Link to={`/${baseLink}/${data.id}`}>
                <Card variant="item-card">

                    <section className="item-card__image-container">
                        <img src={data.image} alt={`Cover image of ${data.name}`}/>

                        <Tag tagTitle={data.level} color={data.level.toLowerCase()} size="small"/>
                    </section>

                    <section className="item-card__content">
                        <ItemCardText/>
                        <ItemCardTags/>
                    </section>
                </Card>
            </Link>
        </ItemCardContext.Provider>
    );
}

function ItemCardText() {
    const {data} = useContext(ItemCardContext);

    return (
        <div className="item-card__text">
            <h2>{data.name}</h2>

            <div className="item-card__details">
                <div className="item-card__author">
                    <img className="item-card__author-image" src="/images/hyper-fit-profile-pic.png" alt=""/>
                    <p className="item-card__author-name">HyperFit Team</p>
                </div>

                <p>
                    <span className="item-card__length">{data.length}</span> minutes
                </p>
            </div>
        </div>
    )
}

function ItemCardTags() {
    const {data} = useContext(ItemCardContext);

    return (
        <ul className="item-card__tags">
            {data.tags.map((tag, key) => (
                <li key={key}>
                    <Tag tagTitle={tag} color="blue" size="small"/>
                </li>
            ))}
        </ul>
    )
}

export default ItemCard;