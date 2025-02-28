import { POR, PORs } from "../Data/Experiances";

const ResponsibilitiesSkills = () => {
  const skills = [
    { name: "HTML & CSS", rating: 90 },
    { name: "JavaScript", rating: 80 },
    { name: "Python", rating: 85 },
    { name: "Machine Learning", rating: 70 },
  ];

  return (
    <div className="min-h-screen text-gray-400 flex flex-col items-center justify-center p-6">
      <div className="container mx-auto p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-white text-center mb-6">
          Positions of Responsibility
        </h1>
        <div className="overflow-y-auto w-full border border-gray-700 rounded-lg">
          <table className="w-full text-left text-gray-300 border-collapse">
            <thead>
              <tr className="bg-purple-800 text-white">
                <th className="p-4 border border-gray-700">Title</th>
                <th className="p-4 border border-gray-700 hidden md:table-cell">
                  Organisation
                </th>
                <th className="p-4 border border-gray-700 hidden md:table-cell">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody>
              {PORs.map((por: POR, index: number) => (
                <tr
                  key={index}
                  className={`bg-gray-${
                    index % 2 ? "7" : "8"
                  }00 hover:bg-gray-600`}
                >
                  <td className="p-4 border border-gray-700">{por.name}</td>
                  <td className="p-4 border border-gray-700 hidden md:table-cell">
                    {por.org}
                  </td>
                  <td className="p-4 border border-gray-700 hidden md:table-cell">
                    {por.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h1 className="text-4xl font-semibold text-white text-center mt-10 mb-6">
          Skill Ratings
        </h1>
        <div className="w-full space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <p className="text-lg font-medium mb-2 text-white">
                {skill.name}
              </p>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-yellow-500 h-4 rounded-full"
                  style={{ width: `${skill.rating}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsibilitiesSkills;
