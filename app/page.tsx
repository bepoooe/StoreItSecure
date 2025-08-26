import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import LandingPage from "@/components/LandingPage";

const HomePage = async () => {
  try {
    const currentUser = await getCurrentUser();

    // If user is authenticated, redirect to dashboard
    if (currentUser) {
      redirect("/dashboard");
    }
  } catch (error) {
    // No session - user is not authenticated, show landing page
    console.log("No session found, showing landing page");
  }

  // Show landing page for non-authenticated users
  return <LandingPage />;
};

export default HomePage;
