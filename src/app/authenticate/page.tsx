import Authentication from "@/components/Authentication"

const page = () => {
  return (
    <div className=" flex flex-col-reverse md:grid md:grid-cols-3 w-full">
        <section className="flex flex-col gap-4 justify-center authenticate-side p-4 text-dark">
            <article>
              <h3 className="font-bold text-2xl font-primary">DNews</h3>
              <p className=" italic capitalize text-sm text-secondary">Bringing DNews closer to you anywhere and anytime...</p>
            </article>

            <article>
              <h2 className="text-2xl font-bold capitalize font-primary text-light">Why sign up?</h2>
              <p className="">By creating an account, you gain access to a more personalized and interactive experience:</p>
              <ol className=" p-2">
                <li>
                  <span className="font-semibold font-primary text-2xl text-light">Engage with the Community:</span> <br />
                  <ul className="list-disc pl-4 font-medium">
                    <li>Comment on Articles</li>
                    <li>Express Your Opinions</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold font-primary text-2xl text-light">Personalize Your News Experience:</span> <br />
                  <ul className="list-disc pl-4 font-medium">
                    <li>Bookmark Articles</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold font-primary text-2xl text-light">Stay Updated and Informed:</span> <br />
                  <ul className="list-disc pl-4 font-medium">
                    <li>Receive Tailored Content</li>
                    <li>Never Miss Important Updates</li>
                  </ul>
                </li>
              </ol>
            </article>
        </section>
        <Authentication/>
    </div>
  )
}

export default page