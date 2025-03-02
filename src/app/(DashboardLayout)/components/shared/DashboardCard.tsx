import React from "react";
import { Card, CardContent, Typography, Stack, Box } from "@mui/material";

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element | any;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
  bgColor?: string;
  titleColor?: string;
  showTitles?: boolean;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
  bgColor = "#1E1E2F",
  titleColor = "#FFFFFF",
  showTitles = true,
}: Props) => {
  return (
    <Card sx={{ padding: 0, backgroundColor: bgColor }} elevation={9} variant={undefined}>
      {cardheading && showTitles ? (
        <CardContent>
          <Typography variant="h6" sx={{ color: titleColor}}>
            {headtitle}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" sx={{ color: titleColor }}>
            {headsubtitle}
          </Typography>
        </CardContent>
      ) : (
        <CardContent sx={{ p: "30px" }}>
          {title && showTitles ? (
            <Stack
              direction="row"
              // spacing={2}
              justifyContent="space-between"
              alignItems={"center"}
              mb={3}
            >
              <Box>
                <Typography sx={{ color: titleColor }} variant="h5">{title}</Typography>
                {subtitle ? (
                  <Typography variant="subtitle2" color="textSecondary" sx={{ color: titleColor }}>
                    {subtitle}
                  </Typography>
                ) : (
                  ""
                )}
              </Box>
              {action}
            </Stack>
          ) : null}

          {children}
        </CardContent>
      )}

      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
