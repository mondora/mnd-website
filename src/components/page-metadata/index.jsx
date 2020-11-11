import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const PageMetadata = ({ title, description, allowRobots }) => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    description
                    robots
                }
            }
        }
    `);

    const defaults = data.site.siteMetadata;
    const seo = {
        title: title || defaults.title,
        description: description || defaults.description,
        robots: allowRobots ? defaults.robots : "none",
    };

    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="robots" content={seo.robots} />
        </Helmet>
    );
};

PageMetadata.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    allowRobots: PropTypes.bool,
};

export default PageMetadata;
