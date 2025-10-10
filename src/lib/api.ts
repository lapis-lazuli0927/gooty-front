// APIクライアント関数
// サーバー側（Docker内）では host.docker.internal を使用し、クライアント側では localhost を使用
// Linuxの場合は host.docker.internal の代わりに 172.17.0.1 を使用する場合もある
const API_BASE_URL = typeof window === 'undefined' 
  ? process.env.NEXT_PUBLIC_API_URL || 'http://host.docker.internal:3002' // サーバー側
  : 'http://localhost:3002'; // クライアント側（ブラウザ）

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
  console.log('Fetching from:', `${API_BASE_URL}/demo_shops`);
  const response = await fetch(`${API_BASE_URL}/demo_shops`);
  console.log('Response status:', response.status);
  if (!response.ok) {
    const text = await response.text();
    console.log('Response body:', text);
    throw new Error(`Failed to fetch demo shops: ${response.status} ${response.statusText}`);
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
