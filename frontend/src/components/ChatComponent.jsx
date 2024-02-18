import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { URL_BASE } from "../constants";
import axios from "axios";
import { socket } from "../socket";

const url = `${URL_BASE}/chats`;

function ChatComponent() {
  const { register, handleSubmit, reset } = useForm();

  const [messages, setMessages] = useState([]);
  const infoUser = localStorage.getItem("userData");
  const userInfo = JSON.parse(infoUser);

  const onSubmit = async (data) => {
    try {
      const info = {
        _id: userInfo.id,
        name: userInfo.name,
        message: data.text,
        role: userInfo.role,
        createdAt: new Date(),
      };
      socket.emit("message", info);
      setMessages((current) => [...current, info]);
      await axios.post(url, info);
      reset();
    } catch (error) {
      enqueueSnackbar(error.response.data.message + ". Try with some new.", {
        variant: "error",
      });
    }
  };

  const fetchChat = async () => {
    const response = await axios.get(url);
    setMessages(response.data);
  };

  const dummy = useRef(null);
  useEffect(() => {
    dummy.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    fetchChat();
  }, []);

  useEffect(() => {
    socket.connect();

    socket.on("message", (data) => {
      setMessages((current) => [...current, data]);
    });

    return () => {
      socket.disconnect();
      socket.off("message");
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-full h-[calc(100vh_-_134px)] overflow-y-scroll">
        {messages.length > 0 ? (
          <ul className="w-full p-3">
            {messages.map((c) => {
              return (
                <li
                  key={c._id}
                  className={` my-2 p-2 ml-3 table text-sm rounded-md max-w-[200px] break-all ${
                    c.name == userInfo.name
                      ? `bg-sky-700 ml-auto`
                      : `bg-red-400`
                  }`}
                >
                  {c.role == "Moderator" && (
                    <>
                      <span className="text-[8px] font-semibold">
                        Moderator
                      </span>
                      <br />
                    </>
                  )}
                  <span className="font-semibold">{c.name}: </span> {c.message}
                </li>
              );
            })}
            <div ref={dummy} />
          </ul>
        ) : (
          <div>No Message Yet</div>
        )}
      </div>
      <div className="flex items-center w-full h-[70px]">
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap">
            <div className="w-9/12 w-lvh pl-3">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                placeholder="Type Your Text Here"
                {...register("text", { required: true })}
              />
            </div>
            <div className="w-3/12 w-lvh pl-3">
              <button
                className="shadow bg-blue-950 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
