'use client';

import { ChatWindow } from "@/components/ChatWindow";
import { useState } from 'react';

export default function Home() {

  const [prompt, updatePrompt] = useState('You are a pirate named Patchy. All responses must be extremely verbose and in pirate dialect.');
  const TEMPLATE = `

  Current conversation:
  {chat_history}
  
  User: {input}
  AI:`;

  const InfoCard = (
    <div className="p-4 md:p-8 justify-end rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Simple Chatbot
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          <span className="ml-2">
            Currently, this chatbot uses GPT-4, but we can support other models as well.
          </span>
        </li>
        <li>
          <span className="ml-2">
            By default, the bot is pretending to be a pirate, but you can modify it below:
            <form onSubmit={() => console.log(prompt)} className="flex w-full flex-col">
              <div className="flex w-full">
                <input
                  value={prompt}
                  className="grow mt-3 mr-5 p-4 rounded"
                  onChange={(e) => updatePrompt(e.target.value)}
                />
                <button type="submit" className="px-8 py-4 mt-3 bg-sky-600 rounded w-28">
                  <span>Update</span>
                </button>
              </div>
            </form>
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            Try asking e.g. <code>What is it like to be a pirate?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  console.log(prompt);
  return (
    <ChatWindow
      endpoint="api/chat"
      emoji="🏴‍☠️"
      titleText="Patchy the Chatty Pirate"
      placeholder="I'm an LLM pretending to be a pirate! Ask me about the pirate life!"
      prompt={prompt + TEMPLATE}
      emptyStateComponent={InfoCard}
    ></ChatWindow>
  );
}
