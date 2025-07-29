export default function Footer() {
  return `
    <footer class="px-4 py-12 flex flex-col md:flex-row gap-8 md:justify-between">
      <div class="space-y-4">
        <div class="space-y-1">
          <div class="font-bold text-lg">Hendrix Abugewa-Ejegi</div>
          <div><i class="fa-solid fa-map-location-dot"></i> Based in Nigeria</div>
        </div>
        <p>
          <small>
            &copy;2025 Hendrix. UI inspired by <a href="https://dribbble.com/nadir" target="_blank" class="underline">Nadir</a>.<br />
            Photo by rawpixel.com on <a href="http://www.freepik.com" target="_blank" class="underline">Freepik</a>.
          </small>
        </p>
      </div>
      <div class="space-y-8">
        <p>Built with HTML, Tailwind CSS, and vanilla JavaScript.</p>
        <div class="flex justify-start md:justify-end items-center gap-4">
          <a href="https://github.com/hendrixejegi" target="_blank"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/hendrixabugewaejegi/" target="_blank"><i class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
          <a href="https://x.com/codeDriX" target="_blank"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
        </div>
      </div>
    </footer>
  `;
}
