import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        name: 'Products',
        path: 'products',
        component: () => import('pages/Products.vue'),
        children: [
          { name: 'ProductsList', path: '', component: () => import('pages/products/ProductList.vue') },
          { name: 'ProductsCreate', path: 'create', component: () => import('pages/products/ProductCreate.vue') },
          { name: 'ProductsDetail', path: 'detail', component: () => import('pages/products/ProductDetail.vue') }
        ]
      },
      {
        name: 'Categories',
        path: 'categories',
        component: () => import('pages/Categories.vue'),
        children: [
          { name: 'CategoriesList', path: '', component: () => import('pages/categories/CategoriesList.vue') },
          { name: 'CategoriesDetail', path: 'detail', component: () => import('pages/categories/CategoriesDetail.vue'), props: true },
          { name: 'CategoriesCreate', path: 'create', component: () => import('pages/categories/CategoriesCreate.vue') }
        ]
      },
      {
        name: 'Brands',
        path: 'brands',
        component: () => import('pages/Brand.vue'),
        children: [
          { name: 'BrandList', path: '', component: () => import('pages/brands/BrandList.vue') },
          { name: 'BrandDetail', path: 'detail', component: () => import('pages/brands/BrandDetail.vue') },
          { name: 'BrandCreate', path: 'create', component: () => import('pages/brands/BrandCreate.vue') }
        ]
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
