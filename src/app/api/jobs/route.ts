import { NextRequest } from "next/server";
import { JobService } from "@/services";
import { ObjectId } from "mongodb";

const jobService = new JobService();

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  try {
    if (id) {
      if (!ObjectId.isValid(id)) {
        return new Response(
          JSON.stringify({ ok: false, message: "Job not found" }),
          { status: 404 }
        );
      }
      const job = await jobService.getJobById(id);
      if (!job) {
        return new Response(
          JSON.stringify({ ok: false, message: "Job not found" }),
          { status: 404 }
        );
      }
      return new Response(JSON.stringify({ ok: true, job }), { status: 200 });
    }

    const jobs = await jobService.getJobs();
    if (!jobs) {
      return new Response(
        JSON.stringify({ ok: false, message: "Jobs not found" }),
        { status: 404 }
      );
    }
    return new Response(JSON.stringify({ ok: true, jobs, id }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal server error" }),
      { status: 500 }
    );
  }
}
