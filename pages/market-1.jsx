import ShopLayout1 from "components/layouts/ShopLayout1";
import SEO from "components/SEO";
import Setting from "components/Setting";
import Section1 from "pages-sections/market-1/Section1";
import Section10 from "pages-sections/market-1/Section10";
import Section11 from "pages-sections/market-1/Section11";
import Section12 from "pages-sections/market-1/Section12";
import Section13 from "pages-sections/market-1/Section13";
import Section2 from "pages-sections/market-1/Section2";
import Section3 from "pages-sections/market-1/Section3";
import Section4 from "pages-sections/market-1/Section4";
import Section5 from "pages-sections/market-1/Section5";
import Section6 from "pages-sections/market-1/Section6";
import Section7 from "pages-sections/market-1/Section7";
import Section8 from "pages-sections/market-1/Section8";
import api from "utils/api/market-1"; // =================================================================

// =================================================================
const MarketShop = (props) => {
  return (
    <ShopLayout1>
      <SEO title="Market v1" />
      <Section1 carouselData={props.mainCarouselData} />
      <Section2 flashDeals={props.flashDealsData} />
      <Section3 categoryList={props.topCategories} />
      <Section4
        topRatedList={props.topRatedProducts}
        topRatedBrands={props.topRatedBrands}
      />
      <Section5 newArrivalsList={props.newArrivalsList} />
      <Section13 bigDiscountList={props.bigDiscountList} />
      <Section6 carBrands={props.carBrands} carList={props.carList} />

      <Section7
        shops={props.mobileShops}
        brands={props.mobileBrands}
        title="Mobile Phones"
        productList={props.mobileList}
      />

      <Section8 />

      <Section7
        title="Optics / Watch"
        shops={props.opticsShops}
        brands={props.opticsBrands}
        productList={props.opticsList}
      />

      <Section10 categories={props.bottomCategories} />
      <Section11 moreItems={props.moreItems} />
      <Section12 serviceList={props.serviceList} />

      <Setting />
    </ShopLayout1>
  );
};

export async function getStaticProps() {
  const carList = await api.getCarList();
  const carBrands = await api.getCarBrands();
  const moreItems = await api.getMoreItems();
  const mobileList = await api.getMobileList();
  const opticsList = await api.getOpticsList();
  const mobileShops = await api.getMobileShops();
  const opticsShops = await api.getOpticsShops();
  const serviceList = await api.getServiceList();
  const mobileBrands = await api.getMobileBrands();
  const flashDealsData = await api.getFlashDeals();
  const opticsBrands = await api.getOpticsBrands();
  const bottomCategories = await api.getCategories();
  const topCategories = await api.getTopCategories();
  const topRatedBrands = await api.getTopRatedBrand();
  const mainCarouselData = await api.getMainCarousel();
  const newArrivalsList = await api.getNewArrivalList();
  const bigDiscountList = await api.getBigDiscountList();
  const topRatedProducts = await api.getTopRatedProduct();
  return {
    props: {
      carList,
      carBrands,
      moreItems,
      mobileList,
      opticsList,
      serviceList,
      mobileShops,
      opticsShops,
      mobileBrands,
      opticsBrands,
      topCategories,
      flashDealsData,
      topRatedBrands,
      newArrivalsList,
      bigDiscountList,
      mainCarouselData,
      topRatedProducts,
      bottomCategories,
    },
  };
}
export default MarketShop;
