import Feed from "../components/Feed"
import Friends from "../components/Friends"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"


export default function Home() {

  return (
    <>
      <Header />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Friends />
      </div>
    </>
  )
}
