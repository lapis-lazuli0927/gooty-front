import { Shops } from '@/lib/api';

interface ShopCardProps {
    shop: Shops;
}

export default function ShopCard({ shop }: ShopCardProps) {
    return (
        <div>
            <h3>{shop.name}</h3>
        </div>
    );
}
