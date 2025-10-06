import type { ICard } from "../types/ICard";


export default function Card ({title,source,resume,date}: ICard) {

    return (
        <div className="sm:max-w-[360px] lg:w-full w-[1440px] border-gray-900 border-2 rounded-2xl p-6">
            <div className="flex items-center justify-center p-2 mt-1">{title}</div>
            <span className="align-middle">{resume}</span>
            <div>
            <div>{date}</div>
            <div>{source}</div>
            </div>
        </div>
    )

}
