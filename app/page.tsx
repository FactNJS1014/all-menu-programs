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
  {
    href: "https://educode-academy.netlify.app/",
    img: "images/educode.jpg",
    name: "EducodeAcademy",
  },
  {
    href: "https://fact-english.netlify.app/",
    img: "images/factenglish.jpg",
    name: "Fact English",
  },
  {
    href: "https://cyberlesson.netlify.app/",
    img: "images/cyberteams.jpg",
    name: "Cyber Learning",
  },
  {
    href: "https://network-learn.netlify.app/",
    img: "images/networklearning.jpg",
    name: "Network Learning",
  },
  {
    href: "https://smart-things-learn.netlify.app/",
    img: "images/IoTnode.jpg",
    name: "IoT Learning",
  },
  {
    href: "https://games-learning.netlify.app/",
    img: "images/gamelearning.jpg",
    name: "Game Academy",
  },
  {
    href: "https://pygames-academy.netlify.app/",
    img: "images/pygame.jpg",
    name: "PyGame Academy",
  },
  {
    href: "https://pyqt.netlify.app/",
    img: "images/pyqtwindow.jpg",
    name: "PyQT Window Academy",
  },
  {
    href: "https://ai-basic.netlify.app",
    img: "images/aicreator.jpg",
    name: "AI Creator Learning",
  },
  {
    href: "https://full-stack-new.netlify.app",
    img: "images/fullstack.jpg",
    name: "Full stack learning",
  },
  {
    href: "https://promptforge-ai-nine-kappa.vercel.app/",
    img: "images/aipromptforge.jpg",
    name: "Prompt Forge AI Generate",
  },
  {
    href: "https://note-rememeber-g6xk-oczgv3cv2-natdanais-projects-4ebe1b92.vercel.app/",
    img: "images/notememory.jpg",
    name: "Note Memory Fullstack",
  },
  {
    href: "https://fixtech-academy.netlify.app",
    img: "images/csrepair.jpg",
    name: "Fixtech Academy",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-sky-100 p-5 sm:p-8">
      <div className="container mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-slate-100">
          <img
            src="/images/logo1.png"
            alt=""
            width={60}
            height={60}
            className="rounded-full ring-2 ring-indigo-200 shrink-0"
          />
          <p className="text-xl sm:text-2xl font-bold text-slate-800">
            <span className="text-sky-600">All Menu Programs&nbsp;</span>
            Personal With AI Agents
          </p>
        </div>

        {/* Grid */}
        <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
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
