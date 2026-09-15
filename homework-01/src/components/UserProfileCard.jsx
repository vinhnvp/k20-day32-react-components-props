export default function UserProfileCard({ avatar, fullName, jobTitle, isOnline, skills }) {
    return (
        <div className="flex flex-row overflow-hidden bg-white rounded-lg drop-shadow-lg">
            <img src={avatar} alt={fullName} className="w-1/3 aspect-square object-cover" />
            <div className="w-2/3 p-2.5 flex flex-col justify-start">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-xl font-bold">{fullName}</h2>
                    <div className="flex items-center justify-center gap-1 px-2 py-0.5 rounded-full bg-gray-100">
                        <span className={`h-2 w-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}/>
                        <span className="text-xs font-semibold text-gray-600">{isOnline ? 'Online' : 'Offline'}</span>
                    </div>
                </div>
                <p className="text-medium mb-3 text-gray-700">{jobTitle}</p>
                <ul className="flex flex-col lg:flex-row flex-wrap gap-1 position-absolute bottom-0 left-0 right-0 mt-auto mb-2">
                    {skills.map((skill, index) => (
                        <li key={index} className="bg-gray-200 text-gray-800 px-2 py-0.5 rounded-full text-xs">
                            {skill}
                        </li>
                    ))}
                </ul>
                <button 
                    className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition-colors duration-300 cursor-pointer mt-2"
                    onClick={() => alert(`Đang kết nối với: ${fullName}...`)}
                >
                    Liên hệ
                </button>
            </div>
        </div>
    )
}
