import ProductList from './components/ProductList'
import { formatCurrency } from './utils/format'

function App() {
  const products = [
    {
      id: 1,
      name: 'Tai nghe Bluetooth Sony WH-1000XM5',
      price: 8990000,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
      inStock: true,
      discountPercent: 15,
    },
    {
      id: 2,
      name: 'Bàn phím cơ Keychron K8',
      price: 2190000,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600',
      inStock: true,
      discountPercent: 0,
    },
    {
      id: 3,
      name: 'Chuột không dây Logitech MX Master 3S',
      price: 2490000,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600',
      inStock: false,
      discountPercent: 10,
    },
    {
      id: 4,
      name: 'Màn hình Dell 27 inch 4K',
      price: 12500000,
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600',
      inStock: true,
      discountPercent: 20,
    },
    {
      id: 5,
      name: 'Loa Bluetooth JBL Flip 6',
      price: 2790000,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600',
      inStock: true,
      discountPercent: 0,
    },
    {
      id: 6,
      name: 'Ổ cứng SSD Samsung 1TB',
      price: 1990000,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600',
      inStock: false,
      discountPercent: 5,
    },
  ]

  const handleAddToCart = (name, finalPrice) => {
    alert(`Đã thêm "${name}" vào giỏ hàng với giá ${formatCurrency(finalPrice)}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">Danh sách sản phẩm</h1>
        </header>
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>
    </div>
  )
}

export default App
