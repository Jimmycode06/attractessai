"use client"; // Pour activer les hooks React dans les composants client

import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

// Switch personnalisé de style iOS
const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 22,
    height: 22,
    boxSizing: "border-box",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function PricingPage() {
  const [isAnnuel, setIsAnnuel] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAnnuel(event.target.checked);
  };

  // Fonction pour calculer le prix basé sur le mode sélectionné
  const getPrice = (basePrice: number) =>
    isAnnuel ? basePrice * 12 * 0.9 : basePrice;

  return (
    <Box sx={{ p: 3, bgcolor: "#ffffff" }}>
      {/* Switch pour basculer entre Mensuel et Annuel */}
      <FormGroup>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Mensuel
          </Typography>
          <IOSSwitch checked={isAnnuel} onChange={handleChange} />
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            Annuel
          </Typography>
        </Stack>
      </FormGroup>

      {/* Cartes des plans */}
      <Stack direction="row" spacing={2} justifyContent="center">
        {/* Plan Basic */}
        <Card sx={{ width: 300, textAlign: "center", boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Basic
            </Typography>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {getPrice(10).toFixed(2)} €
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Idéal pour les particuliers.
            </Typography>
            <Button variant="contained" color="primary">
              Choisir
            </Button>
          </CardContent>
        </Card>

        {/* Plan Pro */}
        <Card
          sx={{
            width: 300,
            textAlign: "center",
            boxShadow: 3,
            border: "2px solid #65C466",
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Pro
            </Typography>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {getPrice(20).toFixed(2)} €
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Parfait pour les petites entreprises.
            </Typography>
            <Button variant="contained" color="success">
              Choisir
            </Button>
          </CardContent>
        </Card>

        {/* Plan Premium */}
        <Card sx={{ width: 300, textAlign: "center", boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Premium
            </Typography>
            <Typography variant="h4" sx={{ mb: 1 }}>
              {getPrice(30).toFixed(2)} €
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Idéal pour les grandes entreprises.
            </Typography>
            <Button variant="contained" color="secondary">
              Choisir
            </Button>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
