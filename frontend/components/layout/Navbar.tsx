import { DatabaseZap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-black p-2 text-white dark:bg-white dark:text-black">
            <DatabaseZap className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-lg font-bold">
              GrowEasy AI Importer
            </h1>

            <p className="text-xs text-muted-foreground">
              AI Powered CRM CSV Import
            </p>
          </div>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          Backend Connected
        </span>
      </div>
    </header>
  );
}