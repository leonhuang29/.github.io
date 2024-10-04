import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="flex max-w-3xl flex-col items-center text-center md:flex-row md:text-left">
        <div className="mb-6 md:mb-0 md:mr-6">
          <div className="h-[150px] w-[150px] overflow-hidden rounded-full">
            <Image
              src="/picture.png"
              alt="Profile Picture"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h1 className="mb-4 text-4xl font-bold text-blue-900">
            Hi, I'm Leon (he/him)
          </h1>
          <p className="mb-2 text-lg text-black">
            I was born in Toronto, but I gained consciusness in San Jose.
            Despite only remembering life as an American, I have been on the
            citizenship waitlist for three years and, as a result, can not vote
            in the 2024 election. I am a Sophomore at Cornell University
            studying Math with a concentration in Computer Science.
          </p>

          <p className="mb-2 text-lg text-black">
            I am a Teaching Assistant for CS 2800 ("Mathematical
            Foundations of Computing") at Cornell. I am also a research
            assistant in the EmPRISE Lab, exploring different ways to create
            adaptive robot control. This coming summer, I will be working as a
            Software Engineering Intern at Capital One.
          </p>

          <p className="mb-2 text-lg text-black">
            Ask me about: doomscrolling Twitter, coaching debate, that time I
            lost to Nihaal Konda in a debate round, the antiwork community, and
            the 2024 election.
          </p>
        </div>
      </div>
    </div>
  );
}
