import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { Box } from "reflexbox";

import Divider from "../../../divider";
import FullWidthImage from "../../../full-width-image";
import Section from "../../../section";
import MaxWidthContainer from "../../../max-width-container";
import Subtitle from "../../../subtitle";

const Benefit = () => {
    const { impactImage } = useStaticQuery(graphql`
        query {
            impactImage: file(relativePath: { eq: "home/impact.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <MaxWidthContainer>
            <Section>
                <Section.LeftContainer />
                <Section.DividerContainer>
                    <Divider />
                </Section.DividerContainer>
                <Section.RightContainer>
                    <Box my={48} backgroundColor="white">
                        <h1>Benefit projects</h1>
                        <Subtitle>
                            We are a team of open-minded and kind people who
                            always offer each other help to overcome obstacles
                            and create cutting edge solutions to problems.
                        </Subtitle>
                    </Box>
                </Section.RightContainer>
            </Section>

            <FullWidthImage fluid={impactImage.childImageSharp.fluid} />
        </MaxWidthContainer>
    );
};

export default Benefit;
