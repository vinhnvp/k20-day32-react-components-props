export default function FaqItem({ data, onSelectFaq }) {
    const {id, question, answer, category, isHot} = data

    return (
        <div onClick={() => onSelectFaq(id)} className="bg-amber-100 p-2">
            <p>{question}</p>
            <p>{answer}</p>
            <p>{category}</p>
            <p>{isHot ? "Hot" : "No hot"}</p>
        </div>
    )
}