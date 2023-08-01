import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
    <div class="h-screen w-screen flex flex-col justify-center items-center bg-purple-400">
      <h1 class="text-5xl font-black">3D Showcase</h1>
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "3D showcase",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
