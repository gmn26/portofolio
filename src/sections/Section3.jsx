export default function Section3() {
  return (
    <section className="min-h-screen mx-4 py-9 border-b">
      <div className="flex">
        <div className="w-full md:w-1/2 ml-auto flex flex-col gap-2">
          <div className="mb-10">
            <span className="text-gray-500">My Career</span>
          </div>
          {/* No 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-end justify-between">
              <p className="text-lg font-semibold border-b w-fit">
                Freelance Frontend Developer
              </p>
              <p className="text-gray-500">
                January 2025 - Now
              </p>
            </div>
            <p className="-mt-3">PT POP PROPERTI INDONESIA</p>
            <ul className="list-disc ml-8">
              <li>Develope new features for dashboard at cornerstone app, focusing development on front-end side using react.js</li>
              <li>Implement new features for cornerstone{"'"} mobile app to adapt for new features added inside dashboard app using react native</li>
              <li>Testing new features both on dashboard and mobile app</li>
              <li>Fixing bugs that happen while deleopment and other bugs that need to be fixed before launching new features</li>
            </ul>
          </div>
          {/* No 1 */}
          {/* No 2 */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-end justify-between">
              <p className="text-lg font-semibold border-b w-fit">
                Web Programmer and Course Mentor
              </p>
              <p className="text-gray-500">
                October 2023 - December 2024
              </p>
            </div>
            <p className="-mt-3">CV. MEDIATAMA WEB INDONESIA & LPK. MEDIATAMA WEB INDONESIA</p>
            <ul className="list-disc ml-8">
              <li>Proficient in developing and maintaining web application using Laravel, with a focus on integratin new features, optimizing functionalities, and implementing user interfaces based on client request</li>
              <li>Guide and teach interns to upgrade skill base on they point of interest and education background</li>
              <li>Teach students to code web application based on company curriculum using HTML, CSS, Bootsrap, PHP, and MySQL</li>
              <li>Teach students to code mobile application Flutter</li>
            </ul>
          </div>
          {/* No 2 */}
        </div>
      </div>
    </section>
  );
}
