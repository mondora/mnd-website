import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";

import styled from "styled-components";
import Image from "gatsby-image";

import SquareButton from "../square-button";
import ParagraphTitle from "../paragraph-title";
import Swirl from "../swirl";

const RegionContainer = styled.div`
    background-color: white;
    margin: 20px;
    height: fit-content;
    text-align: center;
    padding-bottom: 32px;
`;
const RegionNumber = styled.div`
    font-size: ${props => props.theme.size.text.megaM};
    font-weight: bold;
    width: 100%;
`;

const RegionMiniature = ({ data }) => (
    <RegionContainer>
        {data.graphic && (
            <Image fluid={data.graphic.fluid} alt={data.graphic.title} />
        )}
        <RegionNumber>{data.people ? data.people.length : "0"}</RegionNumber>
        <Swirl margin={"auto"} />
        <ParagraphTitle>{data.name}</ParagraphTitle>
        {data.buttonText && (
            <Link to={`../regions/${data.slug}`}>
                <SquareButton theme="light">{data.buttonText}</SquareButton>
            </Link>
        )}
    </RegionContainer>
);
RegionMiniature.propTypes = {
    data: PropTypes.object
};
export default RegionMiniature;
