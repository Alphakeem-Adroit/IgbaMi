from django.shortcuts import render
from rest_framework import generics
# from rest_framework.permissions import IsAuthenticated, IsAdminUser
# from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer
from django.shortcuts import get_object_or_404
from rest_framework.generics import RetrieveAPIView, ListAPIView
from django.shortcuts import get_object_or_404
from django.db.models import F
from django.core.cache import cache

class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category', 'is_available', 'is_featured']
    search_fields = ['name', 'description']
    ordering_fields = ['price', 'created_at']

    def get_queryset(self):
        queryset = Product.objects.all()

        # Sold out filter
        sold_out = self.request.query_params.get('sold_out')
        if sold_out == 'true':
            queryset = queryset.filter(stock_quantity=0)
        elif sold_out == 'false':
            queryset = queryset.filter(stock_quantity__gt=0)

        # Price range filtering
        min_price = self.request.query_params.get('min_price')
        max_price = self.request.query_params.get('max_price')

        if min_price:
            queryset = queryset.filter(price__gte=min_price)

        if max_price:
            queryset = queryset.filter(price__lte=max_price)

        return queryset

    def get_queryset(self):
        cache_key = "product_list"
        queryset = cache.get(cache_key)

        if not queryset:
            queryset = Product.objects.filter(is_available=True)
            cache.set(cache_key, queryset, timeout=60 * 5)  # 5 minutes

        return queryset

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

def get_queryset(self):
    queryset = Product.objects.all()

    sold_out = self.request.query_params.get('sold_out')

    if sold_out == 'true':
        queryset = queryset.filter(stock_quantity=0)

    if sold_out == 'false':
        queryset = queryset.filter(stock_quantity__gt=0)

    return queryset

class ProductDetailView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = "slug"

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.view_count = F('view_count') + 1
        instance.save(update_fields=['view_count'])
        instance.refresh_from_db()
        return super().retrieve(request, *args, **kwargs)

class RelatedProductsView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        slug = self.kwargs.get("slug")
        product = get_object_or_404(Product, slug=slug)

        return Product.objects.filter(
            category=product.category,
            is_available=True
        ).exclude(
            slug=slug
        )[:4]  # limit to 4 related products
    
class PopularProductsView(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(
            is_available=True
        ).order_by('-view_count')[:6]

    def get_queryset(self):
        cache_key = "popular_products"
        queryset = cache.get(cache_key)

        if not queryset:
            queryset = Product.objects.filter(
                is_available=True
            ).order_by('-view_count')[:6]

            cache.set(cache_key, queryset, timeout=60 * 5)

        return queryset
    
# class AdminProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAdminUser]

# class AdminCategoryViewSet(viewsets.ModelViewSet):
#     queryset = Category.objects.all()
#     serializer_class = CategorySerializer
#     authentication_classes = [JWTAuthentication]
#     permission_classes = [IsAdminUser]