// APIクライアント関数
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3002";

// デバッグ用：環境変数の確認
console.log("Environment:", process.env.NODE_ENV);
console.log("API_BASE_URL:", API_BASE_URL);
console.log("NEXT_PUBLIC_API_BASE_URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

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

export interface Shops {
  id: number;
  name: string;
  station_name: string;
  address: string;
  tel: string;
  review: number;
  is_instagram: boolean;
  is_ai_generated: boolean;
  created_at: string;
}

export interface ShopsResponse {
  data: Shops[];
  success: boolean;
}

export interface ShopResponse {
  data: Shops[];
  success: boolean;
}

// 全店舗一覧を取得
export async function fetchDemoShops(): Promise<DemoShopsResponse> {
  const response = await fetch(`${API_BASE_URL}/demo_shops`);
  if (!response.ok) {
    throw new Error("Failed to fetch demo shops");
  }
  return response.json();
}

export async function fetchShops(): Promise<ShopsResponse> {
  const response = await fetch(`${API_BASE_URL}/shops`);
  if (!response.ok) {
    throw new Error("Failed to fetch shops");
  }
  return response.json();
}

// 特定の店舗を取得
export async function fetchDemoShop(id: number): Promise<DemoShopResponse> {
  const response = await fetch(`${API_BASE_URL}/demo_shops/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch demo shop");
  }
  return response.json();
}

export interface Stardust {
  id: number;
  value: number;
  memo: string | null;
  created_at: string;
  updated_at: string;
}

export interface StardustsResponse {
  data: Stardust[];
}

// 全stardusts一覧を取得
export async function fetchStardusts(): Promise<StardustsResponse> {
  const response = await fetch(`${API_BASE_URL}/stardusts`);
  if (!response.ok) {
    throw new Error("Failed to fetch stardusts");
  }
  return response.json();
}


export async function fetchShop(id: string): Promise<ShopResponse> {
  const response = await fetch(`${API_BASE_URL}/shops/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch shop");
  }
  return response.json();
}