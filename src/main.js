import "./style.css";
import Alpine from "alpinejs";
import Header from "./components/header";

window.Alpine = Alpine;
Alpine.start();

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen flex flex-col">
    ${Header()}
    <main class="grow py-12 grid grid-cols-[1fr_min(60rem,_100%)_1fr] *:col-start-2 space-y-12">
      <section id="home" class="relative place-content-center place-items-center">
        <div class="p-2 space-y-8 max-w-2xl py-20">
          <hgroup>
            <h1 class="text-4xl md:text-5xl font-bold flex flex-col">
              <span>Hi, I'm <span class="text-purple-500">Hendrix✨</span></span>
              <span>A <span class="text-purple-500">Software Developer</span></span>
            </h1>
          </hgroup>
          <p>
            I'm an entry-level <b>Frontend Developer</b> with a strong foundation in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>,
            along with experience in modern tools and frameworks like <b>Tailwind CSS</b>, <b>React</b>, and <b>Next.js</b>.
          </p>
          <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div class="flex items-center gap-4">
              <a href="" class="cta-button"><i class="fa-solid fa-at"></i> Contact Me</a>
              <a href="" class="cta-button"><i class="fa-solid fa-folder-open"></i> View Projects</a>
            </div>
            <div class="hidden md:block w-0.5 bg-white text-transparent">|</div>
            <div class="flex items-center gap-4">
              <a href=""><i class="fa-brands fa-github" aria-hidden="true"></i></a>
              <a href=""><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
              <a href=""><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div class="absolute -z-10 left-1/10 md:left-6/10 top-5/10 blur-2xl opacity-40 size-50 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700" aria-hidden="true"></div>
        <div class="absolute -z-10 left-4/10 top-1/10 blur-2xl opacity-40 size-50 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%" aria-hidden="true"></div>
      </section>

      <section id="about" class="space-y-8 p-2">
        <h2 class="text-3xl font-bold">How Did I Get Here?</h2>
        <div class="flex flex-col lg:items-center lg:flex-row gap-12">
          <div class="space-y-4">
            <p>
              In 2022, I made the difficult decision to step away from a Mechanical Engineering degree after three years of study. I had developed an interest in software engineering when I was 16 and fresh out of High school but never got the chance to explore it so when I dropped out, I didn't waste a second.
            </p>
            <p>
              After a while I signed up for the engineering program at AltSchool Africa in 2023 but would defer my admission to the next cohort. I came back around the middle of 2024 and completed the program in 2025.
            </p>
            <p>
              I&apos;m currently putting my skill to the test as an intern at Calmify Technologies where I work under the leadership and guidance of more experienced technical and non-technical team members. I'm helping them build Natsu, a digital tool to improve mental wellness across Africa. Under Calmify I&apos;m learning what it means to be a team player. The standards of what it means to be a good engineer are being raised beyond limits I imagined pushing me to be better than I was yesterday.
            </p>
          </div>
          <img
            src="/47c01cb8-29e8-4875-92cd-19b473bb5e4f.jpeg"
            alt=""
            class="block w-full lg:max-w-[320px] aspect-square md:aspect-video lg:aspect-auto object-cover md:object-[left_18%] lg:object-center"
          >
        </div>
      </section>

      <section id="projects" class="p-2 space-y-8">
        <h2 class="text-3xl font-bold">What I&apos;m Working On</h2>
        <p class="max-w-lg">I like to stay busy, always building, refining, or learning something new. Here are a few projects I&apos;ve worked on recently.</p>
        <div class="flex gap-4 items-center">
          <div class="md:basis-1/2 space-y-4">
            <h3 class="font-bold text-2xl">My Side Of The Stack</h3>
            <p> A personal blog where I share what I’m learning, building, and thinking as I grow in frontend development. From code snippets to reflections, it’s all from my side of the stack.</p>
            <a href="/project/my-side-of-the-stack">COMING SOON!</a>
          </div>
        </div>
      </section>

      <section id="experience" class="p-2 space-y-8">
        <h2 class="text-3xl font-bold">Where I&apos;ve Been, What I&apos;ve Learned</h2>
        <p class="max-w-lg">
          I&apos;ve had the chance to apply what I&apos;ve learned in real-world environments, collaborating with teams, shipping features, and growing through feedback. Each experience has sharpened my skills and broadened my perspective on what it takes to build meaningful digital products.
        </p>
        <div>
          <div class="w-1/2 space-y-4 ml-auto pl-4 relative before:absolute before:top-0 before:left-0 before:content-[''] before:w-0.5 before:bg-white before:h-full before:bg:white">
            <div>
              <div class="font-bold text-lg">Frontend Developer</div>
              <div>Calmify Technologies &middot; Internship</div>
              <div>July 2025 - Present</div>
              <div>Remote</div>
            </div>
            <div>
              Supporting the Calmify team in building responsive, user-friendly frontend solutions that promote mental wellness across Africa. Working with tools like NextJs, TypeScript, and Tailwind CSS to implement designs, handle state management, and ensure accessibility across devices.
            </div>
            <div class="size-3 rounded-full absolute top-0 left-0 bg-white -translate-x-[5px]" aria-hidden="true"></div>
          </div>
        </div>
      </section>
    </main>
  </div>
`;
