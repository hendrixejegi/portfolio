export default function Header() {
  return `
    <header class="flex items-center sticky top-0 bg-black z-10">
      <div 
        x-data="{open: false}"
        class="p-4 flex items-center w-full justify-between"
      >
        <div>
          <a href="#home" class="font-bold text-xl text-purple-500">Hendrix Ejegi</a>
        </div>

        <button
          aria-controls="mobile-nav"
          :aria-expanded="open"
          aria-label="Mobile navigation toggle"
          @click="open = !open"
          class="lg:hidden"
        >
          <template x-if="open">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
          </template>
          <template x-if="!open">
            <i class="fa-solid fa-bars" aria-hidden-"true"></i>
          </template>
        </button>

        <!-- Small Screen Navigation -->
        <nav
          id="mobile-nav"
          x-show="open"
          x-transition:enter="transform transition duration-500"
          x-transition:enter-start="rotate-x-90 opacity-0"
          x-transition:enter-end="rotate-x-0 opacity-100"
          x-transition:leave="transform transition duration-500"
          x-transition:leave-start="rotate-x-0 opacity-100"
          x-transition:leave-end="rotate-x-90 opacity-0"
          class="fixed grid place-content-center inset-[44px_0_0_0] lg:inset-auto bg-black z-10"
        >
          <ul class="flex flex-col lg:flex-row items-center gap-4 mx-auto">
            <li><a @click="open = !open" href="#about" class="nav-link">About</a></li>
            <li><a @click="open = !open" href="#projects" class="nav-link">Projects</a></li>
            <li><a @click="open = !open" href="#experience" class="nav-link">Experience</a></li>
            <li><a @click="open = !open" href="#contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>

        <!-- Large Screen Navigation -->
        <nav
          class="hidden lg:grid lg:relative place-content-center inset-[44px_0_0_0] lg:inset-auto bg-black z-10"
        >
          <ul class="flex flex-col lg:flex-row items-center gap-4 mx-auto">
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#projects" class="nav-link">Projects</a></li>
            <li><a href="#experience" class="nav-link">Experience</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
