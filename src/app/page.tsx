import QuickSearch from "@/app/components/QuickSearch";
import TripSearch from "./components/TripSearch";
import RecommendedTrips from "./components/RecommendedTrips";

export default function Home() {
  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendedTrips />
    </div>
  );
}
