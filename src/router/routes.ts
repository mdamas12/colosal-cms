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
          { name: 'ProductsEdit', path: 'edit', component: () => import('pages/products/ProductEdit.vue') },
          { name: 'ProductsSingleEdit', path: 'edit/:id', component: () => import('pages/products/ProductSingleEdit.vue') },
          { name: 'ProductsDetail', path: 'detail/:id', component: () => import('pages/products/ProductDetail.vue') },

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
      },
      {
        name: 'Suppliers',
        path: 'suppliers',
        component: () => import('pages/Suppliers.vue'),
        children: [
          { name: 'SupplierList', path: '', component: () => import('pages/supplier/SupplierList.vue') },
          { name: 'SupplierDetail', path: 'detail/:id', component: () => import('pages/supplier/SupplierDetail.vue') },
          { name: 'SupplierCreate', path: 'create', component: () => import('pages/supplier/SupplierCreate.vue') }
        ]
      },
      {
        name: 'SupplyOrders',
        path: 'supplyOrders',
        component: () => import('pages/SupplyOrders.vue'),
        children: [
          { name: 'SupplyOrderList', path: '', component: () => import('pages/supplyOrders/SupplyOrderList.vue') },
          { name: 'SupplyOrderDetail', path: 'detail/:id', component: () => import('pages/supplyOrders/SupplyOrderDetail.vue') },
          { name: 'SupplyOrderCreate', path: 'create', component: () => import('pages/supplyOrders/SupplyOrderCreate.vue') }
        ]
      },
      {
        name: 'Customers',
        path: 'customers',
        component: () => import('pages/Customers.vue'),
        children: [
          { name: 'CustomerList', path: '', component: () => import('pages/customers/CustomerList.vue') },
          { name: 'CustomerDetail', path: 'detail/:id', component: () => import('pages/customers/CustomerDetail.vue') },
          { name: 'CustomerCreate', path: 'create', component: () => import('pages/customers/CustomerCreate.vue') }
        ]
      },
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
