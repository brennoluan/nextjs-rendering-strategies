import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";
import { API_BASE_URL, API_ENDPOINTS } from "../../lib/config";
import { fetchCategories, fetchProducts } from "../../lib/data-layer";

export const metadata = {
  title: "Meteora | Loja de Roupas",
  description:
    "Descubra as ultimas tendencias em moda na Meteora. Camisetas, blusas, calcados e muito mais com qualidade e estilo.",
  keywords: "moda, roupas, camisetas, calcados, meteora",
  openGraph: {
    title: "Meteora | Loja de Roupas",
    description: "As ultimas tendencias em moda voce encontra aqui!",
    type: "website",
  },
};
export default async function Home() {
  const [categorias, produtos] = await Promise.all([
    fetchCategories(),
    fetchProducts(),
  ]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {categorias.length > 0 && <Categorias categorias={categorias} />}
        {produtos.length > 0 && <Produtos produtos={produtos} />}
      </main>
    </div>
  );
}
