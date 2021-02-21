import React from "react";

import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import PageMetadata from "../components/page-metadata";
import Header from "../components/header";
import Carousel from "../components/carousel";
import BackgroundStripe from "../components/background-stripe";
import PersonSlide from "../components/person-slide";

const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    centerMode: true,
    centerPadding: "48px",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,

                centerPadding: "0px"
            }
        }
    ]
};

const RegionTemplate = ({ data }) => (
    <Layout>
        <PageMetadata
            title={
                data.contentfulRegion.metaTitle &&
                data.contentfulRegion.metaTitle.metaTitle
            }
            description={
                data.contentfulRegion.metaDescr &&
                data.contentfulRegion.metaDescr.metaDescr
            }
        />
        <Header
            sideOnTop={"left"}
            left={
                data.contentfulRegion.leftHeader &&
                data.contentfulRegion.leftHeader.childMarkdownRemark.htmlAst
            }
            leftButton={
                data.contentfulRegion.returnButton &&
                data.contentfulRegion.returnButton
            }
            rightImage={
                data.contentfulRegion.graphic && data.contentfulRegion.graphic
            }
        />
        <BackgroundStripe theme={"light"}>
            <Carousel {...settings}>
                {data.contentfulRegion.people &&
                    data.contentfulRegion.people.map((person, i) => (
                        <PersonSlide key={i} person={person} />
                    ))}
            </Carousel>
        </BackgroundStripe>
    </Layout>
);

RegionTemplate.propTypes = {
    data: PropTypes.object
};

export default RegionTemplate;

export const query = graphql`
    query($slug: String!) {
        contentfulRegion(slug: { eq: $slug }) {
            name
            metaDescr {
                metaDescr
            }
            metaTitle {
                metaTitle
            }
            leftHeader {
                childMarkdownRemark {
                    htmlAst
                }
            }
            graphic {
                title
                fluid(quality: 100) {
                    ...GatsbyContentfulFluid
                }
            }
            returnButton {
                text
                link
            }
            people {
                name
                role
                description {
                    description
                }
                picture {
                    title
                    fixed(width: 40) {
                        ...GatsbyContentfulFixed
                    }
                }
            }
        }
    }
`;
