import Layout from "@/components/Layout"
import UserProfile from "@/components/UserProfile";

const page = () => {
  return (
    <Layout>
        {/* <h3 className="font-primary text-2xl">Your Profile</h3> */}
       <UserProfile/>
    </Layout>
  )
}

export default page;