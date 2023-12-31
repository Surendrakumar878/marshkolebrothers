import { Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";
import Heading from "../../components/homecomponents/Heading";

const PrivateLimitedCompany = () => {
  return (
    <>
      <div className="bg-slate-100 grid grid-cols-1 sm:mb-40 sm:grid sm:grid-cols-2 py-12 ">
        <div>
          <h2 className="text-[34px] font-bold px-14 ">
            Set up Your Dream Company with Online Legal India
          </h2>
        </div>
        <div className=" sm:relative ">
          <div class=" shadow-lg border-collapse border right-10  rounded-2xl px-14 sm:w-[30%] sm:px-20 sm:absolute flex flex-col justify-center space-y-3 md:w-full  mb-7 md:mx-16 lg:mx-0  py-4 lg:px-20">
            <div className="font-bold text-center">
              {" "}
              Need Help with Company Registration?{" "}
            </div>
            <div className="text-center">
              {" "}
              Fill Up the below Mentioned Form{" "}
            </div>
            <div class="flex flex-col  justify-between text-left lg:flex-col space-y-1 lg:space-y-0 ">
              <h1>First name</h1>
              <Input
                type="text"
                name=""
                id=""
                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="flex flex-col justify-between text-left lg:flex-col space-y-1 lg:space-y-0">
              <h1>Last name</h1>
              <Input
                type="text"
                name=""
                id=""
                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="flex flex-col justify-between lg:flex-col text-left space-y-1 lg:space-y-0">
              <h1> Email</h1>
              <Input
                type="email"
                name=""
                id=""
                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
              />
            </div>
            <div class="flex flex-col justify-between lg:flex-col text-left space-y-1 lg:space-y-0">
              <h1>Phone</h1>
              <Input
                type="tel"
                name=""
                id=""
                class="bg-slate-100 rounded-lg px-2 py-1 placeholder:text-gray-600 w-[80%] lg:w-[60%] focus:border focus:outline-none focus:border-blue-500"
              />
            </div>

            <div class="flex flex-col justify-between lg:flex-col text-left space-y-1 lg:space-y-0">
              <h1>State</h1>
              <Select
                showSearch
                name="country"
                //   className="  px-2 py-1 w-[80%] lg:w-[100%]  focus:border focus:outline-none focus:border-blue-500"
                id="country"
              >
                <Option value="selected" label="" selected="selected"></Option>
                <Option value="Afghanistan">Afghanistan</Option>
                <Option value="Albania">Albania</Option>
                <Option value="Algeria">Algeria</Option>
                <Option value="American Samoa">American Samoa</Option>
                <Option value="Andorra">Andorra</Option>
                <Option value="Angola">Angola</Option>
                <Option value="Anguilla">Anguilla</Option>
                <Option value="Antartica">Antarctica</Option>
                <Option value="Antigua and Barbuda">Antigua and Barbuda</Option>
                <Option value="Argentina">Argentina</Option>
                <Option value="Armenia">Armenia</Option>
                <Option value="Aruba">Aruba</Option>
                <Option value="Australia">Australia</Option>
                <Option value="Austria">Austria</Option>
                <Option value="Azerbaijan">Azerbaijan</Option>
                <Option value="Bahamas">Bahamas</Option>
                <Option value="Bahrain">Bahrain</Option>
                <Option value="Bangladesh">Bangladesh</Option>
                <Option value="Barbados">Barbados</Option>
                <Option value="Belarus">Belarus</Option>
                <Option value="Belgium">Belgium</Option>
                <Option value="Belize">Belize</Option>
                <Option value="Benin">Benin</Option>
                <Option value="Bermuda">Bermuda</Option>
                <Option value="Bhutan">Bhutan</Option>
                <Option value="Bolivia">Bolivia</Option>
                <Option value="Bosnia and Herzegowina">
                  Bosnia and Herzegowina
                </Option>
                <Option value="Botswana">Botswana</Option>
                <Option value="Bouvet Island">Bouvet Island</Option>
                <Option value="Brazil">Brazil</Option>
                <Option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </Option>
                <Option value="Brunei Darussalam">Brunei Darussalam</Option>
                <Option value="Bulgaria">Bulgaria</Option>
                <Option value="Burkina Faso">Burkina Faso</Option>
                <Option value="Burundi">Burundi</Option>
                <Option value="Cambodia">Cambodia</Option>
                <Option value="Cameroon">Cameroon</Option>
                <Option value="Canada">Canada</Option>
                <Option value="Cape Verde">Cape Verde</Option>
                <Option value="Cayman Islands">Cayman Islands</Option>
                <Option value="Central African Republic">
                  Central African Republic
                </Option>
                <Option value="Chad">Chad</Option>
                <Option value="Chile">Chile</Option>
                <Option value="China">China</Option>
                <Option value="Christmas Island">Christmas Island</Option>
                <Option value="Cocos Islands">Cocos (Keeling) Islands</Option>
                <Option value="Colombia">Colombia</Option>
                <Option value="Comoros">Comoros</Option>
                <Option value="Congo">Congo</Option>
                <Option value="Congo">
                  Congo, the Democratic Republic of the
                </Option>
                <Option value="Cook Islands">Cook Islands</Option>
                <Option value="Costa Rica">Costa Rica</Option>
                <Option value="Cota D'Ivoire">Cote d'Ivoire</Option>
                <Option value="Croatia">Croatia (Hrvatska)</Option>
                <Option value="Cuba">Cuba</Option>
                <Option value="Cyprus">Cyprus</Option>
                <Option value="Czech Republic">Czech Republic</Option>
                <Option value="Denmark">Denmark</Option>
                <Option value="Djibouti">Djibouti</Option>
                <Option value="Dominica">Dominica</Option>
                <Option value="Dominican Republic">Dominican Republic</Option>
                <Option value="East Timor">East Timor</Option>
                <Option value="Ecuador">Ecuador</Option>
                <Option value="Egypt">Egypt</Option>
                <Option value="El Salvador">El Salvador</Option>
                <Option value="Equatorial Guinea">Equatorial Guinea</Option>
                <Option value="Eritrea">Eritrea</Option>
                <Option value="Estonia">Estonia</Option>
                <Option value="Ethiopia">Ethiopia</Option>
                <Option value="Falkland Islands">
                  Falkland Islands (Malvinas)
                </Option>
                <Option value="Faroe Islands">Faroe Islands</Option>
                <Option value="Fiji">Fiji</Option>
                <Option value="Finland">Finland</Option>
                <Option value="France">France</Option>
                <Option value="France Metropolitan">
                  France, Metropolitan
                </Option>
                <Option value="French Guiana">French Guiana</Option>
                <Option value="French Polynesia">French Polynesia</Option>
                <Option value="French Southern Territories">
                  French Southern Territories
                </Option>
                <Option value="Gabon">Gabon</Option>
                <Option value="Gambia">Gambia</Option>
                <Option value="Georgia">Georgia</Option>
                <Option value="Germany">Germany</Option>
                <Option value="Ghana">Ghana</Option>
                <Option value="Gibraltar">Gibraltar</Option>
                <Option value="Greece">Greece</Option>
                <Option value="Greenland">Greenland</Option>
                <Option value="Grenada">Grenada</Option>
                <Option value="Guadeloupe">Guadeloupe</Option>
                <Option value="Guam">Guam</Option>
                <Option value="Guatemala">Guatemala</Option>
                <Option value="Guinea">Guinea</Option>
                <Option value="Guinea-Bissau">Guinea-Bissau</Option>
                <Option value="Guyana">Guyana</Option>
                <Option value="Haiti">Haiti</Option>
                <Option value="Heard and McDonald Islands">
                  Heard and Mc Donald Islands
                </Option>
                <Option value="Holy See">Holy See (Vatican City State)</Option>
                <Option value="Honduras">Honduras</Option>
                <Option value="Hong Kong">Hong Kong</Option>
                <Option value="Hungary">Hungary</Option>
                <Option value="Iceland">Iceland</Option>
                <Option value="India">India</Option>
                <Option value="Indonesia">Indonesia</Option>
                <Option value="Iran">Iran (Islamic Republic of)</Option>
                <Option value="Iraq">Iraq</Option>
                <Option value="Ireland">Ireland</Option>
                <Option value="Israel">Israel</Option>
                <Option value="Italy">Italy</Option>
                <Option value="Jamaica">Jamaica</Option>
                <Option value="Japan">Japan</Option>
                <Option value="Jordan">Jordan</Option>
                <Option value="Kazakhstan">Kazakhstan</Option>
                <Option value="Kenya">Kenya</Option>
                <Option value="Kiribati">Kiribati</Option>
                <Option value="Democratic People's Republic of Korea">
                  Korea, Democratic People's Republic of
                </Option>
                <Option value="Korea">Korea, Republic of</Option>
                <Option value="Kuwait">Kuwait</Option>
                <Option value="Kyrgyzstan">Kyrgyzstan</Option>
                <Option value="Lao">Lao People's Democratic Republic</Option>
                <Option value="Latvia">Latvia</Option>
                <Option value="Lebanon">Lebanon</Option>
                <Option value="Lesotho">Lesotho</Option>
                <Option value="Liberia">Liberia</Option>
                <Option value="Libyan Arab Jamahiriya">
                  Libyan Arab Jamahiriya
                </Option>
                <Option value="Liechtenstein">Liechtenstein</Option>
                <Option value="Lithuania">Lithuania</Option>
                <Option value="Luxembourg">Luxembourg</Option>
                <Option value="Macau">Macau</Option>
                <Option value="Macedonia">
                  Macedonia, The Former Yugoslav Republic of
                </Option>
                <Option value="Madagascar">Madagascar</Option>
                <Option value="Malawi">Malawi</Option>
                <Option value="Malaysia">Malaysia</Option>
                <Option value="Maldives">Maldives</Option>
                <Option value="Mali">Mali</Option>
                <Option value="Malta">Malta</Option>
                <Option value="Marshall Islands">Marshall Islands</Option>
                <Option value="Martinique">Martinique</Option>
                <Option value="Mauritania">Mauritania</Option>
                <Option value="Mauritius">Mauritius</Option>
                <Option value="Mayotte">Mayotte</Option>
                <Option value="Mexico">Mexico</Option>
                <Option value="Micronesia">
                  Micronesia, Federated States of
                </Option>
                <Option value="Moldova">Moldova, Republic of</Option>
                <Option value="Monaco">Monaco</Option>
                <Option value="Mongolia">Mongolia</Option>
                <Option value="Montserrat">Montserrat</Option>
                <Option value="Morocco">Morocco</Option>
                <Option value="Mozambique">Mozambique</Option>
                <Option value="Myanmar">Myanmar</Option>
                <Option value="Namibia">Namibia</Option>
                <Option value="Nauru">Nauru</Option>
                <Option value="Nepal">Nepal</Option>
                <Option value="Netherlands">Netherlands</Option>
                <Option value="Netherlands Antilles">
                  Netherlands Antilles
                </Option>
                <Option value="New Caledonia">New Caledonia</Option>
                <Option value="New Zealand">New Zealand</Option>
                <Option value="Nicaragua">Nicaragua</Option>
                <Option value="Niger">Niger</Option>
                <Option value="Nigeria">Nigeria</Option>
                <Option value="Niue">Niue</Option>
                <Option value="Norfolk Island">Norfolk Island</Option>
                <Option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </Option>
                <Option value="Norway">Norway</Option>
                <Option value="Oman">Oman</Option>
                <Option value="Pakistan">Pakistan</Option>
                <Option value="Palau">Palau</Option>
                <Option value="Panama">Panama</Option>
                <Option value="Papua New Guinea">Papua New Guinea</Option>
                <Option value="Paraguay">Paraguay</Option>
                <Option value="Peru">Peru</Option>
                <Option value="Philippines">Philippines</Option>
                <Option value="Pitcairn">Pitcairn</Option>
                <Option value="Poland">Poland</Option>
                <Option value="Portugal">Portugal</Option>
                <Option value="Puerto Rico">Puerto Rico</Option>
                <Option value="Qatar">Qatar</Option>
                <Option value="Reunion">Reunion</Option>
                <Option value="Romania">Romania</Option>
                <Option value="Russia">Russian Federation</Option>
                <Option value="Rwanda">Rwanda</Option>
                <Option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </Option>
                <Option value="Saint LUCIA">Saint LUCIA</Option>
                <Option value="Saint Vincent">
                  Saint Vincent and the Grenadines
                </Option>
                <Option value="Samoa">Samoa</Option>
                <Option value="San Marino">San Marino</Option>
                <Option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </Option>
                <Option value="Saudi Arabia">Saudi Arabia</Option>
                <Option value="Senegal">Senegal</Option>
                <Option value="Seychelles">Seychelles</Option>
                <Option value="Sierra">Sierra Leone</Option>
                <Option value="Singapore">Singapore</Option>
                <Option value="Slovakia">Slovakia (Slovak Republic)</Option>
                <Option value="Slovenia">Slovenia</Option>
                <Option value="Solomon Islands">Solomon Islands</Option>
                <Option value="Somalia">Somalia</Option>
                <Option value="South Africa">South Africa</Option>
                <Option value="South Georgia">
                  South Georgia and the South Sandwich Islands
                </Option>
                <Option value="Span">Spain</Option>
                <Option value="SriLanka">Sri Lanka</Option>
                <Option value="St. Helena">St. Helena</Option>
                <Option value="St. Pierre and Miguelon">
                  St. Pierre and Miquelon
                </Option>
                <Option value="Sudan">Sudan</Option>
                <Option value="Suriname">Suriname</Option>
                <Option value="Svalbard">Svalbard and Jan Mayen Islands</Option>
                <Option value="Swaziland">Swaziland</Option>
                <Option value="Sweden">Sweden</Option>
                <Option value="Switzerland">Switzerland</Option>
                <Option value="Syria">Syrian Arab Republic</Option>
                <Option value="Taiwan">Taiwan, Province of China</Option>
                <Option value="Tajikistan">Tajikistan</Option>
                <Option value="Tanzania">Tanzania, United Republic of</Option>
                <Option value="Thailand">Thailand</Option>
                <Option value="Togo">Togo</Option>
                <Option value="Tokelau">Tokelau</Option>
                <Option value="Tonga">Tonga</Option>
                <Option value="Trinidad and Tobago">Trinidad and Tobago</Option>
                <Option value="Tunisia">Tunisia</Option>
                <Option value="Turkey">Turkey</Option>
                <Option value="Turkmenistan">Turkmenistan</Option>
                <Option value="Turks and Caicos">
                  Turks and Caicos Islands
                </Option>
                <Option value="Tuvalu">Tuvalu</Option>
                <Option value="Uganda">Uganda</Option>
                <Option value="Ukraine">Ukraine</Option>
                <Option value="United Arab Emirates">
                  United Arab Emirates
                </Option>
                <Option value="United Kingdom">United Kingdom</Option>
                <Option value="United States">United States</Option>
                <Option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </Option>
                <Option value="Uruguay">Uruguay</Option>
                <Option value="Uzbekistan">Uzbekistan</Option>
                <Option value="Vanuatu">Vanuatu</Option>
                <Option value="Venezuela">Venezuela</Option>
                <Option value="Vietnam">Viet Nam</Option>
                <Option value="Virgin Islands (British)">
                  Virgin Islands (British)
                </Option>
                <Option value="Virgin Islands (U.S)">
                  Virgin Islands (U.S.)
                </Option>
                <Option value="Wallis and Futana Islands">
                  Wallis and Futuna Islands
                </Option>
                <Option value="Western Sahara">Western Sahara</Option>
                <Option value="Yemen">Yemen</Option>
                <Option value="Serbia">Serbia</Option>
                <Option value="Zambia">Zambia</Option>
                <Option value="Zimbabwe">Zimbabwe</Option>
              </Select>
            </div>

            <div class="text-center md:text-left lg:text-right">
              <button class="bg-blue-500 my-2 px-3 py-1 text-white rounded-md hover:bg-blue-600">
                Next
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[24px] px-14 pr-56 py-5">
            {" "}
            Setting Up Your Dream Company Was Never This Easy
          </p>
          <p className="text-[20px] px-14">100% Online Process</p>

          <div className="flex px-14 py-3">
            {" "}
            <div>13427 Consultation Availed</div>
            <div> 4.63/5.00 Our Trustpilot Rating</div>
            <div> 25000+ Number of Trustpilot Review </div>{" "}
          </div>
        </div>
      </div>

      <div>
        <Heading name={"Fastest Private Limited (Pvt. Ltd.) Company Registration In India | Same Day Process"} />

        <div className="text-base text-center sm:px-44">

        Register your startup company as private limited with Online Legal India™ at the lowest Fees. Online Legal India is an MCA (Ministry of Corporate Affairs) & MSME registered company in India. Our experienced (10 Yrs+) CA/CS will draft & complete all the documentations on the same day.


        </div>
      </div>
      <div>
        <Heading name={" Overview "} />

        <div className="text-base text-center sm:px-44">

        Private Limited Company in India is one of the popular forms of business entities. Approximately 90% of companies in India are registered under Private Limited Company. There are more than 150,000 companies that are being registered on a yearly basis. It is a separate legal entity with limited liability and perpetual existence incorporated now under the Companies Act, 2013.

        </div>
      </div>

        <div className="flex my-10 sm:px-40">
        

        <div className="sm:text-lg flex flex-col   text-left sm:px-24  ">
          <div className="py-5 text-xl font-bold">Eligibility to form Private Limited Company</div>
<div className="py-5 text-xl">Number of Directors- Minimum 2 and Maximum 15.</div>
<div className="py-5 text-xl">Number of shareholders- Minimum 2 and maximum 200. However, one person can act as both director and shareholder.</div>
<div className="py-5 text-xl">Citizenship- At least one director should hold Indian Citizenship.
Eligibility to form Private Limited Company
      </div>



        </div>
        <div className="text-center w-[30%]"> 
          <div className="text- "> 
          <div className="text-xl font-bold ">StartUp India </div>
STARTUP INDIA
Online Legal India is now recognized by Department for Promotion of Industry and Internal Trade under Startup India.</div>
        <div>
          
           <div className="text-xl font-bold ">
ISO 9001:2015 CERTIFIED </div>

Online Legal India is a ISO certified body, assuring the quality professional services to aspiring startups.

</div>    
          </div>
      </div>
    </>
  );
};

export default PrivateLimitedCompany;
