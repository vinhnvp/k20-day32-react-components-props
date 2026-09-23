import FaqItem from "./FaqItem"

export default function FaqList ({dataList, onSelectFaq}) {
    return (
        <div className="grid grid-cols-1 gap-2">
            {dataList.map((data) => (
                <FaqItem key={data.id} data={data} onSelectFaq={onSelectFaq}/>
            ))}
        </div>
    )
}
