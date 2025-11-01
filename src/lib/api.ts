// APIクライアント関数
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3002';

// デバッグ用：環境変数の確認
console.log('Environment:', process.env.NODE_ENV);
console.log('API_BASE_URL:', API_BASE_URL);
console.log('NEXT_PUBLIC_API_BASE_URL:', process.env.NEXT_PUBLIC_API_BASE_URL);

export interface DemoShop {
  id: number;
  name: string;
  type: number;
  station: string;
  review_level: number;
  created_at: string;
  updated_at: string;
}

export interface DemoShopsResponse {
  data: DemoShop[];
}

export interface DemoShopResponse {
  data: DemoShop;
}

// 全店舗一覧を取得
export async function fetchDemoShops(): Promise<DemoShopsResponse> {
  const response = await fetch(`${API_BASE_URL}/demo_shops`);
  if (!response.ok) {
    throw new Error('Failed to fetch demo shops');
  }
  return response.json();
}

// 特定の店舗を取得
export async function fetchDemoShop(id: number): Promise<DemoShopResponse> {
  const response = await fetch(`${API_BASE_URL}/demo_shops/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch demo shop');
  }
  return response.json();
}
