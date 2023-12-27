import { Form, Input } from 'antd';
import React from 'react'

const Career = () => {
  return (
    <div>
        <div className="bg-gradient-to-b px-2 sm:px-44 from-orange-300 to-[#04619F] w-full ">
          <div className="grid text-white md:col-span-2 p-4  md:grid-cols-3 gap-5 ">
            <div className="md:col-span-2 justify-center flex flex-col items-center md:items-start ">
              <h1 className="md:text-6xl text-3xl">Work @ Online legal India</h1>
              <span>
                We are always looking for talented and competent individuals who
                are good team players with high ambitions, who love challenges
                and have a passion to excel. If you want to join our company and
                be a part of it then you can apply us- just by clicking on apply
              </span>
              <span></span>
            </div>

            {/* Form */}

            <div className="order-3 md:row-span-2 justify-items-center grid w-full ">
              <div className="grid p-5 bg-transparent  duration-300 hover:shadow-xl rounded gap-3  w-full">
                <Form
                //   initialValues={initialValues}
                //   onSubmit={onSubmit}
                //   validationSchema={validationSchema}
                  validateOnMount
                  enableReinitialize
                >
                  {(formik) => {
                    console.log(formik);
                    return (
                      <Form className="flex flex-col gap-2   justify-center items-center  ">
                        {/* <input className='rounded' type="" placeholder='' /> */}
                        <Input
                          control="input"
                          label="Enter Name"
                          type="text"
                          name="fname"
                          placeholder="Enter Name"
                        />
                        {/* Email */}
                        <Input
                          control="input"
                          label="Email"
                          type="email"
                          name="email"
                          placeholder="Email address"
                        />
                        <Input
                          control="input"
                          label="Phone Number"
                          type="number"
                          name="phone"
                          placeholder="Phone Number"
                        />

                        {/* Message */}
                        <Input
                          control="textarea"
                          label="Message"
                          name="message"
                          placeholder="Message"
                        />

                        {/* Flie */}
                        <Input
                          type="file"
                          label="Resume"
                          name="resume"
                          placeholder="Resume"
                        />

                        <button
                          type="submit"
                          className="border bg-blue-700  p-2 px-6 rounded-md font-thin hover:text-xl duration-300 text-white active:bg-green-800 disabled:bg-gray-500 disabled:cursor-not-allowed "
                          disabled={!formik.isValid || formik.isSubmitting}
                        >
                          Submit
                        </button>

                        {/* <textarea name="" placeholder='Message' id="" cols="30" rows="4"></textarea> */}
                        {/* <button className='bg-gradient-to-r  to-blue-800 px-4 py-2 rounded' >submit</button> */}
                      </Form>
                    );
                  }}
                </Form>
                {/* <input className='rounded' type="email" placeholder='Enter Email' /> */}
              </div>
            </div>

            <div className="md:order-3 md:col-span-2 ">
              {/* <div className="flex justify-evenly gap-3">
              <button className="px-4 py-2  bg-gradient-to-r from-black to-blue-700 rounded w-full border">
                <Link to="/signup/login" >
                  Enroll Now
                </Link>
              </button>
              <button className="px-4 py-2  bg-gradient-to-r from-black to-blue-700 rounded w-full border">
                Try For Free
              </button>
            </div> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Career
