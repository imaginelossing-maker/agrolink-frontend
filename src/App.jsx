
import ProfileProvider from "./context/ProfileContext";
import TokenProvider, { TokenContext } from "./context/TokenContext";
import AppRoutes from "./pages/Navigation";

export default function App() {
  return (
    <TokenProvider>
      <ProfileProvider>
        <AppRoutes />
      </ProfileProvider>
    </TokenProvider>
  );
}