import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Retrieval Agent
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          <span className="ml-2">
            The agent has access to a vector store retriever as a tool as well
            as a memory. It&apos;s particularly well suited to meta-questions
            about the current conversation.
          </span>
        </li>
        <li>
          <span className="ml-2">
            By default, the agent is pretending to be a robot, but you can
            change the prompt to whatever you want.
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            Upload some text, then try asking e.g.{" "}
            <code>What are some ways of doing retrieval in LangChain</code>{" "}
            below.
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval_agents"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      showIntermediateStepsToggle={true}
      placeholder={
        'Beep boop! I\'m a robot retrieval-focused agent! Ask, "What are some ways of doing retrieval in LangChain.js?"'
      }
      emoji="🤖"
      titleText="Robbie the Retrieval Robot"
    ></ChatWindow>
  );
}
