import { Card } from "@/components/ui/card"

interface ExamplePromptsProps {
  onPromptSelect: (prompt: string) => void
}

const EXAMPLE_PROMPTS = [
  {
    title: "Provide a SWOT analysis of this report.",
  },
  {
    title: "Perform a sentiment analysis on this document.",
  },
  {
    title: "Summarize the key financial trends in this report.",
  },
];

export function ExamplePrompts({ onPromptSelect }: ExamplePromptsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      {EXAMPLE_PROMPTS.map((prompt, i) => (
        <Card 
          key={i} 
          className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={() => onPromptSelect(prompt.title)}
        >
          <p className="text-sm text-center font-medium ml-6">{prompt.title}</p> {/* ✅ 这里加 `pl-6` */}
        </Card>
      ))}
    </div>
  );
}

