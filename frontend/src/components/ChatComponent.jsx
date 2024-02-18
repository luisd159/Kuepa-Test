import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { URL_BASE } from "../constants";
import axios from "axios";

const url = `${URL_BASE}/chats`;

function ChatComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {};
  const [chat, setChat] = useState([]);

  const fetchChat = async () => {
    const response = await axios.get(url);
    setChat(response.data);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  console.log(chat);

  return (
    <div className="flex flex-col">
      <div className="w-full h-[80vh]">chat here</div>
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
