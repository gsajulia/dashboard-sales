import styles from "./styles.module.css";
import Nps from "../components/nps/nps";
import CircleCard from "../components/circleCard/circleCard";
import WeekSales from "../components/weekSales/weekSales";
import Footer from "../components/footer/footer";

function HomePage() {
  const allSales = {
    title: "Vendas Fechadas",
    salesExpected: 100,
    salesPerformed: 70,
  };

  const goalSales = {
    title: "Meta Mensal",
    salesExpected: 70,
    salesPerformed: 63,
  };

  return (
    <div className={styles.container}>
      <div className={styles.indicatorsContainer}>
        <Nps />
        <CircleCard
          title={allSales.title}
          percentage={(allSales.salesPerformed / allSales.salesExpected) * 100}
          salesExpected={allSales.salesExpected}
          salesPerformed={allSales.salesPerformed}
        />
        <CircleCard
          title={goalSales.title}
          percentage={
            ((goalSales.salesPerformed / goalSales.salesExpected) * 100) / 1000
          }
          currencyReal
          currencyThousand
          salesExpected={goalSales.salesExpected}
          salesPerformed={goalSales.salesPerformed / 1000}
        />
      </div>
      <div className={styles.weekSales}>
        <WeekSales />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
