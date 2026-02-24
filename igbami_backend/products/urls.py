from django.urls import path
# from rest_framework.routers import DefaultRouter
from .views import ProductListView, CategoryListView, ProductDetailView, RelatedProductsView, PopularProductsView

# router = DefaultRouter()
# router.register(r'admin/products', AdminProductViewSet)
# router.register(r'admin/categories', AdminCategoryViewSet)

urlpatterns = [
    path('products/', ProductListView.as_view(), name='product-list'),
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('products/<slug:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('products/<slug:slug>/related/', RelatedProductsView.as_view(), name='related-products'),
    path('products/popular/', PopularProductsView.as_view(), name='popular-products'),
]

# urlpatterns += router.urls