import UserProfileCard from './components/UserProfileCard'

function App() {
  const usersList = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      fullName: 'John Doe',
      jobTitle: 'Software Engineer',
      isOnline: true,
      skills: ['JavaScript', 'React', 'Node.js'],
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      fullName: 'Jane Smith',
      jobTitle: 'UI/UX Designer',
      isOnline: false,
      skills: ['HTML', 'CSS', 'Figma'],
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
      fullName: 'Mike Johnson',
      jobTitle: 'Data Scientist',
      isOnline: true,
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
      fullName: 'Emily Davis',
      jobTitle: 'Product Manager',
      isOnline: false,
      skills: ['Agile', 'Scrum', 'Project Management'],
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800">Danh sách thành viên</h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {usersList.map((user, index) => (
            <UserProfileCard
              key={index}
              avatar={user.avatar}
              fullName={user.fullName}
              jobTitle={user.jobTitle}
              isOnline={user.isOnline}
              skills={user.skills}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
