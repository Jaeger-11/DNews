import Layout from "@/components/Layout"

const loading = () => {
  return (
    <Layout>
       <article className="p-2 md:p-4 flex flex-col gap-3 mb-4">
        {/* <Back cancel={false}/> */}
        
        <h3 className="w-full h-6 md:w-3/4 text-dark bg-secondary"></h3>
        <p className="mb-2 w-1/4 h-4 bg-secondary"></p>
        <div className="w-3/4 h-40 bg-secondary">
        </div>
        
        <div className="">
          <p className="mb-2 w-full h-4 bg-secondary"> 
          </p>
          <p className="mb-2 w-full h-4 bg-secondary"> 
          </p>
        </div>

        <p className="w-full h-4 bg-secondary"></p>

        {/* <Bookmark id={params.id}/> */}

        <section>

          <section className="my-2 border-t">
            
          </section>
        </section>
      </article>
    </Layout>
  )
}

export default loading