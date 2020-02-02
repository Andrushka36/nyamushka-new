import React, { useState, Fragment } from 'react';

import {
    ProductWrapper,
    Main,
    Header,
    HeaderCorner,
    HeaderTitle,
    Body,
    Title,
    Filling,
    FeaturesList,
    Image,
    Weight,
    WeightUnit,
    Footer,
    Buy,
} from './styled';
// eslint-disable-next-line no-unused-vars
import { Product as ProductType } from '../../graphql';

import cat from './images/cat.png';

const Product = ({
    title,
    filling,
    features,
    description,
    weight,
    enabled,
}: ProductType) => {
    const [isSelected, isSelectedHandler] = useState(false);
    const [isHovered, isHoveredHandler] = useState(false);

    return (
        <ProductWrapper>
            <Main
                onClick={() => {
                    enabled && isSelectedHandler(!isSelected);
                    isHoveredHandler(false);
                }}
                onMouseEnter={() => enabled && isHoveredHandler(true)}
                onMouseLeave={() => enabled && isHoveredHandler(false)}
                enabled={enabled}
            >
                <Header>
                    <HeaderCorner selected={isSelected} enabled={enabled} hover={isHovered} />
                    <HeaderTitle selected={isSelected}  enabled={enabled} hover={isHovered}>
                        {isSelected && isHovered  ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}
                    </HeaderTitle>
                </Header>
                <Body selected={isSelected} enabled={enabled} hover={isHovered}>
                    <Title enabled={enabled}>{title}</Title>
                    <Filling enabled={enabled}>{filling}</Filling>
                    <FeaturesList>
                        {features.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/(\d+)/, '<b>$1</b>') }} />)}
                    </FeaturesList>
                    <Image src={cat} alt={`${title} ${filling}`} enabled={enabled} />
                    <Weight selected={isSelected} enabled={enabled} hover={isHovered}>
                        {weight} <WeightUnit>кг</WeightUnit>
                    </Weight>
                </Body>
            </Main>
            <Footer enabled={enabled}>
                {enabled ? (
                    isSelected ? (
                        description
                    ) : (
                        <Fragment>
                            Чего сидишь? Порадуй котэ, <Buy onClick={() => isSelectedHandler(true)}>купи</Buy>.
                        </Fragment>
                    )
                ) : (
                    `Печалька, ${filling} закончился.`
                )}
            </Footer>
        </ProductWrapper>
    );
};

export default Product;