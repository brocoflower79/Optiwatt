import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent as MuiCardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
  Button as MuiButton,
  Box,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { ReactComponent as Vector } from "../../assets/images/vector.svg";
import { ReactComponent as Sdge } from "../../assets/images/sdge.svg";
import { ReactComponent as Logo } from "../../assets/images/logo-colored.svg";
import { ReactComponent as Check } from "../../assets/images/check.svg";
import leap from "../../assets/images/leap.png";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  padding: 24px 48px 32px 48px;
`;

const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Button = styled(MuiButton)(spacing);

const supportText = [
  "Help reduce CO2 and grid blackouts by delaying charging during high electricity demand.",
  "Optiwatt will notify you prior to these rare events and automatically resume charging immediately afterwards.",
  "You can opt-out at anytime.",
];

const SdgeIcon = styled(Sdge)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  margin-top: -2px;
  width: 50px;
  height: 24px;
  vertical-align: middle;
  display: inline;
`;

const LogoIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  margin-top: -2px;
  width: 85.71px;
  height: 24px;
  vertical-align: middle;
  display: inline;
`;

const VectorIcon = styled(Vector)`
  margin-left: 10px;
  margin-right: 10px;
  width: 12px;
  height: 6px;
  vertical-align: middle;
  display: inline;
`;

const CheckIcon = styled(Check)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  margin-top: -2px;
  width: 12px;
  height: 12px;
  vertical-align: middle;
  display: inline;
`;

const Leap = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 24px;
`;

const UtilityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 31px;
  margin-bottom: 28px;
`;

const UtilityItem = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px 17px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 12px 0px;
`;

const StyledAuthorizeButton = styled(Button)`
  background-color: #af4bfb;
  border-radius: 20px;
  width: 128px;
  font-size: 10px;
  margin-right: 16px;
  color: #ffffff;
`;

const StyledSkipForLaterButton = styled(Button)`
  margin-right: 16px;
  color: #af4bfb;
  font-size: 10px;
`;

const StyledTitleTypography = styled(Typography)`
  font-size: 14px;
  line-height: 19px;
  color: #343434;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StyledSummaryTypography = styled(Typography)`
  font-size: 12px;
  line-height: 16px;
  color: #343434;
  margin-bottom: 10px;
`;

const StyledTypography = styled(Typography)`
  font-size: 8px;
  line-height: 11px;
  color: #343434;
  marign-bottom: 12px;
`;

const StyledSummaryContainerTypography = styled.ul`
  padding-left: 16px;
`;

const SelectUitiltyProvider = () => {
  return (
    <Card mb={6}>
      <CardContent>
        <Box textAlign="center">
          <StyledTitleTypography>Select Utility</StyledTitleTypography>
          <StyledSummaryTypography>
            Select your ultility provider...
          </StyledSummaryTypography>
        </Box>
        <Box display="flex" alignItems="center">
          <CheckIcon />
          <Typography variant="body2" gutterBottom>
            SDG&E
          </Typography>
        </Box>
        <Divider />
        <UtilityContainer>
          <UtilityItem>
            <LogoIcon />
          </UtilityItem>
          <VectorIcon />
          <UtilityItem>
            <SdgeIcon />
            <Leap src={leap} alt="English" />
          </UtilityItem>
        </UtilityContainer>
        <Box pl={7.75} pr={7.75}>
          <StyledTitleTypography>Support Your Local Grid</StyledTitleTypography>
          <StyledSummaryContainerTypography>
            {supportText.map((text, index) => (
              <li key={index}>
                <StyledSummaryTypography variant="body2" gutterBottom>
                  {text}
                </StyledSummaryTypography>
              </li>
            ))}
          </StyledSummaryContainerTypography>
          <ButtonContainer>
            <StyledAuthorizeButton>Authorize</StyledAuthorizeButton>
            <StyledSkipForLaterButton>Skip for later</StyledSkipForLaterButton>
          </ButtonContainer>
          <StyledTypography variant="body2" gutterBottom>
            By clicking Authorize, Leap, our 3rd party provider, will connect to
            your ultility company meter and enable Optiwatt to support the grid.
          </StyledTypography>
          <Spacer mb={4} />
        </Box>
      </CardContent>
    </Card>
  );
};

const SelectUtility = () => {
  return (
    <React.Fragment>
      <Helmet title="Alerts" />
      <Typography variant="h3" gutterBottom display="inline">
        Alerts
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Components
        </Link>
        <Typography>SelectUtility</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs />
        <Grid item xl={6} lg={6} md={8} sm={10} xs={12}>
          <SelectUitiltyProvider />
        </Grid>
        <Grid item xs />
      </Grid>
    </React.Fragment>
  );
};

export default SelectUtility;