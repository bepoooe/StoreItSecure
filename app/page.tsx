import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import LandingPage from "@/components/LandingPage";

export const dynamic = "force-dynamic";

const HomePage = async () => {
  let currentUser = null;
  
  try {
    currentUser = await getCurrentUser();

    // If user is authenticated, they can still see the landing page
    // but with different UI (dashboard button instead of sign up)
  } catch (error) {
    // No session - user is not authenticated, show landing page
    console.log("No session found, showing landing page");
  }

  // Show landing page for both authenticated and non-authenticated users
  // but with different UI based on authentication status
  return <LandingPage user={currentUser} />;
};

export default HomePage;
