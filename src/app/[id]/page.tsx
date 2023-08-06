import { JobDetailscard } from "@/components";
import { Job } from "@/interfaces";
import Link from "next/link";

interface JobPageProps {
  params: {
    id: string;
  };
}

async function getJobInfo(id: string) {
  try {
    const response = await fetch(`${process.env.API_URL}/jobs?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.ok) {
      return data.job;
    }
  } catch (error) {
    console.log(error);
  }
}

export default async function Jobpage({ params: { id } }: JobPageProps) {
  const job: Job = await getJobInfo(id);

  return (
    <main className="w-full flex flex-col gap-10 items-center justify-center">
      <section>
        <JobDetailscard job={job} />
      </section>
      <section className="w-[327px] lg:w-[730px] md:w-[689px] rounded-md p-10 job-description">
        <div className="flex flex-col text-gray text-sm gap-2">
          <div className="flex items-center gap-2">
            <span>{job?.postedAt}</span>
            <span className="w-1 h-1 rounded-full bg-gray" />
            <span>{job?.contract}</span>
          </div>
          <h1 className="text-white text-lg font-bold mt-3 sub-title">
            {job?.position}
          </h1>
        </div>
        <h3 className="text-violet text-sm font-bold mt-2">{job?.location}</h3>
        <div className="mt-10 md:-mt-14 md:mb-24  flex justify-center md:justify-end">
          <Link href={job.apply}>
            <span className="px-20 py-3 md:px-5   text-white font-semibold bg-violet rounded-md md:rounded-sm hover:bg-[#939BF4] transition-colors duration-300 ease-in-out">
              Apply Now
            </span>
          </Link>
        </div>
        <article className="mt-10">
          <section className="description">{job?.description}</section>
          <section className="mt-10">
            <header>
              <h3 className="text-xl font-bold sub-title">Requirements</h3>
            </header>
            <p className="mt-5 description">{job?.requirements.content}</p>
            <ul className="mt-10">
              {job.requirements.items.map((item, index) => (
                <div key={index} className="flex mt-10">
                  <span className="w-1 h-1 bg-violet rounded-full mt-2 absolute" />
                  <li className="ml-8 description">{item}</li>
                </div>
              ))}
            </ul>
          </section>
        </article>
        <article className="mt-10">
          <header>
            <h3 className="text-xl font-bold sub-title">What you will do</h3>
          </header>
          <p className="mt-5 text-gray description">{job?.role.content}</p>
          <ol className="mt-10">
            {job?.role.items.map((item, index) => (
              <div key={index} className="flex">
                <span className="text-violet text-lg font-semibold absolute mt-5 ">
                  {index + 1}
                </span>
                <li className="mt-5 ml-9 description">{item}</li>
              </div>
            ))}
          </ol>
        </article>
      </section>
      <div className="w-full h-28 flex justify-center items-center apply-now-footer md:justify-between md:px-10">
        <div className="md:block hidden">
            <h3 className="text-lg font-semibold">{job.position}</h3>
            <span className="text-gray opacity-90 text-sm">{job.company}</span>
        </div>
        <Link href={job?.apply}>
          <span className="px-[7.5rem] py-4 md:px-8  text-white font-semibold bg-violet rounded-md hover:bg-[#939BF4] transition-colors duration-300 ease-in-out">
            Apply Now
          </span>
        </Link>
      </div>
    </main>
  );
}
