import LeftSidebar from "../components/LeftSidebar"
import Feed from "../components/Feed"
import RightSidebar from "../components/RightSidebar"
import Header from "../components/Header"


export default function Home() {

  return (
    <>
      <Header />
      <div className="homeContainer">
        <LeftSidebar />
        <Feed />
        <RightSidebar />
      </div>
    </>
  )
}
