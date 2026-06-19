# E-Commerce Operations Manager

Multi-platform e-commerce plugin for CortexPrism — Shopify, WooCommerce, BigCommerce, and Magento
integration for product management, inventory, orders, and analytics.

## Installation

```bash
cortex plugin install github:CortexPrism/cortex-plugin-ecommerce
```

## Tools

| Tool                     | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| `ecom_list_products`     | List products with inventory status and pricing          |
| `ecom_create_product`    | Create new product listing with variants                 |
| `ecom_update_inventory`  | Update stock levels with sync verification               |
| `ecom_list_orders`       | List orders with status, date, and customer filters      |
| `ecom_fulfill_order`     | Mark order as fulfilled with tracking info               |
| `ecom_get_sales_summary` | Sales analytics: revenue, top products, conversion rates |

## Configuration

```json
{
  "plugins": {
    "cortex-plugin-ecommerce": {
      "shopifyStoreDomain": "your-store.myshopify.com",
      "shopifyAccessToken": "shpat_...",
      "wooStoreUrl": "https://your-store.com",
      "wooConsumerKey": "ck_...",
      "wooConsumerSecret": "cs_..."
    }
  }
}
```

## Supported Platforms

- **Shopify** — Admin API access token
- **WooCommerce** — Consumer key/secret
- **BigCommerce** — API token
- **Magento** — Integration token

## License

MIT
