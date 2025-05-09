import { Typography, CircularProgress, Card, CardContent, Grid, Box } from "@mui/material";
  import { useBookContext } from "../contexts/BookContext";
  
  export default function BookList() {
    const { state } = useBookContext();
  
    if (state.loading)
      return (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      );
  
    if (state.error)
      return (
        <Typography color="error" variant="body2" align="center" mt={2}>
          {state.error}
        </Typography>
      );
  
    if (!state.results.length)
      return (
        <Typography variant="body1" align="center" mt={2}>
          Nenhum resultado encontrado.
        </Typography>
      );
  
    return (
      <Grid container spacing={2}>
        {state.results.map((book, idx) => (
          <Grid item xs={12} md={6} lg={4} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Autor: {book.author_name?.join(", ") || "Desconhecido"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ano: {book.first_publish_year || "N/A"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
  