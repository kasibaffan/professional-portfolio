import { ArrowDown } from "lucide-react";

interface ArchitectureDiagramProps {
  stages: string[];
}

/**
 * Renders a simple top-to-bottom system architecture diagram from a list
 * of stage labels — used on project detail pages.
 */
export function ArchitectureDiagram({ stages }: ArchitectureDiagramProps) {
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      {stages.map((stage, index) => (
        <div key={stage} className="flex flex-col items-center gap-2">
          <div className="w-full min-w-[220px] rounded-lg border border-border bg-bg-card px-5 py-3 text-center font-mono text-sm text-text sm:min-w-[320px]">
            {stage}
          </div>
          {index < stages.length - 1 && (
            <ArrowDown className="h-4 w-4 text-text-faint" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
