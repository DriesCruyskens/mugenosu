import React from "react"
import Img from 'gatsby-image';
import styled from 'styled-components'
import { Link } from 'gatsby'

const AddToCartButton = styled.button`
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;

    opacity: 0.8;
    padding: 0;
    float: right;

    &:hover {
        background: transparent;
        box-shadow: 0px 0px 0px transparent;
        border: 0px solid transparent;
        text-shadow: 0px 0px 0px transparent;
        
        text-decoration: underline;
        cursor: pointer;
    }
`

const StyledImg = styled(props => <Img {...props} />)`
`

const ProductCard = styled.div`
    position: relative;
    overflow: hidden;
`

const ProductTitle = styled.h2`
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    display: inline-block;
    width: 70%;
`

const ProductPrice = styled.span`
    font-weight: 600;
    display: inline-block;
    width: 30%;
    text-align: right;
    float: right;
`

const ProductInfo = styled.div`
    padding: 1rem;
`

const Product = props => {
    return (
        <ProductCard>
            <Link to={props.slug}>
                {props.frontmatter.featured_image.childImageSharp.fluid &&
                    <StyledImg
                        imgStyle={{ objectFit: "contain" }}
                        fluid={props.frontmatter.featured_image.childImageSharp.fluid}
                        alt={props.dataItemName + " image"} />}
            </Link>
            <ProductInfo>
                <ProductTitle>{props.frontmatter.title}</ProductTitle>

                <ProductPrice>{props.frontmatter.sold ?
                    "SOLD" :
                    props.frontmatter.price + " USD"}
                </ProductPrice>

                {!props.frontmatter.sold &&
                    <AddToCartButton className="snipcart-add-item"
                        data-item-id={props.frontmatter.title}
                        data-item-price={props.frontmatter.price}
                        data-item-url="https://deploy-preview-32--condescending-neumann-452934.netlify.app/shop/"
                        data-item-description={props.frontmatter.description}
                        data-item-image={props.frontmatter.featured_image.childImageSharp.fluid.src}
                        data-item-name={props.frontmatter.title}>
                        Add to cart
                    </AddToCartButton>
                }
            </ProductInfo>
        </ProductCard>
    )
}

export default Product