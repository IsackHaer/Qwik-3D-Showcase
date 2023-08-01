import { component$ } from '@builder.io/qwik';

export const ArtRoom = component$(() => {
  return (
    <div class="h-screen w-screen flex flex-col items-center p-12">
        <div class="flex p-3 h-screen w-screen items-center justify-evenly">
          <div class="text-center">
            <h2 class="text-2xl font-bold">Artsy-room</h2>
            <p>A room for artistic minds with playful imaginations and happy experiences.</p>
          </div>
          <iframe
            src="https://my.spline.design/miniartroom-b688c944583cdd294ce20f6f30b4016d/"
            class="w-1/2 h-full"
          ></iframe>
        </div>
      </div>
  )
});