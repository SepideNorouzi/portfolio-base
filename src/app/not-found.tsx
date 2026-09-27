import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-violet-500">{"// 404"}</p>
      <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">
        This route doesn&apos;t exist yet.
      </h1>
      <p className="mt-4 max-w-md text-body">
        Either the page moved, or it&apos;s still <code className="font-mono">TODO</code> on
        someone&apos;s task list.
      </p>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
    </div>
  );
}
