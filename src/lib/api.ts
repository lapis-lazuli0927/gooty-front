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
  url: string | null;
  station_name: string | null;
  address: string | null;
  tel: string | null;
  memo: string | null;
  review: number;
  is_instagram: boolean;
  is_ai_generated: boolean;
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
  is_ai_generated: boolean;
}

export interface CreateResponse {
  success: boolean;
}

// ==========================================
// 3. API実行関数 (Functions)
// ==========================================

/**
 * 全店舗一覧を取得
 * @param sort - ソート対象のフィールド (例: 'created_at', 'review')
 * @param order - 並び順 ('asc' または 'desc')
 */
export async function fetchShops(
  sort: string = "created_at",
  order: string = "desc"
): Promise<ShopsResponse> {
  const params = new URLSearchParams({ sort, order });
  const response = await fetch(`${API_BASE_URL}/shops?${params.toString()}`);
  if (!response.ok) {
    throw new Error("Failed to fetch shops");
  }
  return response.json();
}

/**
 * 特定の店舗情報を取得
 */
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

/**
 * お店の更新
 */
export async function updateShop(
  id: string,
  updatedData: Partial<ShopCreateRequest>
): Promise<{ success: boolean }> {
  const response = await fetch(`${API_BASE_URL}/shops/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "お店の更新に失敗しました");
  }
  return result;
}
