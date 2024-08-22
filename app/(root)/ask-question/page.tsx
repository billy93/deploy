import Question from "@/components/Forms/Question";
import { getUserById } from "@/lib/actions/user.action";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = async () => {
  // const { userId } = auth();
  // if (!userId) return redirect("/sign-up");
  const mongoUser = await getUserById("12345");

  return (
    <div>
      <h1 className="h1-bold">Ask a question</h1>
      <div className="mt-11">
        <Question mongoUser={JSON.stringify(mongoUser)} />
      </div>
    </div>
  );
};

export default AskQuestion;
