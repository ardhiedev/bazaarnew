import { Box } from "@mui/material";
import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Setting from "components/Setting";
import Section1 from "pages-sections/fashion-shop-3/Section1";
import Section2 from "pages-sections/fashion-shop-3/Section2";
import Section3 from "pages-sections/fashion-shop-3/Section3";
import Section4 from "pages-sections/fashion-shop-3/Section4";
import Section5 from "pages-sections/fashion-shop-3/Section5";
import Section6 from "pages-sections/fashion-shop-3/Section6";
import api from "utils/api/fashion-shop-2"; // =======================================================

// =======================================================
const FashionShop3 = (props) => {
  return (
    <ShopLayout1 showTopbar={false}>
      <SEO title="Fashion shop template v3" />
      <Box bgcolor="white" pb={8}>
        <Section1 />
        <Section2 products={props.products} />
        <Section3 />
        <Section4 />
        <Section5 products={props.featureProducts} />
        <Section6 />
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
export default FashionShop3;
