import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { Box } from "reflexbox";

import Title from "../../../title";
import Description from "../../../description";
import FullWidthImage from "../../../full-width-image";
import BackgroundStripe from "../../../background-stripe";
import MaxWidthContainer from "../../../max-width-container";
import Section from "../../../section";

const About = () => {
    const { brothersImage } = useStaticQuery(graphql`
        query {
            brothersImage: file(relativePath: { eq: "brothers.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <BackgroundStripe theme="dark">
            <MaxWidthContainer>
                <Section>
                    <Section.LeftContainer>
                        <FullWidthImage
                            fluid={brothersImage.childImageSharp.fluid}
                        />
                    </Section.LeftContainer>
                    <Section.DividerContainer />
                    <Section.RightContainer>
                        <Box mx={32} my={48}>
                            <Title light>About Mondora</Title>
                            <Description light>
                                We are a team of open-minded and kind people who
                                always offer each other help to overcome
                                obstacles and create cutting edge solutions to
                                problems.
                            </Description>
                        </Box>
                    </Section.RightContainer>
                </Section>
            </MaxWidthContainer>
        </BackgroundStripe>
    );
};

export default About;
