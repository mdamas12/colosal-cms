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
          { name: 'CategoryList', path: '', component: () => import('pages/categories/CategoryList.vue') },
          { name: 'CategoryDetail', path: 'detail/:id', component: () => import('pages/categories/CategoryDetail.vue') },
          { name: 'CategoryCreate', path: 'create', component: () => import('pages/categories/CategoryCreate.vue') }
        ]
      },
      {
        name: 'Brands',
        path: 'brands',
        component: () => import('pages/Brand.vue'),
        children: [
          { name: 'BrandList', path: '', component: () => import('pages/brands/BrandList.vue') },
          { name: 'BrandDetail', path: 'detail/:id', component: () => import('pages/brands/BrandDetail.vue') },
          { name: 'BrandCreate', path: 'create', component: () => import('pages/brands/BrandCreate.vue') }
        ]
      },
      {
        name: 'Features',
        path: 'features',
        component: () => import('pages/Features.vue'),
        children: [
          { name: 'FeatureList', path: '', component: () => import('pages/features/FeatureList.vue') },
          { name: 'FeatureDetail', path: 'detail/:id', component: () => import('pages/features/FeatureDetail.vue') },
          { name: 'FeatureCreate', path: 'create', component: () => import('pages/features/FeatureCreate.vue') }
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
