import { FC } from "react";

interface JobPageProps {
    params: {
        id: string; 
    }
}

export default async function Jobpage({ params: { id }}: JobPageProps){

    return (
        <h1>hola</h1>
    )
}