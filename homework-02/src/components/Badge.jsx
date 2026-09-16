export default function Badge({ type, value }) {
    if (type === 'discount') {
        return (
            <span className="rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                Giảm giá {value}%
            </span>
        )
    }

    if (type === 'outOfStock') {
        return (
            <span className="rounded-full bg-slate-800/85 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                Hết hàng
            </span>
        )
    }

    return null
}
