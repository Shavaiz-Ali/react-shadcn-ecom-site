
// whychooseus section  images
import icon_1 from "@/assets/images/why-choose-us-icons/shipping.png";
import icon_2 from "@/assets/images/why-choose-us-icons/gifts.png";
import icon_3 from "@/assets/images/why-choose-us-icons/headphone.png";
import icon_4 from "@/assets/images/why-choose-us-icons/aford.png";
import icon_5 from "@/assets/images/why-choose-us-icons/pocket.png";

// product-slide-image
import slide_1 from "@/assets/images/product-slide-images/laptop.webp";
import slide_2 from "@/assets/images/product-slide-images/jbl.webp";
import slide_3 from "@/assets/images/product-slide-images/lcd.webp";
import slide_4 from "@/assets/images/product-slide-images/camera.webp";
import slide_5 from "@/assets/images/product-slide-images/remote.webp";
import slide_6 from "@/assets/images/product-slide-images/mobile.webp";
import slide_7 from "@/assets/images/product-slide-images/mobile-1.webp";
import slide_8 from "@/assets/images/product-slide-images/lcd-1.webp";
import slide_9 from "@/assets/images/product-slide-images/watch.webp";
import slide_10 from "@/assets/images/product-slide-images/tablet.webp";

// featured images
import featured_1 from "@/assets/images/featured-images/slide-14.png";
import featured_2 from "@/assets/images/featured-images/slide-13.png";
import featured_3 from "@/assets/images/featured-images/sllide-12.png";
import featured_4 from "@/assets/images/featured-images/slide-11.png";
import featured_5 from "@/assets/images/featured-images/slide-10.png";
import featured_6 from "@/assets/images/featured-images/slide-9.png";
import featured_7 from "@/assets/images/featured-images/slide-8.png";
import featured_8 from "@/assets/images/featured-images/slide-7.png";
import featured_9 from "@/assets/images/featured-images/slide-6.png";
import featured_10 from "@/assets/images/featured-images/slide-5.png";
import featured_11 from "@/assets/images/featured-images/slide-4.png";
import featured_12 from "@/assets/images/featured-images/slide-3.png";
import featured_13 from "@/assets/images/featured-images/slide-2.png";
import featured_14 from "@/assets/images/featured-images/slide-1.png";

//banner images
import banner_light_mode_1 from "@/assets/images/banner-images/banner-light-mode-1.webp";
import banner_light_mode_2 from "@/assets/images/banner-images/banner-light-mode-2.webp";
import banner_light_mode_3 from "@/assets/images/banner-images/banner-light-mode-3.webp";
import banner_light_mode_4 from "@/assets/images/banner-images/banner-light-mode-4.webp";
import banner_dark_mode_1 from "@/assets/images/banner-images/banner-dark-mode-2.png";
import banner_dark_mode_2 from "@/assets/images/banner-images/banner-dark-mode-1.png";
import banner_dark_mode_3 from "@/assets/images/banner-images/banner-dark-mode-3.png";
import banner_dark_mode_4 from "@/assets/images/banner-images/banner-dark-mode-4.png";
export const NavbarData = [
  {
    id: 1,
    title: "Shop Categories",
    Image: "",
    dropdwown: true,
    dropdwownData: [
      {
        id: 1,
        title: "Home",
        link: "/",
      },
      {
        id: 2,
        title: "Cameras & Videos",
        link: "/",
        popuUpData: [
          {
            id: 1,
            title: "Airpods",
            link: "/",
            data: [
              {
                id: 10001,
                title: "Airpods 1",
                link: "/",
              },
              {
                id: 10002,
                title: "Airpods 2",
                link: "/",
              },
              {
                id: 10003,
                title: "Airpods 3",
                link: "/",
              },
              {
                id: 10004,
                title: "Airpods 4",
                link: "/",
              },
            ],
          },
        ],
        popuUp: true,
      },
      {
        id: 2,
        title: "Computer & Laptops",
        link: "/",
        popuUpData: [
          {
            id: 10001,
            title: "Airpods 1",
            img: "https://demo-digitic.myshopify.com/cdn/shop/products/10_02_174x.jpg?v=1655096141",
            img2: "https://demo-digitic.myshopify.com/cdn/shop/products/06_02_174x.jpg?v=1655095464",
            link: "/",
          },
          {
            id: 10002,
            title: "Airpods 1",
            img: "https://demo-digitic.myshopify.com/cdn/shop/products/10_02_174x.jpg?v=1655096141",
            img2: "https://demo-digitic.myshopify.com/cdn/shop/products/06_02_174x.jpg?v=1655095464",
            link: "/",
          },
          {
            id: 10003,
            title: "Airpods 1",
            img: "https://demo-digitic.myshopify.com/cdn/shop/products/10_02_174x.jpg?v=1655096141",
            img2: "https://demo-digitic.myshopify.com/cdn/shop/products/06_02_174x.jpg?v=1655095464",
            link: "/",
          },
          {
            id: 10004,
            title: "Airpods 1",
            img: "https://demo-digitic.myshopify.com/cdn/shop/products/10_02_174x.jpg?v=1655096141",
            img2: "https://demo-digitic.myshopify.com/cdn/shop/products/06_02_174x.jpg?v=1655095464",
            link: "/",
          },
        ],
        popuUp: true,
      },
      {
        id: 2,
        title: "Handbag",
        link: "/",
      },
      {
        id: 3,
        title: "Mobile & Tablets",
        link: "/",
      },
      {
        id: 4,
        title: "Smart phones",
        link: "/",
      },
      {
        id: 5,
        title: "Portable Speakers",
        link: "/",
      },
      {
        id: 6,
        title: "Music & Gaming",
        link: "/",
      },
    ],
    active: false,
  },
  {
    id: 2,
    title: "Home",
    link: "/",
  },
  {
    id: 3,
    title: "Our Store",
    link: "/store",
  },
  {
    id: 4,
    title: "Blogs",
    link: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

export const whyChooseUsData = [
  {
    id: 1,
    logo: icon_1,
    title: "Free Shipping",
    subTitle: "From all orders over $100",
  },
  {
    id: 2,
    logo: icon_2,
    title: "Daily Surprise Offers",
    subTitle: "Save up to 25% off",
  },
  {
    id: 3,
    logo: icon_3,
    title: "Support 24/7",
    subTitle: "Shop with an expert",
  },
  {
    id: 4,
    logo: icon_4,
    title: "Affordable Prices",
    subTitle: "Get Factory direct price",
  },
  {
    id: 5,
    logo: icon_5,
    title: "Secure Payments",
    subTitle: "100% Protected Payments",
  },
];

export const productsSlider = [
  {
    id: 1,
    productName: "Computers & Laptop",
    stoke: 8,
    productImage: slide_1,
  },
  {
    id: 2,
    productName: "Cameras and Videos",
    stoke: 10,
    productImage: slide_4,
  },
  {
    id: 3,
    productName: "Smart Television",
    stoke: 12,
    productImage: slide_3,
  },
  {
    id: 4,
    productName: "Music & Gaming",
    stoke: 4,
    productImage: slide_5,
  },
  {
    id: 5,
    productName: "Smartwatches",
    stoke: 13,
    productImage: slide_9,
  },
  {
    id: 6,
    productName: "Mobile & Tablets",
    stoke: 5,
    productImage: slide_6,
  },
  {
    id: 7,
    productName: "Headphones",
    stoke: 6,
    productImage: slide_7,
  },
  {
    id: 8,
    productName: "Accessories",
    stoke: 10,
    productImage: slide_8,
  },
  {
    id: 9,
    productName: "Portable Speakers",
    stoke: 8,
    productImage: slide_2,
  },
  {
    id: 10,
    productName: "Home Appliances",
    stoke: 6,
    productImage: slide_10,
  },
];

export const FeaturedCarouselData = [
  {
    id: 1,
    productImg1: featured_1,
    productImg2: featured_2,
    brand: "Havels",
    title: "Kids headphones bulk 10 pack multi colored for students",
    rating: 4,
    price: 100,
  },
  {
    id: 2,
    productImg1: featured_3,
    productImg2: featured_4,
    brand: "Sony",
    title: "Olympus pen E-PL9 kit with 14-42, EZ lens, camera",
    rating: 4,
    price: 100,
  },
  {
    id: 3,
    productImg1: featured_5,
    productImg2: featured_6,
    brand: "Havells",
    title: "Honor T1 7.0 1 GB RAM 8 GB ROM...",
    rating: 4.5,
    price: 10,
  },
  {
    id: 4,
    productImg1: featured_7,
    productImg2: featured_8,
    brand: "Bajaj",
    title: "Beoplay A1 Portable Bluetooth Speaker with Microphone",
    rating: 4,
    price: 500,
  },
  {
    id: 5,
    productImg1: featured_9,
    productImg2: featured_10,
    brand: "Sony",
    title: "Milanese Loop Watch Band for 42mm/44mm Apple Watch",
    rating: 4,
    price: 10,
  },
  {
    id: 6,
    productImg1: featured_11,
    productImg2: featured_12,
    brand: "Bajaj",
    title: "Sony EXTRA BASS Portable Splash-proof Wireless Speaker",
    rating: 4.5,
    price: 220,
  },
  {
    id: 7,
    productImg1: featured_13,
    productImg2: featured_14,
    brand: "Sony",
    title: "Apple AirPods Max 2020 with Smart Case – Blue",
    rating: 5,
    price: 100,
  },
];

export const TopProductsData = [
  {
    id: 1,
    category: "Big Screen",
    title: "Smart Watch Series 7",
    image_light_mode: banner_light_mode_1,
    image_dark_mode: banner_dark_mode_1,
    description: "From $399or $16.62/mo. for 24 mo.*",
  },
  {
    id: 2,
    category: "Studio Display",
    title: "600 nits of brightness.",
    image_light_mode: banner_light_mode_2,
    image_dark_mode: banner_dark_mode_2,
    description: "27-inch 5K Retina display",
  },
  {
    id: 3,
    category: "smartphones",
    title: "Smartphone 13 Pro.",
    image_light_mode: banner_light_mode_3,
    image_dark_mode: banner_dark_mode_3,
    description: "Now in Green. From $999.00 or $41.62/mo.for 24 mo. Footnote*",
  },
  {
    id: 4,
    category: "home speakers",
    title: "Room-filling sound.",
    image_light_mode: banner_light_mode_4,
    image_dark_mode: banner_dark_mode_4,
    description: "From $699 or $116.58/mo. for 12 mo.*",
  },
];
