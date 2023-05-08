import Link from "next/link";

export default function Vedomy() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between pt-9 pb-9">
        <div className="flex flex-col">
          <h1 className="text-3xl">Vedomy</h1>
          <div className="flex">
            <h4>MySQL </h4>
            <h4>|</h4>
            <h4>Express </h4>
            <h4>|</h4>
            <h4>JavaScript </h4>
            <h4>|</h4>
            <h4>NodeJS</h4>
          </div>
        </div>
        <div>
          <Link href="/">Return</Link>
        </div>
      </div>
      <div className="flex flex-col items-center mb-9 mt-9">
        <img className="rounded overflow-hidden" src="/vedomyView.png" alt="Vedomy" width="700" height="700" />
        <Link href="https://gushihiro.github.io/Vedomy" target="_blank">Click To View</Link>
        <h1 className="mt-9">A Meditation App with Personal Wellness Tracking Applicability</h1>
        <h1>Track your mood, meditate using the animated breathing box, and receive new recipes, yoga poses, and motivational quotes daily.</h1>
        <h1>Additional Technologies:</h1>
          <ul>
            <li>MomentJS</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
          </ul>
      </div>
    </div>
  )
}