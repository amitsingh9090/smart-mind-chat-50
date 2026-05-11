import { createFileRoute } from "@tanstack/react-router";
import { ChatInterface } from "@/components/ChatInterface";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Genius Assistant — Smart AI Chat" },
      { name: "description", content: "A clean, minimal dark-themed AI chat assistant." },
    ],
  }),
});

function Index() {
  return <ChatInterface />;
}
