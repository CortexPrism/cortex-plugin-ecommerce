import { assertEquals, assertStringIncludes } from 'https://deno.land/std@0.208.0/assert/mod.ts';
import { tools } from '../../mod.ts';
import type { PluginContext } from 'cortex/plugins';

const ctx: PluginContext = {
  pluginId: 'cortex-plugin-ecommerce',
  pluginDir: '/tmp/ecom',
  state: { get: async () => null, set: async () => {} },
  config: {},
  logger: { info: () => {}, warn: () => {}, error: () => {}, debug: () => {} },
};
const find = (n: string) => tools.find((t) => t.definition.name === n)!;

Deno.test('ecom_list_products — returns products', async () => {
  const r = await find('ecom_list_products').execute({ platform: 'shopify' }, ctx);
  assertEquals(r.success, true);
  assertStringIncludes(r.output, 'Wireless');
});

Deno.test('ecom_create_product — creates product', async () => {
  const r = await find('ecom_create_product').execute({
    platform: 'shopify',
    title: 'Test Product',
    description: 'A test',
    price: 19.99,
  }, ctx);
  assertEquals(r.success, true);
  assertStringIncludes(r.output, 'Test Product');
});

Deno.test('ecom_create_product — rejects missing title', async () => {
  const r = await find('ecom_create_product').execute({
    platform: 'shopify',
    description: 'No title',
    price: 10,
  }, ctx);
  assertEquals(r.success, false);
});

Deno.test('ecom_update_inventory — updates stock', async () => {
  const r = await find('ecom_update_inventory').execute({
    platform: 'shopify',
    product_id: 'prod_001',
    quantity: 50,
  }, ctx);
  assertEquals(r.success, true);
});

Deno.test('ecom_list_orders — returns orders', async () => {
  const r = await find('ecom_list_orders').execute(
    { platform: 'shopify', status: 'processing' },
    ctx,
  );
  assertEquals(r.success, true);
  assertStringIncludes(r.output, 'ord_');
});

Deno.test('ecom_fulfill_order — fulfills with tracking', async () => {
  const r = await find('ecom_fulfill_order').execute({
    platform: 'shopify',
    order_id: 'ord_1001',
    tracking_number: '1Z999',
    carrier: 'UPS',
  }, ctx);
  assertEquals(r.success, true);
});

Deno.test('ecom_get_sales_summary — returns analytics', async () => {
  const r = await find('ecom_get_sales_summary').execute({
    platform: 'shopify',
    period: 'this_month',
  }, ctx);
  assertEquals(r.success, true);
  assertStringIncludes(r.output, 'revenue');
});

Deno.test('rejects invalid platform', async () => {
  const r = await find('ecom_list_products').execute({ platform: 'etsy' }, ctx);
  assertEquals(r.success, false);
});

Deno.test('tools array — has 6 tools', () => {
  assertEquals(tools.length, 6);
});
