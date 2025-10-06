import Card from "../components/Cards"
import Filter from "../components/Filter"
import type { ICard } from "../types/ICard"


export default function Home () {

    const news : ICard[] = [
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"},
  {title:'Fake News', resume: "This is a fake news", date: "12/12/12", source:"G1"}
 ]

  return (
    <>
    <p className="sm:text-center sm:text-2xl lg:text-center text-4xl m-2">Notícias </p>
    <Filter />
    <div className="grid grid-cols-1 gap-4 justify-items-center">
    {
      news.map((e, i:number) => {
        return (
          <Card
          key={i}
          title={e.title}
          date={e.date}
          resume={e.resume}
          source={e.source}
          />

        )
      })
    }
    </div>
    </>
  )}
    