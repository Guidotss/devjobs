import Image from "next/image";

interface JobPageProps {
    params: {
        id: string; 
    }
}


async function getJobInfo(id: string){
    try{
        const response = await fetch(`${process.env.API_URL}/jobs?id=${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }); 
        const data = await response.json();
        if (data.ok){
            return data.job; 
        }

    }catch(error){
        console.log(error)
    }
    
}

export default async function Jobpage({ params: { id }}: JobPageProps){
    const job = await getJobInfo(id);
    console.log(job); 

    return (
        <section className="w-full flex items-center justify-center">
            <div className="w-[327px] h-[205px] bg-white rounded-lg shadow-md -mt-4 z-10">
                <div className={`${job.company.split(" ").join("-")} h-[55px] px-1 flex items-center justify-center rounded-2xl absolute left-56 -mt-7 shadow-md`}>
                    <Image
                        src={job.logo}
                        alt={job.company}
                        width={50}
                        height={50}
                        className="p-[3px]"
                    />
                </div>
            </div>
        </section>
    )
}