import { Container, Typography, CssBaseline } from "@mui/material";
import SearchForm from "./components/SearchForm";
import BookList from "./components/BookList";
import { BookProvider } from "./contexts/BookContext";

export default function App() {
  return (
    <BookProvider>
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Busca de Livros - OpenLibrary
        </Typography>
        <SearchForm />
        <BookList />
      </Container>
    </BookProvider>
  );
}
