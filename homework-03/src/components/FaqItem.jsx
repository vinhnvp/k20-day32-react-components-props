export default function FaqItem({ data, isExpanded, onSelectFaq }) {
    const { id, question, answer, category, isHot } = data

    return (
        <div
            className={`self-start w-full overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md ${
                isExpanded ? 'border-indigo-300 ring-1 ring-indigo-200' : 'border-slate-200'
            }`}
        >
            <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex h-6 items-center rounded-full bg-indigo-50 px-2.5 text-xs font-semibold text-indigo-600">
                            {category}
                        </span>
                        {isHot && (
                            <span className="inline-flex h-6 items-center rounded-full bg-red-500 px-2.5 text-xs font-semibold text-white">
                                Hot
                            </span>
                        )}
                    </div>
                    <h2 className="text-base font-semibold text-slate-800">{question}</h2>
                </div>
                <button
                    className="shrink-0 cursor-pointer rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
                    onClick={() => onSelectFaq(id)}
                >
                    {isExpanded ? 'Thu gọn' : 'Xem chi tiết'}
                </button>
            </div>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
            >
                <div className="overflow-hidden">
                    <p className="border-t border-slate-100 px-4 pb-4 pt-3 text-sm leading-relaxed text-slate-600">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    )
}
