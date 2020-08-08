import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Content = styled.div`
  padding: 100px 0 100px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  grid-gap: 10%;
  row-gap: 0px;
  column-gap: 50px;

  @media (max-width: 500px) {
    padding: 50px 0 50px 0;
  }
`

const StyledCarousel = styled(props => <Carousel {...props} />)`
`

const TextWrapper = styled.div`
`

const Title = styled.h1`
`

const Description = styled.p`
`

const ProductPrice = styled.p`
    font-weight: 700;
    font-size: 1.3rem;
`

const AddToCartButton = styled.button`
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;

    opacity: 0.8;
    padding: 0;

    &:hover {
        background: transparent;
        box-shadow: 0px 0px 0px transparent;
        border: 0px solid transparent;
        text-shadow: 0px 0px 0px transparent;
        
        text-decoration: underline;
        cursor: pointer;
    }
`

export default class Product extends React.Component {
  constructor(props) {
    super(props);

    this.renderThumbs = this.renderThumbs.bind(this);
  }

  renderThumbs() {
    const item = this.props.data.markdownRemark
    return [<Img imgStyle={{ objectFit: "contain" }}
      fluid={item.frontmatter.featured_image.childImageSharp.fluid}
      alt={item.title + " thumbnail image"} key={9999} />].concat(item.frontmatter.extra_images.map((image, index) => {
        return (<Img imgStyle={{ objectFit: "contain" }}
          fluid={image.childImageSharp.fluid}
          key={index} alt={item.title + " thumbnail image"} />)
      }))
  }

  render() {
    const item = this.props.data.markdownRemark

    return (
      <Layout>
        <SEO title={item.frontmatter.title} />

        <Content>
          <StyledCarousel renderThumbs={this.renderThumbs}>
            <Img imgStyle={{ objectFit: "contain" }}
              fluid={item.frontmatter.featured_image.childImageSharp.fluid}
              alt={item.title + " image"} key={9999} />
            {item.frontmatter.extra_images.map((image, index) => {
              return (<Img imgStyle={{ objectFit: "contain" }}
                fluid={image.childImageSharp.fluid}
                alt={item.title + " image"} key={index} />)
            })}
          </StyledCarousel>
          <TextWrapper>
            <Title>{item.frontmatter.title}</Title>
            <Description>{item.frontmatter.description}</Description>
            <ProductPrice>{item.frontmatter.sold ?
              "SOLD" :
              item.frontmatter.price + " USD"}
            </ProductPrice>
            {!item.frontmatter.sold &&
              <AddToCartButton className="snipcart-add-item"
                data-item-id={item.frontmatter.title}
                data-item-price={item.frontmatter.price}
                data-item-description={item.frontmatter.description}
                data-item-image={item.frontmatter.featured_image.childImageSharp.fluid.src}
                data-item-name={item.frontmatter.title}>
                Add to cart
                    </AddToCartButton>
            }
          </TextWrapper>
        </Content>
      </Layout >
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }, sourceName: {eq: "products"}}) {
      html
      frontmatter {
        title
        sold
        description
        price
        extra_images {
          childImageSharp {
            fluid(maxWidth: 600) {
              src
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        featured_image {
          childImageSharp {
            fluid(maxWidth: 600) {
              src
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`