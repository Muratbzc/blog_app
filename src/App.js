import AuthProvider from "./contexts/AuthContext";
import BlogProvider from "./contexts/BlogContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <AppRouter />
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;
