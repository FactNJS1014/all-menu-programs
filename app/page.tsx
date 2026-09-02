import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5  space-y-5">
      <div className="container mx-auto ">
        <div className="flex items-center gap-4">
          <div>
            <img
              src="/images/aicode.jpg"
              alt=""
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <p className="text-2xl font-semibold">
            All Menu Programs Personal With AI Agents
          </p>
        </div>
      </div>
      <div className="p-2 border border-slate-200 rounded-xl">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 p-2">
          <div>
            <Link
              href="https://frontend-seven-mocha-78.vercel.app/"
              target="_blank"
            >
              <img
                src="images/money.svg"
                alt=""
                width={300}
                height={300}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div>
            <Link href="https://factfruit.netlify.app/" target="_blank">
              <img
                src="images/factfruit.svg"
                alt=""
                width={300}
                height={300}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://factactualjob-1089588014300.asia-southeast1.run.app/"
              target="_blank"
            >
              <img
                src="images/factTodoV1.svg"
                alt=""
                width={300}
                height={300}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div>
            <Link href="https://facttodo.netlify.app/" target="_blank">
              <img
                src="images/factTodoV2.svg"
                alt=""
                width={300}
                height={300}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div>
            <Link href="https://fact-learning.netlify.app/" target="_blank">
              <img
                src="images/learning.svg"
                alt=""
                width={300}
                height={300}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div>
            <Link href="https://repair-manual-one.vercel.app/" target="_blank">
              <img
                src="images/repair-manual.jpg"
                alt=""
                width={300}
                height={300}
                className="rounded-2xl"
              />
            </Link>
          </div>
          <div>
            <Link href="#" target="_blank">
              <img
                src="images/nutritrack.jpg"
                alt=""
                width={300}
                height={300}
                className="rounded-2xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
