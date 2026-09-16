import Badge from './Badge'
import { formatCurrency } from '../utils/format'

export default function ProductItem({ product, onAddToCart }) {
    const { name, price, image, inStock, discountPercent } = product
    const hasDiscount = discountPercent > 0
    const finalPrice = hasDiscount ? price - (price * discountPercent) / 100 : price

    return (
        <div
            className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl ${
                inStock ? '' : 'opacity-60'
            }`}
        >
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
                    {hasDiscount && <Badge type="discount" value={discountPercent} />}
                    {!inStock && <Badge type="outOfStock" />}
                </div>
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h2 className="mb-2 line-clamp-2 text-base font-bold text-slate-800">{name}</h2>
                <div className="mb-4 flex flex-wrap items-baseline gap-2">
                    {hasDiscount ? (
                        <>
                            <span className="text-lg font-extrabold text-red-600">{formatCurrency(finalPrice)}</span>
                            <span className="text-sm text-slate-400 line-through">{formatCurrency(price)}</span>
                        </>
                    ) : (
                        <span className="text-lg font-extrabold text-slate-800">{formatCurrency(price)}</span>
                    )}
                </div>
                <button
                    className={`mt-auto rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all duration-200 ${
                        inStock
                            ? 'cursor-pointer bg-indigo-600 hover:bg-indigo-700 active:scale-95'
                            : 'cursor-not-allowed bg-slate-300'
                    }`}
                    disabled={!inStock}
                    onClick={() => onAddToCart(name, finalPrice)}
                >
                    {inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
                </button>
            </div>
        </div>
    )
}
