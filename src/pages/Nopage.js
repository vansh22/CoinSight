import React from "react";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function Nopage() {
  return (
    <Container style={{ overflow: "hidden", fontFamily: "Montserrat" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "89vh",
        }}
      >
        <Typography variant="h1" style={{ color: "white" }}>
          404
        </Typography>
        <Typography variant="h6" style={{ color: "white" }}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Link
          to="/"
          variant="contained"
          style={{
            border: "1px solid gold",
            borderRadius: 5,
            marginTop: 10,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            fontFamily: "Montserrat",
            cursor: "pointer",
            backgroundColor: "gold",
            color: "black",
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "black",
              color: "gold",
            },
            width: "22%",
            textAlign: "center",
          }}
        >
          Back Home
        </Link>
      </Box>
    </Container>
  );
}
