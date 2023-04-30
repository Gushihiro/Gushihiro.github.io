import Link from "next/link";

export default function Vedomy() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl">Contacts CRUD</h1>
          <div className="flex">
            <h4>MySQL </h4>
            <h4>|</h4>
            <h4>Express </h4>
            <h4>|</h4>
            <h4>React </h4>
            <h4>|</h4>
            <h4>NodeJS </h4>
          </div>
        </div>
        <div>
          <Link href="/">Return</Link>
        </div>
      </div>
      <div className="flex flex-col items-center mb-9">
        <img className="rounded overflow-hidden" src="/crudView.png" alt="Contacts-Crud" width="700" height="700" />
        <Link href="https://gushihiro.github.io/contacts-crud/" target="_blank">Click To View</Link>
        <h1>Simple, fully functioning CRUD Application Utilizing Axios-Imported API Contacts</h1>
        <h1>Track your mood, meditate using the animated breathing box, and receive new recipes, yoga poses, and motivational quotes daily.</h1>
        <h1>Additional Technologies:</h1>
        <ul>
          <li>Material-Ui</li>
          <li>TypeScript</li>
          <li>Axios</li>
        </ul>
      </div>
    </div>
  )
}