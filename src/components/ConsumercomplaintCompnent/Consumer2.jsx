import React from 'react'
import Heading from '../homecomponents/Heading'

const Consumer2 = () => {
    const data=[{
        name:"01.",
        title:"SEND A NOTICE MENTIONING THE PROBLEM/ FAULT YOU FACED ",
        des:"The first step is to express your concerns over the product or service in writing to the manufacturer or seller. For claims above 10,000, it is highly recommended that you have a conversation with your lawyer and deliver the notice through the lawyer on professional letterhead. This will show the vendor that you plan to bring legal action."
    },
    {
        name:"02.",
        title:"SEND A NOTICE MENTIONING THE PROBLEM/ FAULT YOU FACED ",
        des:"The first step is to express your concerns over the product or service in writing to the manufacturer or seller. For claims above 10,000, it is highly recommended that you have a conversation with your lawyer and deliver the notice through the lawyer on professional letterhead. This will show the vendor that you plan to bring legal action."
    },
    {
        name:"03.",
        title:"SEND A NOTICE MENTIONING THE PROBLEM/ FAULT YOU FACED ",
        des:"The first step is to express your concerns over the product or service in writing to the manufacturer or seller. For claims above 10,000, it is highly recommended that you have a conversation with your lawyer and deliver the notice through the lawyer on professional letterhead. This will show the vendor that you plan to bring legal action."
    },
    {
        name:"04.",
        title:"SEND A NOTICE MENTIONING THE PROBLEM/ FAULT YOU FACED ",
        des:"The first step is to express your concerns over the product or service in writing to the manufacturer or seller. For claims above 10,000, it is highly recommended that you have a conversation with your lawyer and deliver the notice through the lawyer on professional letterhead. This will show the vendor that you plan to bring legal action."
    },{
        name:"05.",
        title:"SEND A NOTICE MENTIONING THE PROBLEM/ FAULT YOU FACED ",
        des:"The first step is to express your concerns over the product or service in writing to the manufacturer or seller. For claims above 10,000, it is highly recommended that you have a conversation with your lawyer and deliver the notice through the lawyer on professional letterhead. This will show the vendor that you plan to bring legal action."
    }]
  return (
    <>
    <Heading name={" What is a Consumer Complaint?"} />
      <div className='sm:px-44 text-center' >Consumers who pay for a specific good or service have the right to take legal action if they receive subpar products or subpar services. The Consumer Protection Act of 1986 gives consumers various legal rights and protections. According to this Act, the customer may take a business or service provider to court with a formal complaint. An online consumer complaint is what this specific issue is known as. If the business ignores a legal warning to correct the problem, a complaint is typically made. All necessary information and accompanying documentation must be submitted when registering a complaint. The consumer courts in India offer clients prompt legal counsel and decisions.</div>
           
    <Heading name={" What are the steps for filing a Consumer Complaint"} />
    <div className='text-center font-bold'> </div>

    <div className='grid  grid-cols-1 gap-5 px-2  text-white  lg:grid-cols-3 lg:gap-10 lg:px-10 lg:grid  md:grid-cols-2 md:gap-10 md:px-10 my-20'>

        { data?.map((e)=> <div className=" flex justify-center my-5 flex-col bg-gray-500 p-2">
      <div
        className="bg-white h-[220px] w-[250px] rotate-90 m-auto flex justify-center pt-5 -mt-10"
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
        }}
      >
        <div
          className="text-white p-0 text-center justify-center flex"
          style={{
            // position: "absolute",
            // WebkitClipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            // top: 0,
            // left:" 50%",
            // transform: "translate(-50%, -50%)",
            border: "10px solid gray",
            backgroundColor: "gray",
            height: "180px",
            width: "200px",
          }}
        >
          <div className="m-auto w-10 rotate-[270deg] "> {e.name} </div>
        </div>
      </div>
        <div className="font-bold text-lg my-10 text-center">
          {e.title}
        </div>
        <div className='text-center'>
          {e.des}
        </div>
      </div>)}
    </div>
      
    </>
  )
}

export default Consumer2
