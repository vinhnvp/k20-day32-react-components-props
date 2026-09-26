import FaqItem from './FaqItem'

export default function FaqList({ dataList, selectedFaqIds, onSelectFaq }) {
    return (
        dataList.length > 0 && (
            <div className="flex flex-col gap-4">
                {dataList.map((data) => (
                    <FaqItem
                        key={data.id}
                        data={data}
                        isExpanded={selectedFaqIds.includes(data.id)}
                        onSelectFaq={onSelectFaq}
                    />
                ))}
            </div>
        )
    )
}
