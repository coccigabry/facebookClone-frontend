import LeftSidebar from "../components/LeftSidebar"
import Feed from "../components/Feed"
import RightSidebar from "../components/RightSidebar"


export default function Home() {

  return (
    <div className="homeContainer">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  )
}
