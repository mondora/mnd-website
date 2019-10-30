import React from "react";
import Grid from "../../../grid";
import InfoAndSocials from "../sections/info-and-socials";
import About from "../sections/about";
import WorkWithUs from "../sections/work-with-us";
import Impact from "../sections/impact";
import SideProjects from "../sections/side-projects";

const TabletFooter = () => (
    <Grid container justify="center">
        <Grid item container xs={11} align="center">
            <Grid item container>
                <Grid item container>
                    <InfoAndSocials />
                </Grid>
            </Grid>
            <Grid item grow={1} />
            <Grid item container direction="column" spacingRatio={8}>
                <Grid item container spacingRatio={8}>
                    <Grid item container>
                        <Grid item>
                            <About />
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <WorkWithUs />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container spacingRatio={4}>
                    <Grid item container>
                        <Grid item>
                            <Impact />
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <SideProjects />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
);

export default TabletFooter;