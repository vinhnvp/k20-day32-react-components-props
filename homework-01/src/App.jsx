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
    <div className="p-4">
      <h1 className="text-2xl font-bold">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:max-w-[1600px] gap-4 mt-4">
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
  )
}

export default App
