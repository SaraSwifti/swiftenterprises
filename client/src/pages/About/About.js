import React from "react";
import John from "../../images/teamImages/jr.jpg";
// C:\Users\Livlo\OneDrive\Desktop\SwiftEnterprises4\swiftenterprises\client\src\images\teamImages\JR.jpg
import Mary from "../../images/teamImages/mr.jpg";


const people = [
  {
    name: "Mary-Louise R.Rusek",
    alt: "Mary-Louise R. Rusek a beautiful smiling woman with short hair and glasses",
    role: "President/Co-Owner/Scientist",
    imageUrl: Mary,
    experience1:
      "  Four years experience as a research chemist and laboratory manager for the Air Force Rocket Propulsion Laboratory at Edwards Air Force Base",
    experience2:
      " Owner/Operator of Ad Astra, a small business specializing in rocket propulsion products, for 10 years",
    education1: "B.S.Art Education, Case Western Reserve University",
    education2: "B.F.A.Cleveland Institute of Art",

    education3: "B.S.Geology, Northern Illinois University",
    education4: "M.S.Geology, Case Western Reserve University",
  },
  {
    name: "John J. Rusek",
    alt: "Mary-Louise R. Rusek man in a suit and tie, gray hair, beard and smiling eyes",
    role: "President/Co-Owner/Engineer",
    imageUrl: John,
    experience1:
      "42 years of experience in the chemical and propulsion industries",
    experience2:
      "31 years of experience in the military aerospace community as a DoD civil servant",
    experience3:
      "  20 years experience as a professor with the School of Aeronautics and Astronautics at Purdue University",
    education1: "B.S.Chemical Engineering, Case Western Reserve University",
    education2: " M.S.Chemical Engineering, Case Western Reserve University",
    education3:
      "Ph.D.Chemical Engineering/Atomic Physics, Case Western Reserve University",
    education4: "M.S.Strategic Studies, USAF Air War College",
  },
  // More people...
];

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Established in 2001
            </h2>
            <div className="text-xl text-gray-500">
              <h3>
                Swift Enterprises is working to advance the areas of power,
                energy,
              </h3>
              <br />
              <h3>
                The companys facilities allow Swift to perform laboratory
                exploration, process and performance development.
              </h3>
              <br />
              <h3>
                Swift utilizes the services of industry-recognized third-party
                laboratories to validate in-house findings. Along with its
                advisors and partners, Swift Enterprises is continuing to enable
                the United States and the world in energy independence.
              </h3>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-12 sm:-mt-8 sm:space-y-0 sm:divide-y sm:divide-gray-200 lg:gap-x-8 lg:space-y-0">
              {people.map((person) => (
                <div key={person.name} className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="aspect-w-3 aspect-h-4 sm:aspect-w-2 sm:aspect-h-3">
                      <img
                        className="rounded-lg object-cover shadow-lg"
                        src={person.imageUrl}
                        alt="happy"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3>{person.name}</h3>
                          <p className="text-green-600">{person.role}</p>
                        </div>

                        <h3 className="font-bold">Experience:</h3>
                        <ul className="list-disc list-outside">
                          <li className="text-gray-700">
                            {person.experience1}
                          </li>
                          <li className="text-gray-700">
                            {person.experience2}
                          </li>
                          <li className="text-gray-700">
                            {person.experience3}
                          </li>
                        </ul>
                        <h3 className="font-bold">Education: </h3>

                        <ul className="list-disc list-outside">
                          <li className="text-gray-700">{person.education1}</li>
                          <li className="text-gray-700">{person.education2}</li>
                          <li className="text-gray-700">{person.education3}</li>
                          <li className="text-gray-700">{person.education4}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
