import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-white">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left max-w-3xl">
        <div className="mb-6 md:mb-0 md:mr-6">
          <div className="rounded-full overflow-hidden w-[150px] h-[150px]">
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
          <h1 className="text-4xl font-bold mb-4 text-blue-900">Hi, I'm Leon (he/him)</h1> 
          <p className="text-lg text-black mb-2">
            I was born in Toronto, but I gained consciusness in San Jose. Despite only remembering life as an American, 
            I have been on the citizenship waitlist for three years and, as a result, can not vote in the 2024 election. 
            I am a Sophomore at Cornell University studying Math with a concentration in Computer Science. 
          </p>

          <p className="text-lg text-black mb-2">
            I am a first-semester Teaching Assistant for CS 2800 ("Mathematical Foundations of Computing") at Cornell. 
            I am also a research assistant in the EmPRISE Lab, exploring different ways to create adaptive robot control. 
            In the future, I hope to conduct research in Algorithms or Cryptography.
            This coming summer, I will be working as a Software Engineering Intern at Capital One. 
          </p>

          <p className="text-lg text-black mb-2"> 
            Ask me about: doomscrolling Twitter, coaching debate, that time I lost to Nihaal Konda in a debate round, 
            the antiwork community, and the 2024 election. 
          </p>


        </div>
      </div>
    </div>
  );
}
