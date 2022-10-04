import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Setting from "components/Setting";
import Section1 from "pages-sections/market-2/Section1";
import Section2 from "pages-sections/market-2/Section2";
import Section3 from "pages-sections/market-2/Section3";
import Section4 from "pages-sections/market-2/Section4";
import Section5 from "pages-sections/market-2/Section5";
import Section6 from "pages-sections/market-2/Section6";
import Section7 from "pages-sections/market-2/Section7";
import Section8 from "pages-sections/market-2/Section8";
import Section9 from "pages-sections/market-2/Section9";
import api from "utils/api/fashion-shop-2"; // =======================================================

// =======================================================
const Market = (props) => {
  const theme = useTheme();
  return (
    <ShopLayout1 topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Market v2" />
      <Box bgcolor="#F6F6F6">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 products={props.products} />
        <Section5 products={props.products} />
        <Section6 />
        <Section5 products={props.products.slice(1)} />
        <Section7 />
        <Section5 products={props.products.slice(3)} />
        <Section8 />
        <Section9 products={props.products} />
      </Box>

      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const products = await api.getProducts();
  const featureProducts = await api.getFeatureProducts();
  return {
    props: {
      products,
      featureProducts,
    },
  };
}
export default Market;
