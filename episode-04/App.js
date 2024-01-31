import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="app-logo"
          alt="app-logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705795200&semt=ais"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "697613",
      name: "Domino's Pizza",
      cloudinaryImageId: "0e7bc46a0e74d28b0d88e1fad2830dbc",
      locality: "Babarpur",
      areaName: "100 Ft Road",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-babarpur-100-ft-road-delhi-697613",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "64034",
      name: "The Burger Club",
      cloudinaryImageId: "euge0rsnrmlzqfevuvuq",
      locality: "Main Vikas Marg",
      areaName: "Laxmi Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["American", "Beverages", "Desserts"],
      avgRating: 4.1,
      parentId: "2285",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 9.5,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-burger-club-main-vikas-marg-laxmi-nagar-delhi-64034",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "797618",
      name: "Burgrill - The Win Win Burger",
      cloudinaryImageId: "f596863116da4b4688b48e813e25000d",
      locality: "Mayur Vihar",
      areaName: "IP extension",
      costForTwo: "₹250 for two",
      cuisines: ["Burgers", "Healthy Food"],
      avgRating: 4.3,
      parentId: "302366",
      avgRatingString: "4.3",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 8.8,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "8.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-mayur-vihar-ip-extension-delhi-797618",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "64268",
      name: "QWICK GRAB KATHI ROLLS and MORE",
      cloudinaryImageId: "l4er63qlpsoaxseewgsr",
      locality: "Satnam Park",
      areaName: "Chander Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food"],
      avgRating: 4.3,
      parentId: "163590",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/qwick-grab-kathi-rolls-and-more-satnam-park-chander-nagar-delhi-64268",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "595189",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Yamuna Vihar",
      areaName: "Shahdara",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-yamuna-vihar-shahdara-delhi-595189",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "152953",
      name: "Burger Singh (Big Punjabi Burgers)",
      cloudinaryImageId: "972a37599772cdc7df93a0855ad87591",
      locality: "D Block",
      areaName: "Krishna Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Fast Food", "Snacks"],
      avgRating: 4.1,
      parentId: "375065",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-d-block-krishna-nagar-delhi-152953",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "653368",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Chhaju Colony",
      areaName: "Durgapuri",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 3.9,
      parentId: "2",
      avgRatingString: "3.9",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹899",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-chhaju-colony-durgapuri-delhi-653368",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "416254",
      name: "Punjabi's Veg Grill",
      cloudinaryImageId: "qkfbfgxpormzzophz9zr",
      locality: "Jheel Khuranja",
      areaName: "Geeta Colony",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tandoor"],
      avgRating: 3.6,
      parentId: "4209",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/punjabis-veg-grill-jheel-khuranja-geeta-colony-delhi-416254",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "601967",
      name: "Vada Bhau",
      cloudinaryImageId: "dwbglqef0qr1p4nc5lh4",
      locality: "Gandhi Nagar",
      areaName: "Shahdara",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Indian"],
      avgRating: 3.2,
      parentId: "356053",
      avgRatingString: "3.2",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/vada-bhau-gandhi-nagar-shahdara-delhi-601967",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "6976132",
      name: "Domino's Pizza",
      cloudinaryImageId: "0e7bc46a0e74d28b0d88e1fad2830dbc",
      locality: "Babarpur",
      areaName: "100 Ft Road",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 02:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-babarpur-100-ft-road-delhi-697613",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "6403411",
      name: "The Burger Club",
      cloudinaryImageId: "euge0rsnrmlzqfevuvuq",
      locality: "Main Vikas Marg",
      areaName: "Laxmi Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["American", "Beverages", "Desserts"],
      avgRating: 4.1,
      parentId: "2285",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 9.5,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/the-burger-club-main-vikas-marg-laxmi-nagar-delhi-64034",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "7976018",
      name: "Burgrill - The Win Win Burger",
      cloudinaryImageId: "f596863116da4b4688b48e813e25000d",
      locality: "Mayur Vihar",
      areaName: "IP extension",
      costForTwo: "₹250 for two",
      cuisines: ["Burgers", "Healthy Food"],
      avgRating: 4.3,
      parentId: "302366",
      avgRatingString: "4.3",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 8.8,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "8.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burgrill-the-win-win-burger-mayur-vihar-ip-extension-delhi-797618",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "6421168",
      name: "QWICK GRAB KATHI ROLLS and MORE",
      cloudinaryImageId: "l4er63qlpsoaxseewgsr",
      locality: "Satnam Park",
      areaName: "Chander Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food"],
      avgRating: 4.3,
      parentId: "163590",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 5.8,
        serviceability: "SERVICEABLE",
        slaString: "35 mins",
        lastMileTravelString: "5.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹499",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/qwick-grab-kathi-rolls-and-more-satnam-park-chander-nagar-delhi-64268",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "5905189",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Yamuna Vihar",
      areaName: "Shahdara",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 3.8,
      parentId: "721",
      avgRatingString: "3.8",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-yamuna-vihar-shahdara-delhi-595189",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "1521953",
      name: "Burger Singh (Big Punjabi Burgers)",
      cloudinaryImageId: "972a37599772cdc7df93a0855ad87591",
      locality: "D Block",
      areaName: "Krishna Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Fast Food", "Snacks"],
      avgRating: 4.1,
      parentId: "375065",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-d-block-krishna-nagar-delhi-152953",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "6533168",
      name: "Subway",
      cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
      locality: "Chhaju Colony",
      areaName: "Durgapuri",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 3.9,
      parentId: "2",
      avgRatingString: "3.9",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 01:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹899",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-chhaju-colony-durgapuri-delhi-653368",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "4116254",
      name: "Punjabi's Veg Grill",
      cloudinaryImageId: "qkfbfgxpormzzophz9zr",
      locality: "Jheel Khuranja",
      areaName: "Geeta Colony",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tandoor"],
      avgRating: 3.6,
      parentId: "4209",
      avgRatingString: "3.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.7,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "5.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/punjabis-veg-grill-jheel-khuranja-geeta-colony-delhi-416254",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "60001967",
      name: "Vada Bhau",
      cloudinaryImageId: "dwbglqef0qr1p4nc5lh4",
      locality: "Gandhi Nagar",
      areaName: "Shahdara",
      costForTwo: "₹200 for two",
      cuisines: ["Snacks", "Indian"],
      avgRating: 3.2,
      parentId: "356053",
      avgRatingString: "3.2",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-31 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-88516589-c2ef-4587-9d79-0b0e48ad9f97",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/vada-bhau-gandhi-nagar-shahdara-delhi-601967",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
