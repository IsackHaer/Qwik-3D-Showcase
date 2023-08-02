import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Show3D } from "~/components/router-head/show3d/show3d";

export default component$(() => {
  return (
    <>
      <section>
        <h1 class="text-5xl font-black pt-12">3D Showcase</h1>
        <Show3D
          title="Artsy-room"
          desc="Step into a haven for artists with playful imaginations, where colors come alive and the canvas becomes a playground of happy experiences. Unleash your creativity, let your brush dance, and watch as your artistic visions transcend the ordinary, taking you on an extraordinary journey of expression and joy. This room is your sanctuary, where the wonders of artistry and ingenuity blend to create a symphony of vibrant masterpieces. Embrace the boundless possibilities and paint your way to a world of unforgettable experiences."
          spline="https://my.spline.design/miniartroom-b688c944583cdd294ce20f6f30b4016d/"
          isEven={false}
        />
      </section>
      <section>
        <div class="bg-slate-300">
          <h1 class="text-5xl font-black pt-12">Next Section</h1>
          <Show3D
            title="Artsy-room"
            desc="Step into a haven for artists with playful imaginations, where colors come alive and the canvas becomes a playground of happy experiences. Unleash your creativity, let your brush dance, and watch as your artistic visions transcend the ordinary, taking you on an extraordinary journey of expression and joy. This room is your sanctuary, where the wonders of artistry and ingenuity blend to create a symphony of vibrant masterpieces. Embrace the boundless possibilities and paint your way to a world of unforgettable experiences."
            spline="https://my.spline.design/miniartroom-b688c944583cdd294ce20f6f30b4016d/"
            isEven={true}
          />
        </div>
      </section>
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
