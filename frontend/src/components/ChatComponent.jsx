import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { URL_BASE } from "../constants";
import axios from "axios";

const url = `${URL_BASE}/chats`;

function ChatComponent() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async () => {};
  const [messages, setMessages] = useState([]);
  const data = localStorage.getItem("userData");
  const userInfo = JSON.parse(data);

  const fetchChat = async () => {
    const response = await axios.get(url);
    setMessages(response.data);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  console.log({ messages });

  return (
    <div className="flex flex-col">
      <div className="w-full h-[80vh]">
        {messages.length > 0 ? (
          <ul>
            {messages.map((c) => {
              return (
                <li
                  key={c.id}
                  className={"my-2 p-2 ml-3 table text-sm rounded-md"}
                >
                  {c.name}: {c.message}
                </li>
              );
            })}
          </ul>
        ) : (
          <div>No Message Yet</div>
        )}
      </div>
      <div className="w-full h-[20vh]">
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap">
            <div className="w-9/12 w-lvh pl-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                placeholder="Type Your Text Here"
                {...register("username", { required: true, maxLength: 20 })}
              />
            </div>
            <div className="w-3/12 w-lvh pl-3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatComponent;
