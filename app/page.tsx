// app/page.tsx

import dynamic from "next/dynamic";

const ModelRenderer = dynamic(() => import("@/components/model-renderer"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-300">
      <div className="relative w-[90%] max-w-[1000px] h-auto mt-20">
        <ModelRenderer />
      </div>
      Hello World
    </div>
  );
}
