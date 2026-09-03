import Link from "next/link";

const projects = [
  {
    href: "https://frontend-seven-mocha-78.vercel.app/",
    img: "images/ex-in.jpg",
    name: "Ex-In",
  },
  {
    href: "https://factfruit.netlify.app/",
    img: "images/factfruit.jpg",
    name: "Fact Fruit",
  },
  {
    href: "https://factactualjob-1089588014300.asia-southeast1.run.app/",
    img: "images/TodoV1.jpg",
    name: "Todo V1",
  },
  {
    href: "https://facttodo.netlify.app/",
    img: "images/TodoV2.jpg",
    name: "Todo V2",
  },
  {
    href: "https://fact-learning.netlify.app/",
    img: "images/fact-learning.jpg",
    name: "Fact Learning",
  },
  {
    href: "https://repair-manual-one.vercel.app/",
    img: "images/repair-manual.jpg",
    name: "Repair Manual",
  },
  {
    href: "https://nutri-foods.netlify.app/",
    img: "images/nutritrack.jpg",
    name: "NutriTrack",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-100 p-5 sm:p-8">
      <div className="container mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-slate-100">
          <img
            src="/images/aicode.jpg"
            alt=""
            width={60}
            height={60}
            className="rounded-full ring-2 ring-indigo-200 shrink-0"
          />
          <p className="text-xl sm:text-2xl font-bold text-slate-800">
            All Menu Programs Personal With AI Agents
          </p>
        </div>

        {/* Grid */}
        <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
            {projects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                target="_blank"
                className="group block rounded-2xl overflow-hidden bg-white shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-medium text-slate-700 truncate">
                    {project.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
