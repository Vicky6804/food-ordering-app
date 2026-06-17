export const CDN_URL =
  //'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/';
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://png.pngtree.com/png-vector/20230217/ourmid/pngtree-food-logo-design-for-restaurant-and-business-png-image_6604922.png";

// Use your own Vercel API endpoints instead of direct Swiggy API
export const RESTAURANTS_API =
  process.env.NODE_ENV === "production"
    ? "https://food-ordering-app-rouge-one.vercel.app/api/restaurants"
    : "https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const MENU_API =
  process.env.NODE_ENV === "production"
    ? "https://food-ordering-app-rouge-one.vercel.app/api/restaurantMenu?resId="
    : "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.080022764942289&lng=77.03348480165005&restaurantId=";
