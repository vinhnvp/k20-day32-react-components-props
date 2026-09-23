import FaqList from './components/FaqList'

function App() {
  const faqData = [
    {
      id: 1,
      question: 'Props trong React dùng để làm gì?',
      answer: 'Props giúp truyền dữ liệu từ component cha xuống component con.',
      category: 'React',
      isHot: true,
    },
    {
      id: 2,
      question: 'State khác Props ở điểm nào?',
      answer: 'State là dữ liệu nội bộ của component và có thể thay đổi theo thời gian, còn Props là dữ liệu được truyền vào từ bên ngoài và component con không tự ý thay đổi.',
      category: 'React',
      isHot: true,
    },
    {
      id: 3,
      question: 'useState hoạt động như thế nào?',
      answer: 'useState trả về một cặp gồm giá trị hiện tại và hàm setter; gọi hàm setter sẽ khiến component render lại với giá trị mới.',
      category: 'React Hooks',
      isHot: false,
    },
    {
      id: 4,
      question: 'Tailwind CSS là gì?',
      answer: 'Tailwind là một CSS framework theo hướng utility-first, cho phép style trực tiếp bằng class trong HTML/JSX thay vì viết file CSS riêng.',
      category: 'CSS',
      isHot: false,
    },
    {
      id: 5,
      question: 'Vite khác gì so với Create React App?',
      answer: 'Vite dùng ES Modules gốc của trình duyệt và esbuild để khởi động, biên dịch nhanh hơn đáng kể so với Create React App.',
      category: 'Tooling',
      isHot: false,
    },
    {
      id: 6,
      question: 'Vì sao nên dùng key khi render danh sách bằng map?',
      answer: 'key giúp React nhận diện từng phần tử trong danh sách qua các lần render, tránh render sai hoặc mất trạng thái khi danh sách thay đổi.',
      category: 'React',
      isHot: true,
    },
  ]

  const onSelectFaq = (id) => {
    return id
  }

  return (
    <>
      <FaqList dataList={faqData} onSelectFaq={onSelectFaq}/>
    </>
  )
}

export default App
