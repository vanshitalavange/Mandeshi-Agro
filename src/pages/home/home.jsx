import "./home.css";
import { CategoryList } from "../../components/CategoryList/CategoryList";
import { BestDeals } from "../../components/BestDeals/BestDeals";
import { Banner } from "../../components/Banner/Banner";
export function Home() {
  return (
    <main className="page-main">
      <Banner />
      <CategoryList />
      <BestDeals />
    </main>
  );
}
