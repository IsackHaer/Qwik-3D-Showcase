import { component$ } from "@builder.io/qwik";

export const Show3D = component$(
  (prop: { title: string; desc: string; spline: string, isEven: boolean }) => {
    if (prop.isEven) {
      return (
        <div class="flex flex-col p-3 h-screen w-screen items-center justify-evenly md:flex-row">
        <iframe src={prop.spline} class="w-full h-full md:w-1/2"></iframe>
        <div class="text-center w-full p-3 rounded-3xl shadow-sm m-3 md:w-1/2">
          <h2 class="text-2xl font-bold p-3">{prop.title}</h2>
          <p>{prop.desc}</p>
        </div>
      </div>
      );
    } else {
    return (
      <div class="flex flex-col p-3 h-screen w-screen items-center justify-evenly md:flex-row">
        <div class="text-center w-full p-3 rounded-3xl shadow-sm m-3 md:w-1/2">
          <h2 class="text-2xl font-bold p-3">{prop.title}</h2>
          <p>{prop.desc}</p>
        </div>
        <iframe src={prop.spline} class="w-full h-full md:w-1/2 md:scale-100"></iframe>
      </div>
    );
    }
  }
);
