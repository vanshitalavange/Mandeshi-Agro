import "./home.css";
import { Banner, CategoryList, BestDeals } from "../../components/index";
export function Home() {
  return (
    <main className="page-main">
      <Banner />
      <CategoryList />
      <BestDeals />
    </main>
  );
}
