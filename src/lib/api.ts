// ==========================================
// 1. 基本設定・環境変数
// ==========================================
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3002";

// デバッグ用：環境変数の確認
console.log("Environment:", process.env.NODE_ENV);
console.log("API_BASE_URL:", API_BASE_URL);
console.log("NEXT_PUBLIC_API_BASE_URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

// ==========================================
// 2. 型定義 (Interfaces)
// ==========================================

/** DemoShop関連の型 */
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

/** Shops関連の型 */
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

/** Shop関連の型 */
export interface Shop {
  id: number;
  name: string;
  station_name: string;
  address: string;
  tel: string;
  memo: string;
  review: number;
  is_instagram: boolean;
}

export interface ShopResponse {
  data: Shop;
  success: boolean;
}

/** Create関連の型 */
export interface ShopCreateRequest {
  name: string | null;
  url: string | null;
  station_name: string | null;
  address: string | null;
  tel: string | null;
  memo: string | null;
  review: number;
  is_instagram: boolean;
  is_ai_generated: boolean;
}

export interface CreateResponse {
  success: boolean;
}

/** Stardust関連の型 */
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

// ==========================================
// 3. API実行関数 (Functions)
// ==========================================

/**
 * 全デモ店舗一覧を取得
 */
export async function fetchDemoShops(): Promise<DemoShopsResponse> {
  const response = await fetch(`${API_BASE_URL}/demo_shops`);
  if (!response.ok) {
    throw new Error("Failed to fetch demo shops");
  }
  return response.json();
}

/**
 * 特定のデモ店舗を取得
 */
export async function fetchDemoShop(id: number): Promise<DemoShopResponse> {
  const response = await fetch(`${API_BASE_URL}/demo_shops/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch demo shop");
  }
  return response.json();
}

/**
 * 全店舗一覧を取得
 */
export async function fetchShops(): Promise<ShopsResponse> {
  const response = await fetch(`${API_BASE_URL}/shops`);
  if (!response.ok) {
    throw new Error("Failed to fetch shops");
  }
  return response.json();
}

/**
 * 全stardusts一覧を取得
 */
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
/**
 * お店の新規登録
 */
export async function createShop(
  newShopData: ShopCreateRequest
): Promise<CreateResponse> {
  const response = await fetch(`${API_BASE_URL}/shops`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newShopData),
  });
  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "お店の登録に失敗しました");
  }
  return result;
}
/**
 * お店の削除
 */
export async function deleteShop(id: string): Promise<{ success: boolean }> {
  const response = await fetch(`${API_BASE_URL}/shops/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const result = await response.json().catch(() => ({}));
    throw new Error(result.error || "お店の削除に失敗しました");
  }
  return response.json();
}
