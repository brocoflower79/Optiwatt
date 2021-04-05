import React from "react";
import styled from "styled-components/macro";
import { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent as MuiCardContent,
  Dialog,
  DialogContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
  FormControl as MuiFormControl,
  Button as MuiButton,
  Box,
  MenuItem,
  InputLabel,
  Select as MuiSelect,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { ReactComponent as Vector } from "../../assets/images/vector.svg";
import { ReactComponent as Sdge } from "../../assets/images/sdge.svg";
import { ReactComponent as Logo } from "../../assets/images/logo-colored.svg";
import { ReactComponent as Check } from "../../assets/images/check.svg";
import leap from "../../assets/images/leap.png";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  ${(props) => props.theme.breakpoints.up("xs")} {
    padding: 24px 8px 32px 8px;
  }
  ${(props) => props.theme.breakpoints.up("sm")} {
    padding: 24px 24px 32px 24px;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    padding: 24px 32px 32px 32px;
  }
  ${(props) => props.theme.breakpoints.up("lg")} {
    padding: 24px 48px 32px 48px;
  }
  ${(props) => props.theme.breakpoints.up("xl")} {
    padding: 24px 48px 32px 48px;
  }
`;

const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Button = styled(MuiButton)(spacing);

const FormControlSpacing = styled(MuiFormControl)(spacing);

const Select = styled(MuiSelect)(spacing);

const FormControl = styled(FormControlSpacing)`
  min-width: 148px;
`;

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

const vectorAnimation = keyframes`
 0% {
   filter: drop-shadow(0px 0px 0px #3a9bfb);
   fill: #3a9bfb;
 }
 50% {
   filter: drop-shadow(0px 0px 6px #3a9bfb);
   fill: #3a9bfb;
 }
 100% {
   filter: drop-shadow(0px 0px 0px #3a9bfb);
   fill: #3a9bfb;
 }
`;

const VectorIcon = styled(Vector)`
  margin-left: 10px;
  margin-right: 10px;
  width: 12px;
  height: 6px;
  vertical-align: middle;
  display: inline;
  animation-name: ${vectorAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
`;

const CheckIcon = styled(Check)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  margin-top: 16px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  display: inline;
`;

const Leap = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 24px;
`;

const UtilityContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 31px;
  margin-bottom: 28px;
  ${(props) => props.theme.breakpoints.down("xs")} {
    @media screen and (max-width: 360px) {
      display: block;
      text-align: center;
    }
    @media screen and (min-width: 360px) {
      display: flex;
    }
  }
  ${(props) => props.theme.breakpoints.up("sm")} {
    display: flex;
  }
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

const StyledAllowAuthorizeButton = styled(Button)`
  background-color: #3a9bfb;
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
  text-align: center;
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

const StyledSummaryContainer = styled.ul`
  padding-left: 16px;
`;

const StyledSelectWrapper = styled(FormControl)`
  width: 100%;
`;

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    ${(props) => props.theme.breakpoints.down("xs")} {
      @media screen and (max-width: 360px) {
        min-height: 250px;
      }
      @media screen and (min-width: 360px) {
        min-height: 400px;
      }
    }
    ${(props) => props.theme.breakpoints.up("sm")} {
      min-height: 700px;
    }
  }
`;

const StyledDialogContent = styled(DialogContent)`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledAuthorized = styled.div`
  text-align: center;
  margin-top: 32px;
`;

const SelectUitiltyProvider = () => {
  const [utility, setUtility] = React.useState("");
  const [openAuthorize, setOpenAuthorize] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [authorized, setAuthorized] = React.useState(false);

  const handleOpenAuthorizeDialog = () => {
    setOpenAuthorize(true);
  };

  const handleOpenSuccessDialog = () => {
    setOpenAuthorize(false);
    setOpenSuccess(true);
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccess(false);
    setAuthorized(true);
  };

  const handleChange = (event) => {
    setUtility(event.target.value);
  };
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
          {utility !== "" && <CheckIcon />}
          <StyledSelectWrapper>
            <InputLabel id="demo-simple-select-label">Utility</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={utility}
              onChange={handleChange}
            >
              <MenuItem value={10}>SDGE1</MenuItem>
              <MenuItem value={20}>SDGE2</MenuItem>
              <MenuItem value={30}>SDGE3</MenuItem>
            </Select>
          </StyledSelectWrapper>
        </Box>
        {authorized && (
          <StyledAuthorized>
            <StyledTitleTypography>
              Thanks for Supporting the Local Grid!
            </StyledTitleTypography>
            <StyledSummaryTypography>
              Successfully linked Optiwatt with SDG&E.
            </StyledSummaryTypography>
          </StyledAuthorized>
        )}
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
        {!authorized && (
          <Box pl={7.75} pr={7.75}>
            <StyledTitleTypography>
              Support Your Local Grid
            </StyledTitleTypography>
            <StyledSummaryContainer>
              {supportText.map((text, index) => (
                <li key={index}>
                  <StyledSummaryTypography variant="body2" gutterBottom>
                    {text}
                  </StyledSummaryTypography>
                </li>
              ))}
            </StyledSummaryContainer>
            <ButtonContainer>
              <StyledAuthorizeButton
                onClick={handleOpenAuthorizeDialog}
                variant="contained"
              >
                Authorize
              </StyledAuthorizeButton>
              <StyledSkipForLaterButton>
                Skip for later
              </StyledSkipForLaterButton>
            </ButtonContainer>
            <StyledTypography variant="body2" gutterBottom>
              By clicking Authorize, Leap, our 3rd party provider, will connect
              to your ultility company meter and enable Optiwatt to support the
              grid.
            </StyledTypography>
          </Box>
        )}
        <Spacer mb={4} />
      </CardContent>
      <StyledDialog
        open={openAuthorize}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xl"}
        fullWidth={true}
      >
        <StyledDialogContent>
          <UtilityContainer>
            <SdgeIcon />
          </UtilityContainer>
          <StyledTitleTypography>
            SDG&E Utility Webpage / Authorization Flow
          </StyledTitleTypography>
          <StyledAllowAuthorizeButton
            onClick={handleOpenSuccessDialog}
            variant="contained"
            autoFocus
          >
            Authorize Optiwatt
          </StyledAllowAuthorizeButton>
        </StyledDialogContent>
      </StyledDialog>

      <StyledDialog
        open={openSuccess}
        onClose={handleCloseSuccessDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"xl"}
        fullWidth={true}
      >
        <StyledDialogContent>
          <LogoIcon />
          <CheckIcon />
          <StyledTitleTypography>Optiwatt Success Page</StyledTitleTypography>
          <StyledSummaryTypography>
            Successfully linked Optiwatt with SDG&E.
          </StyledSummaryTypography>
          <StyledAllowAuthorizeButton
            onClick={handleCloseSuccessDialog}
            color="primary"
            autoFocus
          >
            Close Window
          </StyledAllowAuthorizeButton>
        </StyledDialogContent>
      </StyledDialog>
    </Card>
  );
};

const SelectUtility = () => {
  return (
    <React.Fragment>
      <Helmet title="Alerts" />
      <Typography variant="h3" gutterBottom display="inline">
        Select Utility
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
