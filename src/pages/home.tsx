import FormPost from "@/components/posts/_form";
import ItemList from "@/components/posts/itemLists.tsx";
import { useItems } from "@/hooks/useItem";
import { useIsMutating } from "@tanstack/react-query";

export default function Home() {
  const {
    data: items,
    error,
    isLoading
  } = useItems();
  const isAdding = useIsMutating({ mutationKey: ["addItem"] }) > 0;

  if (isLoading) return (
    <div className="loading-wrapper">
      <svg
        className="size-8 fill-slate-500 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 640"
      >
        <path d="M272 112C272 85.5 293.5 64 320 64C346.5 64 368 85.5 368 112C368 138.5 346.5 160 320 160C293.5 160 272 138.5 272 112zM272 528C272 501.5 293.5 480 320 480C346.5 480 368 501.5 368 528C368 554.5 346.5 576 320 576C293.5 576 272 554.5 272 528zM112 272C138.5 272 160 293.5 160 320C160 346.5 138.5 368 112 368C85.5 368 64 346.5 64 320C64 293.5 85.5 272 112 272zM480 320C480 293.5 501.5 272 528 272C554.5 272 576 293.5 576 320C576 346.5 554.5 368 528 368C501.5 368 480 346.5 480 320zM139 433.1C157.8 414.3 188.1 414.3 206.9 433.1C225.7 451.9 225.7 482.2 206.9 501C188.1 519.8 157.8 519.8 139 501C120.2 482.2 120.2 451.9 139 433.1zM139 139C157.8 120.2 188.1 120.2 206.9 139C225.7 157.8 225.7 188.1 206.9 206.9C188.1 225.7 157.8 225.7 139 206.9C120.2 188.1 120.2 157.8 139 139zM501 433.1C519.8 451.9 519.8 482.2 501 501C482.2 519.8 451.9 519.8 433.1 501C414.3 482.2 414.3 451.9 433.1 433.1C451.9 414.3 482.2 414.3 501 433.1z" />
      </svg>
      <p className="text-slate-500">Loading...</p>
    </div>
  );

  if (error) return (
    <div className="loading-wrapper p-5">
      <p className="text-red-500 font-semibold">Error: {error?.message}</p>
    </div>
  );

  return (
    <div className="container my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="mb-5">Add New Item</h1>
          {isAdding && (
            <div className="bg-sky-50 text-sky-600 rounded-lg border border-sky-200 p-2 mb-2">
              <p className="mb-0 text-sm">Agregando item...</p>
            </div>
          )}
          <FormPost />
        </div>
        <div className="bg-slate-100 posts-wrapper vertical-scroll rounded-lg"> 
          <h2 className="mb-5 top-0 sticky z-20 bg-white p-4 ">Item List</h2>
          {items && <ItemList isAdding={isAdding} items={items} />}
        </div>
      </div>
    </div>
  );
}
