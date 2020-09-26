// @vendor
import React, { useState } from "react";
import "./BFCarousal.scss";
import PropTypes from 'prop-types';
import ItemsCarousel from 'react-items-carousel';
// constants
import { getHomevPageConstants } from "./../../../constants/homePage";

const blockName = "bf-carousal";

const BFCarousal = (props) => {
    const { carousalList } = props;
    const { ingredientsLabel, chevronWidth } = getHomevPageConstants();
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    return (
        <div style={{ padding: `0 ${chevronWidth}px` }} className={blockName}>
            <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={4}
            leftChevron={<button className={`${blockName}__prev-btn`}>{'<'}</button>}
            rightChevron={<button className={`${blockName}__next-btn`}>{'>'}</button>}
            outsideChevron
            chevronWidth={chevronWidth}
            >
                {carousalList && carousalList.map(item => {
                    return <div className={`${blockName}__item`}>
                        <img className={`${blockName}__image`} src={item.imgUrl} alt={item.imgAlt} />
                        <h2 className={`${blockName}__name`}>{item.name}</h2>
                        <p className={`${blockName}__ingredients-title`}>{ingredientsLabel}:</p>
                        <p className={`${blockName}__ingredients-list`}>
                            <span>{item.ingredients.map(ing => `${ing}, `)}</span>
                        </p>
                    </div>
                })}
            </ItemsCarousel>
        </div>
    )

}

BFCarousal.propTypes = {
    carousalList: PropTypes.string,
}

export default BFCarousal;