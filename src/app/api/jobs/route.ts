import { JobService } from '@/services';

const jobService = new JobService();

export async function GET(req: Request) {
  try {
    const jobs = await jobService.getJobs();
    if (!jobs) {
      return new Response(
        JSON.stringify({ ok: false, message: "Jobs not found" }),
        { status: 404 }
      );
    }
    return new Response(JSON.stringify({ ok: true, jobs }), { status: 200 });

  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ ok: false, message: "Internal server error" }),
      { status: 500 }
    );
  }
}
