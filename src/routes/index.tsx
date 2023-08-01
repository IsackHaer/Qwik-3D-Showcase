import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ArtRoom } from "~/components/router-head/art-room/artRoom";


export default component$(() => {
  return (
    <>
      <h1 class="text-5xl font-black p-12">3D Showcase</h1>
      <ArtRoom />
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
