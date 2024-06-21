
import React from 'react' 
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col ">
        <h1 className="head_text text-center">
        Discover & Share
        <br className= "max-md:hidden" />
        <span className=" text-center text-slate-200">AI-Powered Prompts</span>
        </h1>
       <p className= " text-center text-slate-200 mt-5 text-lg sm:text-xl max-w-2xl">
           G88-G is a an open source AI prompting tool for morden world to discover, 
           create and share creative prompts
       </p>
           <Feed/>
    </section>
  )
}

export default Home

