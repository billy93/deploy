import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilter";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filter";
import { getQuestions } from "@/lib/actions/question.action";
import Link from "next/link";

export default async function Home() {
  const questions = await getQuestions();

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark500_light700 ">Ask Question</h1>
        <Link href={"/ask-question"} className="flex justify-end">
          <Button className="primary-gradient paragraph-medium max-w-[120px]  px-4 py-3 font-inter text-light-900 max-sm:w-full">
            Ask Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex  gap-5 max-sm:flex-col sm:items-center ">
        <LocalSearch
          route={"/"}
          iconPosition={"left"}
          imgSrc={"/assets/icons/search.svg"}
          placeholder={"Search questions ..."}
          otherClasses={"flex-1"}
        />
        <Filter filterArray={HomePageFilters} />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions ? (
          questions?.map((question, i) => {
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                tags={question.tags}
                author={question.author}
                upvotes={question.upvotes}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
