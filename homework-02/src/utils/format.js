export function formatCurrency(value) {
    return `${Math.round(value).toLocaleString('vi-VN')}đ`
}
