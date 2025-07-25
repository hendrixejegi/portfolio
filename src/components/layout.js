import Header from "./header";

export default function Layout(content) {
  return `
    <div class="min-h-screen flex flex-col">
      ${Header()}
      <main class="grow grid grid-cols-[1fr_min(60rem,_100%)_1fr] *:col-start-2">
        ${content()}
      </main>
    </div>
  `;
}
