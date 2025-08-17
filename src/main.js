import "./style.css";
import Alpine from "alpinejs";
import Header from "./components/header";
import Footer from "./components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

window.Alpine = Alpine;
Alpine.start();

AOS.init();

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen flex flex-col">
    ${Header()}
    <main class="grow py-12 wrapper space-y-12 border-b-2 border-b-neutral-700  ">
      <section id="home" class="relative py-12 lg:py-0 lg:h-[calc(100vh-80px)] place-content-center place-items-center">
        <div class="p-4 space-y-8 max-w-2xl">
          <hgroup data-aos="fade-up" data-aos-duration="500">
            <h1 class="text-4xl md:text-5xl font-bold flex flex-col">
              <span>Hi, I'm <span class="text-purple-500">Hendrix✨</span></span>
              <span>A <span class="text-purple-500">Frontend Developer</span></span>
            </h1>
          </hgroup>
          <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
            After giving Spanish a shot and not quite hitting the mark, I decided to try my hand at some other languages—this time, I went for <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>! Building that foundation has opened up exciting possibilities for me, and now I’m exploring modern frameworks and libraries like <b>React</b>, <b>Tailwind CSS</b>, and <b>Next.js</b>. It's been a fun journey!
          </p>
          <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div class="flex items-center gap-4" data-aos="fade-right" data-aos-delay="1000" data-aos-duration="500">
              <a href="#contact" class="cta-button"><i class="fa-solid fa-at"></i> Contact Me</a>
              <a href="#projects" class="cta-button"><i class="fa-solid fa-folder-open"></i> View Projects</a>
            </div>
            <div class="hidden md:block w-0.5 bg-white text-transparent" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="500">|</div>
            <div class="flex items-center gap-4" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="500">
              <a href="https://github.com/hendrixejegi" target="_blank"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/hendrixabugewaejegi/" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
              <a href="https://x.com/codeDriX" target="_blank"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div class="absolute -z-10 left-1/10 md:left-6/10 top-5/10 blur-2xl opacity-40 size-50 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700" aria-hidden="true"></div>
        <div class="absolute -z-10 left-4/10 top-1/10 blur-2xl opacity-40 size-50 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%" aria-hidden="true"></div>
      </section>

      <section id="about" class="space-y-8 p-4" data-aos="fade-up" data-aos-duration="500">
        <h2 class="text-3xl font-bold">What's My Reason?</h2>
        <div class="flex flex-col lg:items-center lg:flex-row gap-12">
          <div class="space-y-4">
            <p>
              To put it simply, I enjoy the thrill of discovering new things.
            </p>
            <p>
              The hunger for knowledge is always nurtured when I take on new challenges. As I grow into an adept web developer, I have had opportunities to apply what I learn in creative ways, providing solutions to problems based on my understanding of the skills. An experience that never stops growing. The challenges I encounter consistently highlight areas for improvement, and I embrace them as opportunities to enhance my skills. This is a cycle I appreciate: learning, applying, and receiving feedback.
            </p>
            <p>
              I&apos;m currently putting my skill to the test as an intern at Calmify Technologies where I work under the leadership and guidance of more experienced technical and non-technical team members. I'm helping them build <b>Natsu</b>, a digital tool to improve mental wellness across Africa. Under Calmify I&apos;m learning what it means to be a team player. The standards of what it means to be a good engineer are being raised beyond limits I imagined, pushing me to be better than I was yesterday.
            </p>
          </div>
          <img
            src="/47c01cb8-29e8-4875-92cd-19b473bb5e4f.jpeg"
            alt=""
            class="block w-full lg:max-w-[400px] aspect-square md:aspect-video lg:aspect-auto object-cover md:object-[left_18%] lg:object-center"
          >
        </div>
      </section>

      <section id="projects" class="p-4 space-y-8" data-aos="fade-up" data-aos-duration="500">
        <h2 class="text-3xl font-bold">What I&apos;m Working On</h2>
        <p class="max-w-lg">I like to stay busy, always building, refining, or learning something new. Here are a few projects I&apos;ve worked on recently.</p>
        <div class="flex gap-4 items-center">
          <div class="md:basis-1/2 space-y-4">
            <div class="aspect-video w-full max-w-[584px] p-8 bg-purple-200">
              <img src="/my-side-of-the-stack.png" alt="" class="aspect-video rounded-md shadow-xl shadow-black/60" />
            </div>
            <h3 class="font-bold text-2xl">My Side Of The Stack</h3>
            <p> A personal blog where I share what I&apos;m learning, building, and thinking as I grow in frontend development. From code snippets to reflections, it&apos;s all from my side of the stack.</p>
            <a href="">COMING SOON!</a>
          </div>
        </div>
      </section>

      <section id="experience" class="p-4 space-y-8" data-aos="fade-up" data-aos-duration="500">
        <h2 class="text-3xl font-bold">Where I&apos;ve Been, What I&apos;ve Learned</h2>
        <p class="max-w-lg">
          I&apos;ve had the chance to apply what I&apos;ve learned in real-world environments, collaborating with teams, shipping features, and growing through feedback. Each experience has sharpened my skills and broadened my perspective on what it takes to build meaningful digital products.
        </p>
        <div>
          <div class="lg:w-1/2 space-y-4 lg:ml-auto pl-4 relative before:absolute before:top-0 before:left-0 before:content-[''] before:w-0.5 before:bg-white before:h-full before:bg:white">
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

      <section id="contact" class="relative before:absolute before:content-[''] before:inset-[0_0_0_0] before:bg-[url(/67443.jpg)] before:bg-cover before:-z-10 before:opacity-60 p-4 lg:p-8 rounded-2xl before:rounded-xl border-1 border-neutral-700/60" data-aos="fade-up" data-aos-duration="500">
        <div class="flex flex-col lg:flex-row lg:items-center gap-8 w-full">
          <div class="basis-1/2">
            <hgroup class="space-y-4">
              <h2 class="text-5xl font-bold">Lets Build Something Together</h2>
              <p>Have an idea, a project, or just want to say hi? I&apos;m just a message away.</p>
            </hgroup>
          </div>
          <form action="" id="contact-form" class="basis-1/2 backdrop-blur-sm border-1 rounded-xl p-4 lg:p-8 border-neutral-700/60 bg-black/30 space-y-4">
            <div class="flex flex-col md:flex-row items-center gap-4">
              <div class="input-container">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your name" required />
              </div>
              <div class="input-container">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="contact@email.com" required />
              </div>
            </div>
            <div class="input-container">
              <label for="subject">Subject</label>
              <input type="text" name="subject" id="subject" placeholder="What's this about?" required />
            </div>
            <div class="input-container">
              <label for="message">Message</label>
              <textarea name="message" id="message" placeholder="Tell me everything" required></textarea>
            </div>
            <button type="submit" class="cursor-pointer font-semibold border-1 border-neutral-700/60 px-4 py-2 rounded-lg bg-black/50 ml-auto block">Send</button>
          </form>
        </div>
      </section>
    </main>
    ${Footer()}
  </div>
`;

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_cex169h", "template_27rz2zw", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};
