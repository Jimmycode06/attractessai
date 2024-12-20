"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter(); // Permet de naviguer programmé dans Next.js

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    // Simulez une requête API de connexion
    try {
      console.log("Tentative de connexion avec :", { email, password });

      // Remplacez ceci par un appel réel à votre backend
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Redirige vers le tableau de bord après connexion réussie
        router.push("/dashboard");
      } else {
        alert("Échec de la connexion. Vérifiez vos identifiants.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f5f5",
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}
          >
            Connexion
          </Typography>

          <form onSubmit={handleLogin}>
            <Stack spacing={2}>
              {/* Champ email */}
              <TextField
                label="Adresse e-mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
              />

              {/* Champ mot de passe */}
              <TextField
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                required
              />

              {/* Bouton de connexion */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Se connecter
              </Button>
            </Stack>
          </form>

          {/* Lien pour s'inscrire */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 2, textAlign: "center" }}
          >
            Pas encore inscrit ?{" "}
            <a
              href="/register"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              Créer un compte
            </a>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
