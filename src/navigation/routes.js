import { lazy } from 'react';

// pages
import Home from "../pages/home/Home";
const Category = lazy(() => import("../pages/category/Category"));
const Gallery = lazy(() => import("../pages/gallery/Gallery"));
// const Reviews = lazy(() => import("../pages/reviews/Reviews"));
const CustomTailoring = lazy(() => import("../pages/customTailoring/CustomTailoring"));
const Company = lazy(() => import("../pages/company/Company"));
const FabricExcellence = lazy(() => import("../pages/fabricExcellence/FabricExcellence"));
const Exclusivity = lazy(() => import("../pages/exclusivity/Exclusivity"));
const Product = lazy(() => import("../pages/product/Product"));
const ProductSubCategory = lazy(() => import("../pages/productSubCategory/ProductSubCategory"));
const SpecificNews = lazy(() => import("../pages/specificNews/SpecificNews"));
// const Answers = lazy(() => import("../pages/answer/Answers"));

// 404
const NotFound = lazy(() => import("./NotFound"));

const routes = [
    { path: '/', name: 'Home', component: Home, role: ["Пользователь"] },
    { path: '/catalog/:name', name: 'Catalog', component: Category, role: ["Пользователь"] },
    { path: '/catalog/product/sub_categories/:name', name: 'CatalogProductSubCategories', component: ProductSubCategory, role: ["Пользователь"] },
    { path: '/catalog/product/:name', name: 'CatalogProduct', component: Product, role: ["Пользователь"] },
    // { path: '/question_answer', name: 'AnswerQuestion', component: Answers, role: ["Пользователь"] },
    { path: '/gallery', name: 'Gallery', component: Gallery, role: ["Пользователь"] },
    // { path: '/reviews', name: 'Reviews', component: Reviews, role: ["Пользователь"] },
    { path: '/custom_tailoring', name: 'CustomTailoring', component: CustomTailoring, role: ["Пользователь"] },
    { path: '/company', name: 'Company', component: Company, role: ["Пользователь"] },
    { path: '/fabric_excellence', name: 'FabricExcellence', component: FabricExcellence, role: ["Пользователь"] },
    { path: '/exclusivity_of_furs', name: 'Exclusivity', component: Exclusivity, role: ["Пользователь"] },
    { path: '/specific_news', name: 'SpecificNews', component: SpecificNews, role: ["Пользователь"] },

    // page not found
    { path: '*', name: 'PageNotFound', component: NotFound, role: ["Пользователь"] },
];

export default routes;