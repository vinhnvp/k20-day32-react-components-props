export default function UserProfileCard({ avatar, fullName, jobTitle, isOnline, skills }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
            <div className="relative overflow-hidden">
                <img
                    src={avatar}
                    alt={fullName}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 shadow-sm backdrop-blur">
                    <span className={`h-2 w-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-400'}`} />
                    <span className="text-xs font-semibold text-slate-600">{isOnline ? 'Online' : 'Offline'}</span>
                </div>
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h2 className="text-lg font-bold text-slate-800">{fullName}</h2>
                <p className="mb-3 text-sm text-slate-500">{jobTitle}</p>
                <ul className="mb-4 flex flex-wrap gap-1.5">
                    {skills.map((skill, index) => (
                        <li key={index} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600">
                            {skill}
                        </li>
                    ))}
                </ul>
                <button
                    className="mt-auto cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-indigo-700 active:scale-95"
                    onClick={() => alert(`Đang kết nối với: ${fullName}...`)}
                >
                    Liên hệ
                </button>
            </div>
        </div>
    )
}
