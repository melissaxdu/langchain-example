import { ChatWindow } from "@/components/ChatWindow";

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Agents
      </h1>
      <ul>
        {/* <li className="text-l">
          🤝
          <span className="ml-2">
            This template showcases a{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            agent and the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            in a{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            project.
          </span>
        </li> */}
        <li>
          <span className="ml-2">
            The agent has memory and access to a search engine and a calculator.
          </span>
        </li>
        <li>
          <span className="ml-2">
            By default, the agent is pretending to be a scientist, but you
            can the prompt to whatever you want.
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            Check <code>Show intermediate steps</code> to display the JSON that the prompt is coverted to by the model.
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            Try asking e.g. <code>What is the weather in Honolulu?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/agents"
      emptyStateComponent={InfoCard}
      placeholder="I have memory and access to the internet and a calculator. Ask me anything!"
      titleText="Real-time Agent"
      emoji="👩‍🔬"
      showIntermediateStepsToggle={true}
    ></ChatWindow>
  );
}
